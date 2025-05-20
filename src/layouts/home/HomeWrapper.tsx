import React from "react";
import "./HomeWrapper.scss";

interface IProps {
  children: React.ReactNode;
}

const HomeWrapper = ({ children }: IProps) => {
  return <div className="hw-container">{children}</div>;
};

export default HomeWrapper;
