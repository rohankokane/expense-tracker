import React from 'react';
import TransactionListItem from './TransactionListItem';

const DisplayTransactions = ({transactions, deleteTransactions}) => {

    // console.log(transactions);
    // console.log(transactions.map( t => t.description))
    return(
        <>
        <h3>History</h3>
        <ul className="list">
          {transactions.map((transaction) => (
            <TransactionListItem key={transaction.id} transaction={transaction} deleteTransaction={deleteTransactions}/>
          ))}
        </ul>
      </>
    )
}

export default DisplayTransactions;