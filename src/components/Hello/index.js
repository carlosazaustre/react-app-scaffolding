import React from "react";

import {Component} from "./styles";

export const Hello = () => {
  return (
    <Component>
      <h1>
        Hello, World!{" "}
        <span role="img" aria-label="Hand Wave">
          👋
        </span>
      </h1>
    </Component>
  );
};
