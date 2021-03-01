// import logo from './logo.svg';
import "./App.css";
import Title from "./components/Title";
import React, { useState, useEffect } from "react";
import Balance from "./components/Balance";
import DisplayTransactions from "./components/Transaction";
import DisplayExpense from "./components/DisplayExpense";
import AddTransaction from "./components/AddTransaction";

function App() {
  const [transactions, setTransactions] = useState(
    window.localStorage.getItem("expenses")
      ? JSON.parse(window.localStorage.getItem("expenses"))
      : []
  );
  useEffect(() => {
    const expenseData = transactions;
    window.localStorage.setItem("expenses", JSON.stringify(expenseData));
  }, [transactions]);

  const newTransaction = (newTrans) => {
    setTransactions([...transactions, newTrans]);
    // console.log(transactions);
  };

  const deleteTransactions = (id) => {
    // console.log(id);
    const updatedTransactions = transactions.filter((t) => t.id !== id);
    setTransactions(updatedTransactions);
  };

  return (
    <>
      <div className="container">
        <div className="contain-stats">
          <Title />
          <Balance transactions={transactions} />
          <DisplayExpense transactions={transactions} />
          <DisplayTransactions
            transactions={transactions}
            deleteTransactions={deleteTransactions}
          />
        </div>
        <div className="contain-form">
          <AddTransaction newTransaction={newTransaction} />
        </div>
      </div>
    </>
  );
}

export default App;
