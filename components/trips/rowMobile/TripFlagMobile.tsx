import React, { FC } from "react";
import Image from "next/image";
import styled from "styled-components";
import { useStore } from "../../../utils/store";

const TripFlagMobile: FC<{ country: string }> = ({ country }) => {
  const countries = useStore((store) => store.countries);
  const countryLabel = countries.find((c) => c.value === country);

  return (
    <Country>
      <Image src={`/flags/${country}.svg`} width={24} height={24} />
      <span>{countryLabel?.label || "Unknown"}</span>
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
