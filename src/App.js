import React, {useState} from "react";
// import ExpenseItem from "./components/ExpenseItem";
import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Face Wash',
    amount: 199,
    date: new Date(2020,7,14)
  },
  {
    id: 'e2',
    title: 'New TV',
    amount: 42500,
    date: new Date(2021,2,12)
  },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 11257,
    date: new Date(2021,2,28)
  }
  ,
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 6349,
    date: new Date(2021,5,12)
  }
];

const App = () => {
  const [expenses,setExpenses] = useState(DUMMY_EXPENSES);//dummy expenses is for initial display

  const addExpenseHandler = (expenseData) => {
    // console.log('In App.js');
    // console.log(expenseData);

    //setExpenses([expenseData,...expenses]);//not a good practice
    setExpenses((prevExpenses)=>{
      return [expenseData,...prevExpenses];
    });
    //console.log(expenses);
  };

  return (
    <div>
      {/* <h2>Let's get started!</h2> */}

      <NewExpense onAddExpense={addExpenseHandler} />

      {/* <ExpenseItem 
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      />
      <ExpenseItem 
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      />
      <ExpenseItem 
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      />
      <ExpenseItem 
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      /> */}
      {/* Moving the above piece of code to Expenses.js */}
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
