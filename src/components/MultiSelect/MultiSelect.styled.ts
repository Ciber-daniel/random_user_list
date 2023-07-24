import styled from "styled-components";
import { ButtonHTMLAttributes } from "react";

export const Container = styled.div`
  display: flex;
  width: 100%;
  padding: 5px;
`;

export const MultiSelectContainer = styled.div`
  position: absolute;
  top: 60px;
  display: inline-block;
`;

interface MultiSelectButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
}

export const MultiSelectButton = styled.button<MultiSelectButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f2f2f2;
  color: #555;
  font-size: 16px;
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
`;

export const MultiSelectList = styled.ul`
  position: absolute;
  z-index: 1;
  top: 100%;
  left: 0;
  background-color: #f9f9f9;
  margin-top: 5px;
  padding: 0;
  list-style: none;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  overflow-y: auto;
  width: 200px;
  max-height: 100px;
`;

export const MultiSelectListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px 10px;
  font-size: 16px;
  color: #555;
  background-color: #f2f2f2;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #ddd;
  }
`;

export const MultiSelectCheckbox = styled.input`
  margin-right: 10px;
  cursor: pointer;
`;

export const MultiSelectLabel = styled.label`
  cursor: pointer;
`;

export const MultiSelectClearButton = styled.button`
  display: block;
  margin-top: 5px;
  background-color: #f2f2f2;
  color: #555;
  font-size: 16px;
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
`;