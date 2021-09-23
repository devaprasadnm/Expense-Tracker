//import './App.css';
import React,{useState} from 'react';
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Car Insurance",
    price: 296,
    date: new Date(2019, 2, 2),
  },
  {
    id: "e2",
    title: "Newspaper",
    price: 44,
    date: new Date(2018, 3, 17),
  },
  {
    id: "e3",
    title: "Loan",
    price: 300,
    date: new Date(2021, 4, 25),
  },
  {
    id: "e4",
    title: "Cleaning",
    price: 59,
    date: new Date(2020, 4, 28),
  },
];

function App() {  

  const[expenses,setExpenses] = useState(DUMMY_EXPENSES);

  function addExpensesHandler(expense){
    setExpenses((prevExpenses)=>{
      return [expense, ...prevExpenses];
    });
  };
  
  return (
    <div>
      <h1>Expense Tracker</h1>
      <NewExpense onAddExpense={addExpensesHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
