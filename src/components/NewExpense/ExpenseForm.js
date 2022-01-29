import React, {useState} from "react";
import './ExpenseForm.css';

const ExpenseForm = (props) => {

    const [enteredTitle, setEnteredTitle]=useState('');
    const [enteredAmount, setEnteredAmount]=useState('');
    const [enteredDate, setEnteredDate]=useState('');

    /* const [userInput, setUserInput]= useState({
        enteredTitle : '',
        enteredAmount : '',
        enteredDate : ''
    }) */

    const titleChangeHandler = (event) => {
        // console.log(event.target.value); 
        setEnteredTitle(event.target.value);
        /* setUserInput({
            ...userInput,
            enteredTitle : event.target.value
        }) */
        /* setUserInput((prevState) => {
            return {
                ...prevState,
                enteredTitle: event.target.value
            };
        }); */
    };

    const amountChangeHandler = (event) => {
       setEnteredAmount(event.target.value);
       /* setUserInput({
        ...userInput,
        enteredAmount : event.target.value
    }) */
    };

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
        /* setUserInput({
            ...userInput,
            enteredDate : event.target.value
        }) */
    };

    const submitHandler = (event) => {
        event.preventDefault();//to prevent reloading of page when Add Expense button is pressed

        const expenseData = {
            title: enteredTitle,
            amount: +enteredAmount,
            date: new Date(enteredDate)
        };
        
        // console.log(expenseData);
        props.onSaveExpenseData(expenseData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    };

    return (
    <form onSubmit={submitHandler} >
        {/* since I want user to enter 3 inputs: date,title and amount
         so I will need 3 input fields 
         For styling reasons I'll put every input field in a div*/}
         <div className="new-expense__controls">
             {/* The above div will hold all inputs */}
             <div className="new-expense__control">
                 <label>Title</label>
                 <input 
                    type='text' 
                    value={enteredTitle} 
                    onChange={titleChangeHandler}
                 />
             </div>
             <div className="new-expense__control">
                 <label>Amount</label>
                 <input 
                    type='number' 
                    min='0.01' 
                    step='0.01' 
                    value={enteredAmount}
                    onChange={amountChangeHandler} 
                 />
             </div>
             <div className="new-expense__control">
                 <label>Date</label>
                 <input 
                    type='date' 
                    min='2019-01-01' 
                    max='2022-12-31' 
                    value={enteredDate}
                    onChange={dateChangeHandler} 
                 />
             </div>
         </div>

         <div className="new-expense__actions">
            <button type="submit">Add Expense</button>
            {/* When above button is pressed the above form is submitted */}
         </div>
    </form>
    );
};

export default ExpenseForm;