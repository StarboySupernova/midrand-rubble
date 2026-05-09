import React from "react";
import { ValueGridStyles } from "../../styles/category/CategoryGridStyles";
import ValueItem from "./ValueItem";

function ValueGrid({ DiginotiveValues }) {
  return (
    <ValueGridStyles>
      {DiginotiveValues.map((item, index) => ( // Note the 'index' added here
        <ValueItem
          key={item.id}
          title={item.title}
          description={item._rawDescription}
          index={index} // Passing index to the child
        />
      ))}
    </ValueGridStyles>
  );
}

export default ValueGrid;