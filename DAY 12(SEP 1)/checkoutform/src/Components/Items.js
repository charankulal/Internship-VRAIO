import React from "react";

export default function Items(props) {
  return (
    <li className="list-group-item d-flex justify-content-between lh-condensed">
      <div>
        <h6 className="my-0">{props.info.name}</h6>
        <small className="text-muted">{props.info.desc}</small>
      </div>
      <span className="text-muted">{props.info.cost}</span>
    </li>
  );
}
