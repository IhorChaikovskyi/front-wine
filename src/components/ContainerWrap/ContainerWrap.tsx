import React from "react";
import './ContainerWrap.scss';

export const ContainerWrap: React.FC = (props) => {
  return (
    <div className="container-wrap">
      {props.children}
    </div>
  )

}
