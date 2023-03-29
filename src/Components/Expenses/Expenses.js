import React, { useState } from "react";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2021");
  const filterChangeHandler = (selectedYear) => {
    // console.log("Expense.js");
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  // Method 3
  // let expensesContent = <p>No Expenses Found.</p>;

  // if (filteredExpenses.length > 0) {
  //   expensesContent = filteredExpenses.map((expense) => (
  //     <ExpenseItem
  //       key={expense.id}
  //       title={expense.title}
  //       amount={expense.amount}
  //       date={expense.date}
  //     />
  //   ));
  // }

  return (
    <Card className="expenses">
      <ExpenseFilter year={filteredYear} onChangeFilter={filterChangeHandler} />
      {/* Method 1 */}
      {/* {filteredExpenses.length === 0 ? (
        <p>No Expenses Found.</p>
      ) : (
        filteredExpenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))
      )} */}

      {/* Method 2 */}
      {/* {filteredExpenses.length === 0 && <p>No Expenses Found.</p>}
      {filteredExpenses.length > 0 &&
        filteredExpenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))} */}

      {/* Method 3 */}
      {/* {expensesContent} */}

        <ExpensesChart expenses={filteredExpenses}/>

      {/* Method 4 */}
      <ExpensesList items={filteredExpenses}/>
    </Card>
  );
}

export default Expenses;
