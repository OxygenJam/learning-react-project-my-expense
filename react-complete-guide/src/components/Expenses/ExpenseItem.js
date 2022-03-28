// A component in react is just a function

// Only 1 root element in JSX
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
	const expenseTitle = props.title;
	const expenseAmount = props.amount;

	return (
		<Card className="expense-item">
			<ExpenseDate date={props.date} />
			<div className="expense-item__description">
				<h2>{expenseTitle}</h2>
				<div className="expense-item__price">${expenseAmount}</div>
			</div>
		</Card>
	);
};

export default ExpenseItem;