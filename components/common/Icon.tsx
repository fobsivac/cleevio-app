import React, { FC } from "react";

const Icon: FC<{ name: string }> = ({ name }) => {
  return <img src={`/icons/${name}.svg`} alt={name} width={16} height={16} />;
};

export default Icon;
