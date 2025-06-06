import React from "react";
import FieldItem from "./sidebar_field_items/FieldItem";

export default function SideBar() {
  const fieldTypes = ["text", "number", "email", "select", "checkbox", "radio"];
  return (
    <div className="w-2/5 p-4">
      <h2 className="font-bold mb-4 text-base sm:text-xl md:text-2xl lg:text-3xl duration-500">Field Types</h2>
      {fieldTypes.map((type) => (
        <FieldItem key={type} type={type}/>
      ))}
    </div>
  );
}
