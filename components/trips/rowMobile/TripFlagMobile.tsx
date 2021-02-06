import React, { FC } from "react";
import Image from "next/image";
import styled from "styled-components";

const TripFlagMobile: FC<{ country: string }> = ({ country }) => {
  return (
    <Country>
      <Image src={`/flags/${country}.svg`} width={24} height={24} />
      <span>{country}</span>
    </Country>
  );
};

export default TripFlagMobile;

const Country = styled.div`
  display: flex;
  align-items: center;

  span {
    margin-left: 0.5rem;
    font-size: 1rem;
    font-weight: 600;
  }
`;
