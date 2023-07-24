import styled, { keyframes } from "styled-components";
import { LoadingSpinnerProps } from "./LoadingSpinner";

const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

export const Spinner = styled.div<LoadingSpinnerProps>`
  width: ${(props) => props.size || 50}px;
  height: ${(props) => props.size || 50}px;
  border-radius: 50%;
  border: 4px solid ${(props) => props.color || "#fff"};
  border-top-color: transparent;
  animation: ${spin} 0.8s linear infinite;
`;

export const LoadingWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100%;
`;