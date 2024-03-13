import React from "react";
import "../styles/form.css";
import FormHeader from "./FormHeader";
import FormBody from "./FormBody";

const Form = ({itemsData, handleUpdateItems}) => {
  return (
    <div className="form container">
      <h2>Form</h2>
      <FormHeader itemsData={itemsData} handleUpdateItems={handleUpdateItems} />
      <FormBody itemsData={itemsData} />
    </div>
  );
};

export default Form;
