import React, { useState } from "react";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseList from './ExpenseList';
import ExpensesChart from './ExpensesChart';


function Expenses(props) {
  
  
  const [filteredYear, setFilteredYear] = useState(props.year);

  function filterChangeHandler(year) {
    setFilteredYear(year);
  }

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });


  return (
    <Card className="expenses">
      <ExpenseFilter
        selected={filteredYear}
        onChangeHandler={filterChangeHandler}
      />
      <ExpensesChart expenses={filteredExpenses}/>
      <ExpenseList items={filteredExpenses} />
      
    </Card>
  );
}

export default Expenses;
