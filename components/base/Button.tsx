import React, { FC } from "react";
import styled, { css } from "styled-components";
import Icon from "./Icon";
import { colors } from "../../styles/variables";

interface Props {
  disabled?: boolean;
  icon?: string;
  loading?: boolean;
  onClick?: () => void;
}

const Button: FC<Props> = ({ disabled, icon, loading, children, onClick }) => {
  return (
    <Wrapper
      disabled={disabled || loading}
      iconOnly={!children}
      onClick={onClick}
    >
      {children}
      {loading ? (
        <Loader src="/icons/loader.svg" width={16} height={16} />
      ) : (
        icon && <Icon name={icon} />
      )}
    </Wrapper>
  );
};

export default Button;

const Wrapper = styled.button<{ iconOnly: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;

  position: relative;

  ${({ iconOnly }) =>
    iconOnly
      ? css`
          width: 3rem;
          height: 3rem;
        `
      : css`
          width: 100%;
          max-width: 12rem;
        `}

  padding: 1rem 1.25rem;
  outline: none;
  border: none;
  border-radius: 10px;

  font-size: 1rem;
  font-weight: 600;

  background-color: ${colors.primary};
  transition: background-color 0.2s ease-in-out;

  &:hover:not(:disabled) {
    background-color: ${colors.primaryDark};
    cursor: pointer;
  }

  &:disabled {
    opacity: 0.4;
  }

  ${({ iconOnly }) =>
    iconOnly &&
    css`
      img {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    `}
`;

const Loader = styled.img`
  animation: spin 2s linear infinite;

  @keyframes spin {
    100% {
      transform: rotate(360deg);
    }
  }
`;
