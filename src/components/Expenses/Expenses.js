import React, {useState} from "react";

//import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
import './Expenses.css';

const Expenses = (props) => {
    const [filteredYear,setFilteredYear]=useState('2020');

    const filterChangeHandler = (selectedYear) =>{
        setFilteredYear(selectedYear);
    };

    const filteredExpenses = props.items.filter( expense =>{
        return expense.date.getFullYear().toString() === filteredYear;
    });

    /* let expensesContent=<p>No expenses found.</p>;//assigning default value

    if(filteredExpenses.length > 0){
        expensesContent=(filteredExpenses.map( (expense) => {
            return(<ExpenseItem
                        key={expense.id} 
                        title={expense.title} 
                        amount={expense.amount}
                        date={expense.date} 
                    />) 
        } )
        )
    } */
    //shifting the above commented code to ExpensesList component

    return(
        <Card className="expenses">
            <ExpensesFilter 
                selected={filteredYear} 
                onChangeFilter={filterChangeHandler} 
            />

            {/* <ExpenseItem 
                title={props.items[0].title}
                amount={props.items[0].amount}
                date={props.items[0].date}
            />
            <ExpenseItem 
                title={props.items[1].title}
                amount={props.items[1].amount}
                date={props.items[1].date}
            />
            <ExpenseItem 
                title={props.items[2].title}
                amount={props.items[2].amount}
                date={props.items[2].date}
            />
            <ExpenseItem 
                title={props.items[3].title}
                amount={props.items[3].amount}
                date={props.items[3].date}
            /> */}

            {/* Writing the above code in simpler terms as below using map() : */}
            {/* {
                props.items.map( (expense) => {
                    return(<ExpenseItem
                                key={expense.id} 
                                title={expense.title} 
                                amount={expense.amount}
                                date={expense.date} 
                            />) 
                } ) 
            } */}
            {/* {expensesContent} */}
            <ExpensesChart expenses={filteredExpenses} />
            <ExpensesList items={filteredExpenses} />

        </Card>
    )
}

export default Expenses;