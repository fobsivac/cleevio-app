import React, { FC } from "react";
import Image from "next/image";
import styled from "styled-components";
import { colors } from "../../styles/variables";

const TripFlag: FC<{ country: string }> = ({ country }) => {
  return (
    <Flag>
      <Image src={`/flags/${country}.svg`} width={40} height={40} />
    </Flag>
  );
};

export default TripFlag;

const Flag = styled.div`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  padding: 0.25rem;
  background-color: ${colors.gray};
`;
