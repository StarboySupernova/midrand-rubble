import React from "react";
import { ValueGridStyles } from "../../styles/category/CategoryGridStyles";
import ValueItem from "./ValueItem";

function ValueGrid({ DiginotiveValues }) {
  return (
    <ValueGridStyles>
      {DiginotiveValues.map((item) => (
        <ValueItem
          key={item.id}
          title={item.title}
          description={item._rawDescription}
        />
      ))}
    </ValueGridStyles>
  );
}

export default ValueGrid;
