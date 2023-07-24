import { ListContainer } from "./UserList.styled";
import { User } from "../../types/user";
import { UserCard } from "../UserCard/UserCard";
import { Link } from "react-router-dom";
import { ButtonsContainer } from "../../views/Main";
import styled from "styled-components";

interface UserListProps {
  users: User[];
}

const FloatButton = styled.div`
  position: absolute;
  width: 74px;
  top: 60px;
  left: 30px;
`;

export default function UserList({ users }: UserListProps): JSX.Element {
  return (
    <>
      <Link to={`/`}>
        <FloatButton>
          <button className="float-button">Back</button>
        </FloatButton>
      </Link>
      <ListContainer>
        {users.map((user) => (
          <UserCard key={user.email} user={user} />
        ))}
      </ListContainer>
    </>
  );
}
