import React from "react";
import './ExpenseDate.css';

const ExpenseDate = (props) =>{
    const month=props.expense_date.toLocaleString('en-US',{month:'long'});
    const year=props.expense_date.getFullYear();
    const day=props.expense_date.toLocaleString('en-US',{day:'2-digit'});

    return(
        <div className='expense-date'>
            {/* for Calender component we require 3 div ,i.e,month,year & date */}
            <div className='expense-date__month'>{month}</div>
            <div className='expense-date__year'>{year}</div>
            <div className='expense-date__day'>{day}</div>
        </div>
    );
}

export default ExpenseDate;