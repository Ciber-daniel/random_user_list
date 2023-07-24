import styled from "styled-components";
import { UserCard } from "../components/UserCard/UserCard";
import { useEffect, useState } from "react";
import { IUser, getUsers } from "../api/getUsers";
import { User } from "../types/user";
import { requestUtil } from "../utils/axios";
import { defaultUser } from "../consts/defaultUser";
import LoadingSpinner from "../components/LoadingSpinner/LoadingSpinner";
import { Link, useLocation } from "react-router-dom";
import { getRandomFromArray } from "../utils/util";
import { countryOptions } from "../consts/avalaibleCountries";

const CenteredDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  flex-direction: column;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 20px 0;
  justify-content: center;
  width: 100%;
  gap: 20px;

  .float-button {
    position: absolute;
    top: 20px;
    left: 20px;
  }
`;

export default function Main(): JSX.Element {
  const [user, setUser] = useState<User>(defaultUser);
  const [loading, setLoading] = useState<boolean>(false);

  // get actual route path with react router dom
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname === "/") {
      requestUtil<IUser, User[]>({
        action: getUsers,
        payload: {
          param: "",
          results: 1,
        },
        loader: (loading) => {
          setLoading(loading);
        },
        reject: (err) => console.log(err),
        resolve: (res) => {
          setUser(res[0]);
        },
      });
    }
  }, [pathname]);

  const randomCountry = countryOptions.map((country) => country.value);

  return (
    <CenteredDiv>
      {loading ? (
        <LoadingSpinner size={50} color={"blue"} />
      ) : (
        <UserCard user={user} />
      )}
      <ButtonsContainer>
        <Link to="/Users">
          <button>Countries select</button>
        </Link>
        <Link to={`/users/${getRandomFromArray(randomCountry)}`}>
          <button>User by a random country</button>
        </Link>
      </ButtonsContainer>
    </CenteredDiv>
  );
}
