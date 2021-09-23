import React from 'react';
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from '../UI/Card';


function ExpenseItem(props) {
  //Dynamic
  // const expenseDate = new Date (2021, 2, 28);
  // const expenseTitle = 'Car Insurance';
  // const expensePrice = 295.6


  return (
    <li>
    <Card className="expense-item">
        <ExpenseDate date = {props.date}/>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.price}</div>
    
      </div>
    </Card>
    </li>
  );
}

export default ExpenseItem;
