import React from "react";
import {LoadingWrapper, Spinner} from './LoadingSpinner.styled'

export interface LoadingSpinnerProps {
  size?: number;
  color?: string;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  size,
  color,
}) => {
  return (
    <LoadingWrapper>
      <Spinner size={size} color={color} />
    </LoadingWrapper>
  );
};

export default LoadingSpinner;
