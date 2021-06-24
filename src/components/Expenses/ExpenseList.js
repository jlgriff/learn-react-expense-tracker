import "./ExpenseList.css";
import Card from "./../UI/Card";
import ExpenseItem from "./ExpenseItem";

const ExpenseList = (props) => {
  return (
    <Card className="expenses">
      <ExpenseItem
        date={props.expenses[0].date}
        title={props.expenses[0].title}
        amount={props.expenses[0].amount}
      />
      <ExpenseItem
        date={props.expenses[1].date}
        title={props.expenses[1].title}
        amount={props.expenses[1].amount}
      />
    </Card>
  );
};

export default ExpenseList;
