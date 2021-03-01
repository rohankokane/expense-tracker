import React from 'react';

const DisplayExpense = ({transactions}) => {
    // var {amount} = transactions;
    // console.log(transactions);

    const income = transactions.filter((t) => t.amount > 0)
                .reduce((acc, exp) =>  acc+= exp.amount, 0);
    // console.log(income)
    
    const expense = transactions.filter((t) => t.amount < 0)
                .reduce((acc, exp) =>  acc+= exp.amount, 0);
    return (
      <div className="inc-exp-container">
        <div>
          <h4>Income</h4>
          <p className="money plus">{income}</p>
        </div>
        <div>
          <h4>Expense</h4>
          <p className="money minus">{expense}</p>
        </div>
      </div>
    )
}

export default DisplayExpense;