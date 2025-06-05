import React, { Component } from "react";
import "./ExpenseList.css";
import ExpeseItem from "./ExpeseItem";
import { MdEdit, MdDelete } from "react-icons/md";

export class ExpenseList extends Component {
  render() {
    console.log(this.props.initialExpenses);
    return (
      <>
        <ul className="list">
          {/* { Expense Item } */}
          {this.props.initialExpenses.map((expense) => {
            return (
              <ExpeseItem
                expense={expense}
                key={expense.id}
                handleDelete={this.props.handleDelete}
              />
            );
          })}
        </ul>
        <button className="btn">
          목록 지우기
          <MdDelete className="btn-icons" />
        </button>
      </>
    );
  }
}

export default ExpenseList;
