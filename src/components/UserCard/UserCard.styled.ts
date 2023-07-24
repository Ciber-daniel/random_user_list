import styled from "styled-components";

interface IconProps {
  background?: string;
}

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px;
  height: 500px;
  border-radius: 10px;
  background-color: #fff;
  box-shadow: 0px 0px 10px
    rgba(0, 0, 0, 0.2);
  overflow: hidden;

  @media (max-width: 640px) {
    height: 600px;
  }

`;



export const Header = styled.div`
  height: 40%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background-color: rgb(
    230 230 230
  ) !important;
`;

export const Divider = styled.div`
  height: 1px;
  width: 100%;
  background-color: #999;
  position: absolute;
  bottom: 0;
`;

export const ImageContainer = styled.div`
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
`;

export const Image = styled.img`
  width: 200px;
  height: 200px;
  object-fit: contain;
  border-radius: 100px;
  border: 2px solid #999;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 70%;
`;

export const Title = styled.h1`
  text-wrap: wrap;
  font-size: 24px;
  margin: 0 0 30px 0;
  color: black;
  text-align: center;
`;

export const Description = styled.p`
  margin-top: 50px;
  margin-bottom: 5px;
  opacity: 0.5;
  font-size: 18px;
  color: black;
  text-align: center;
`;

export const Icon = styled.li<IconProps>`
  margin: 20px;
  width: 50px;
  height: 62px;
  background: ${(props) =>
    props.background
      ? `url(${props.background})`
      : ""};
  background-size: cover;
  background-position: bottom;
  transition: all 0.3s ease-in;
  &:hover,
  &.active {
    transition: all 0.3s ease-in-out;
    background-position: top;
  }
`;

export const ContainerIcons = styled.ul`
  position: relative;
  overflow: auto;
  flex-wrap:  wrap;
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
`;

export const Text = styled.span`
  font-size: 14px;
  text-transform: uppercase;
  position: absolute;
  top: 100%;
  border-top: 2px solid transparent;
  padding-top: 5px;
  transition: all 0.3s ease-in-out;
`;
