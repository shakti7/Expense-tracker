import React from "react";

import ExpenseForm from "./ExpenseForm";
import './NewExpense.css';

const NewExpense = (props) => {
    // Return a form for our inputs

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData={
            id: Math.random().toString(),
            ...enteredExpenseData
            };
        // console.log(expenseData);
        props.onAddExpense(expenseData);
    };

    return (
    <div className="new-expense">
        {/* <form></form> 
        We can return this form from another component 
        i.e, ExpenseForm.js*/}

        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>

    </div>
    );
};

export default NewExpense;