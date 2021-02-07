import React, { FC } from "react";
import Image from "next/image";
import styled, { css } from "styled-components";
import { useStore } from "../../utils/store";
import { colors } from "../../styles/variables";

const TripCountry: FC<{ country: string; mobile?: boolean }> = ({
  country,
  mobile,
}) => {
  const countries = useStore((store) => store.countries);
  const countryLabel = countries.find((c) => c.value === country);
  const imgSize = mobile ? 24 : 40;

  return (
    <Country>
      <Flag mobile={!!mobile}>
        <Image src={`/flags/${country}.svg`} width={imgSize} height={imgSize} />
      </Flag>
      {mobile && <span>{countryLabel?.label || "Unknown"}</span>}
    </Country>
  );
};

export default TripCountry;

const Country = styled.div`
  display: flex;
  align-items: center;

  span {
    margin-left: 0.5rem;
    font-size: 1rem;
    font-weight: 600;
  }
`;

const Flag = styled.div<{ mobile: boolean }>`
  display: flex;
  border-radius: 50%;
  background-color: ${colors.gray};
  ${({ mobile }) =>
    !mobile &&
    css`
      width: 3rem;
      height: 3rem;
    `}
  padding: ${({ mobile }) => (mobile ? "2px" : "4px")};
`;
