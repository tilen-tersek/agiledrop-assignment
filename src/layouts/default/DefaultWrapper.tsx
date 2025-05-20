import React from "react";
import "./DefaultWrapper.scss";

interface IProps {
  children: React.ReactNode;
}

const DefaultWrapper = ({ children }: IProps) => {
  return <div className="dw-container">{children}</div>;
};

export default DefaultWrapper;
