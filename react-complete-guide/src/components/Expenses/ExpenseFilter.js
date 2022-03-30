import React from "react";

import "./ExpenseFilter.css";

const ExpensesFilter = (props) => {
    const changeHandler = (event) =>{
        const date = new Date(event.target.value);
        props.onGetDateFilter(date.getFullYear());
    }
	return (
		<div className="expenses-filter">
			<div className="expenses-filter__control">
				<label>Filter by year</label>
				<select value={props.selected} onChange={changeHandler}>
					<option value="2023">2023</option>
					<option value="2022">2022</option>
					<option value="2021">2021</option>
					<option value="2020">2020</option>
				</select>
			</div>
		</div>
	);
};

export default ExpensesFilter;