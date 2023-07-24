import { useState, FC } from "react";
import UserIcon from "../../assets/icon1.png";
import Email from "../../assets/icon2.png";
import Birthday from "../../assets/icon3.png";
import Address from "../../assets/icon4.png";
import Phone from "../../assets/icon5.png";
import Password from "../../assets/icon6.png";

import {
  Card,
  Container,
  ContainerIcons,
  Content,
  Description,
  Divider,
  Header,
  Icon,
  Image,
  ImageContainer,
  Title,
} from "./UserCard.styled";

import { Street, User } from "../../types/user";

type UserCardProps = {
  user: User;
};

type IconKeyMap = {
  [key: string]: string;
};

export const UserCard: FC<UserCardProps> = ({ user }) => {
  const [info, setInfo] = useState({
    description: "My name is",
    title: user.name.first + " " + user.name.last,
  });

  const [activeIcon, setActiveIcon] = useState("FAHOUSEUSER");

  const iconKeyMap: IconKeyMap = {
    FAHOUSEUSER: UserIcon,
    FAMAILBULK: Email,
    FALISTALT: Birthday,
    FAADDRESSCARD: Address,
    FAPHONEALT: Phone,
    FALOCK: Password,
  };

  const handleHover = (key: string) => {
    const { name } = user;

    let showName = "";
    let email = "";
    let birthDay = new Date();
    let address: Street = {
      name: "",
      number: 0,
    };
    let phoneNumber = "";
    let password = "";

    setActiveIcon(key);

    switch (key) {
      case "FAHOUSEUSER":
        showName = name.first + " " + name.last;
        setInfo({
          description: "My name is",
          title: showName,
        });
        break;
      case "FAMAILBULK":
        email = user.email;
        setInfo({
          description: "My email is",
          title: email,
        });
        break;
      case "FALISTALT":
        birthDay = new Date(user.dob.date);
        setInfo({
          description: "My birthday is",
          title: birthDay.toLocaleDateString(),
        });
        break;
      case "FAADDRESSCARD":
        address = user.location.street;
        setInfo({
          description: "My address is",
          title: address.name + " " + address.number + ", " + user.location.country,
        });
        break;
      case "FAPHONEALT":
        phoneNumber = user.phone;
        setInfo({
          description: "My phone number is",
          title: phoneNumber,
        });
        break;
      case "FALOCK":
        password = user.login.password;
        setInfo({
          description: "My password is",
          title: password,
        });
        break;
    }
  };

  const { name, picture } = user;

  return (
    <Container>
      <Card>
        <Header>
          <Divider />
          <ImageContainer>
            <Image src={picture.large} alt={name.first} />
          </ImageContainer>
        </Header>
        <Content>
          <Description>{info.description}</Description>
          <Title>{info.title}</Title>

          <ContainerIcons>
            {Object.entries(iconKeyMap).map(([key]) => {
              const isActive = key === activeIcon;
              const background = iconKeyMap[key];

              return (
                <Icon
                  key={key}
                  onMouseEnter={() => handleHover(key)}
                  className={isActive ? "active" : ""}
                  background={background}
                />
              );
            })}
          </ContainerIcons>
        </Content>
      </Card>
    </Container>
  );
};
