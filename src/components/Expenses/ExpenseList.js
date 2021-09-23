import ExpenseItem from "./ExpenseItem"
import "./ExpenseList.css";


function ExpenseList(props){

    if(props.items.length === 0){
        return <h2 class="expenses-list__fallback">Found No Expenses</h2>
    }
    return(
        <ul className="expenses-list">
     { props.items.map((expense) => (
         <ExpenseItem
          key={expense.id}
          title={expense.title}
          price={expense.price}
          date={expense.date}
        />
      ))}
        </ul>
    );
}

export default ExpenseList;