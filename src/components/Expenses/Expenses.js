import React, { useState } from "react";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css";
import ExpensesList from "./ExpensesList";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");
  
  const filterChangeHandler = (selectedYear) => {
    //console.log("on filter handler:" + selectedYear);
    setFilteredYear(selectedYear);    
  };
  const filteredItems = props.items.filter( expense => expense.date.getFullYear().toString() === filteredYear);



  return (
    <li>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onFilterChange={filterChangeHandler}
        />
        <ExpensesList items={filteredItems}/>
      </Card>
    </li>
  );
};

export default Expenses;
