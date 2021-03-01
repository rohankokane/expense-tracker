import React from "react";

function TransactionListItem({ transaction, deleteTransaction }) {
  const sign = transaction.amount < 0 ? "-" : "+";
  return (
    <div>
      <li className={transaction.amount < 0 ? "minus" : "plus"}>
        {transaction.description}
        <span>
          <span>
            {sign}₹{Math.abs(transaction.amount)}
          </span>
          <button
            onClick={() => deleteTransaction(transaction.id)}
            className="delete-btn"
          >
            x
          </button>
        </span>
      </li>
    </div>
  );
}

export default TransactionListItem;
