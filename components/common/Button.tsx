import React, { FC } from "react";
import styled, { css } from "styled-components";
import Icon from "./Icon";
import { colors } from "../../styles/variables";

interface Props {
  btnType?: "primary" | "secondary" | "red";
  disabled?: boolean;
  icon?: string;
  loading?: boolean;
  onClick?: () => any | Promise<any>;
  wide?: boolean;
  type?: "button" | "submit" | "reset";
}

const Button: FC<Props> = ({
  btnType,
  disabled,
  icon,
  loading,
  children,
  onClick,
  wide,
  type,
}) => {
  return (
    <Wrapper
      btnType={btnType}
      disabled={disabled || loading}
      iconOnly={!children}
      onClick={onClick}
      wide={wide}
      type={type}
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

const Wrapper = styled.button<{
  btnType?: "primary" | "secondary" | "red";
  iconOnly: boolean;
  wide?: boolean;
}>`
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
        `}

  ${({ wide }) => !wide && "max-width: 14rem;"}

  padding: 1rem 1.25rem;
  outline: none;
  border: none;
  border-radius: 10px;

  font-size: 14px;
  font-weight: 600;

  color: ${({ btnType }) =>
    btnType === "secondary"
      ? colors.gray6
      : btnType === "red"
      ? colors.red
      : colors.black};
  background-color: ${({ btnType }) =>
    btnType === "secondary"
      ? colors.gray
      : btnType === "red"
      ? colors.redLighter
      : colors.primary};
  transition: all 0.2s ease-in-out;

  &:hover:not(:disabled) {
    background-color: ${({ btnType }) =>
      btnType === "secondary"
        ? colors.gray2
        : btnType === "red"
        ? colors.redLight
        : colors.primaryDark};
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
  animation: spin 1s linear infinite;

  @keyframes spin {
    100% {
      transform: rotate(360deg);
    }
  }
`;
