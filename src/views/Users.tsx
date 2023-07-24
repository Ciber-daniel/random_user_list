import { useEffect, useState } from "react";
import { ViewContainer } from "../styles/ViewContainer.styled";
import UserList from "../components/UserList/UserList";
import { User } from "../types/user";
import MultiSelect from "../components/MultiSelect/MultiSelect";
import { countryOptions } from "../consts/avalaibleCountries";
import { CenterFilterSection } from "../styles/Users.styled";
import { useParams } from "react-router-dom";
import { requestUtil } from "../utils/axios";
import { IUser, getUsers } from "../api/getUsers";
import LoadingSpinner from "../components/LoadingSpinner/LoadingSpinner";
import { sleep } from "../utils/util";

export default function Users() {
  const [users, setUser] = useState<User[]>([]);
  const [selectedCountries, setSelectedCountries] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);

  const { nationality } = useParams<{ nationality: string }>();

  useEffect(() => {
    if (nationality) {
      const hasNationality = countryOptions.find(
        (country) => country.value === nationality.toUpperCase()
      );

      if (!hasNationality) {
        alert(
          "No poseemos dicha nacionalidad, por favor intente con alguna otra"
        );
      }
    }

    sleep(1000).then(() => {
      requestUtil<IUser, User[]>({
        action: getUsers,
        payload: {
          param: nationality || selectedCountries,
          results: 10,
        },
        loader: (loading) => {
          setLoading(loading);
        },
        reject: (err) => console.log(err),
        resolve: (res) => setUser(res),
      });
    });
  }, [selectedCountries, nationality]);

  const handleCountriesChange = (countriesSelected: string) => {
    setSelectedCountries(countriesSelected);
    setLoading(true);
  };

  return (
    <>
      <ViewContainer>
        {!nationality ? (
          <CenterFilterSection>
            <MultiSelect
              options={countryOptions}
              onChange={handleCountriesChange}
            />
          </CenterFilterSection>
        ) : (
          ""
        )}
        {loading ? (
          <LoadingSpinner size={50} color={"blue"} />
        ) : (
          <UserList users={users} />
        )}
      </ViewContainer>
    </>
  );
}
