import React from "react";
import "./ExpenseList.css";
import ExpeseItem from "./ExpeseItem";
import { MdDelete } from "react-icons/md";

const ExpenseList = ({ handleDelete, expenses, handleEdit, clearItems }) => {
  return (
    <>
      <ul className="list">
        {/* { Expense Item } */}
        {expenses.map((expense) => {
          return (
            <ExpeseItem
              expense={expense}
              key={expense.id}
              handleDelete={handleDelete}
              handleEdit={handleEdit}
            />
          );
        })}
      </ul>
      {expenses.length > 0 && (
        <button className="btn" onClick={clearItems}>
          목록 지우기
          <MdDelete className="btn-icons" />
        </button>
      )}
    </>
  );
};

export default ExpenseList;
