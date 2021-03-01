import React from "react";

const Balance = ({ transactions }) => {
  // const total =;
  // console.log(total)
  const expense = transactions.reduce((acc, exp) => (acc += exp.amount), 0);
  // console.log(expense);
  return (
    <>
      <h4>
        Balance: <span style={{ fontSize: 20 }}> Rs. {expense} </span>
      </h4>
    </>
  );
};

export default Balance;
