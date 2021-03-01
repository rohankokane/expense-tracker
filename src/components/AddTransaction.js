import React, { useState } from "react";

const AddTransaction = ({ newTransaction }) => {
  const [Description, setDescription] = useState("");
  const [Amount, setAmount] = useState("");
  // console.log(Description);

  const onSubmitForm = (event) => {
    event.preventDefault();
    // console.log(Description)
    const newTrans = {
      id: Math.floor(Math.random() * 1000),
      description: Description,
      amount: +Amount,
    };
    // console.log(newTrans)
    if (!Amount == 0) {
      newTransaction(newTrans);
      setAmount("");
      setDescription("");
      //   event.target.elements.description.focus();
    } else {
      alert("Please enter a valid amount!!");
    }
  };

  return (
    <form onSubmit={onSubmitForm}>
      <div className="form-control">
        {/* <label htmlFor="description">Description: </label> */}
        <input
          type="text"
          id="description"
          value={Description}
          placeholder="Enter description"
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>

      <div className="form-control">
        {/* <label htmlFor="amount">Amount: </label> */}
        <input
          type="number"
          id="amount"
          value={Amount}
          placeholder="Enter amount"
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>

      <button className="btn" type="submit">
        Add Transaction
      </button>
    </form>
  );
};

export default AddTransaction;
