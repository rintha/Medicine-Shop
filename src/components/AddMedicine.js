import React from "react";
import classes from "./AddMedicine.module.css";

const AddMedicine = () => {
  return (
    <div>
      <form>
        <div className={classes.control}>
          <label htmlFor="title">Medicine Name</label>
          <input type="text" id="title" />
        </div>
        <div className={classes.control}>
          <label htmlFor="opening-text">Desciption</label>
          <textarea rows="2" id="opening-text"></textarea>
        </div>
        <div className={classes.control}>
          <label htmlFor="price">Price</label>
          <input type="number" id="price" />
          <label htmlFor="quantity">Quantity Available</label>
          <input type="number" id="quantity" />
        </div>
    
        <button>Add Medicines</button>
      </form>
    </div>
  );
};

export default AddMedicine;
