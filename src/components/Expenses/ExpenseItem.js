import React, {useState} from "react"; 

import ExpenseDate from './ExpenseDate';
import Card from "../UI/Card";
import './ExpenseItem.css';

//Note In the below function ExpenseItem u can pass props with any name
const ExpenseItem = (props) => {
    /* const expenseDate = new Date(2021, 2 ,28);
    const expenseTitle = 'Car Insurance';
    const expenseAmount =  7890; */

    /* const [title,setTitle]= useState(props.title);
    console.log('ExpenseItem evaluated by React'); */

    //let title=props.title;

   /*  const clickHandler =()=>{
        // console.log('Button Clicked!');
        //title='Updated';
        setTitle('Updated!');
        console.log(title);//In the o/p u will see the old value
        //even though u assign new Title as setTitle doesn't change 
        //the value right away but instead schedules 
        //state update,i.e.,setTitle()
    }; */

    return (
    <li>
        <Card className='expense-item'>
            <ExpenseDate expense_date={props.date} />
            <div className='expense-item__description'>
                <h2>{props.title}</h2>
                <div className='expense-item__price'>₹{props.amount}</div>
            </div>
            {/* <button onClick={clickHandler}>Change Title</button> */}
        </Card>
    </li>
    );
}

export default ExpenseItem;