import React from "react";
import "./ExpenseList.css";
import ExpeseItem from "./ExpeseItem";
import { MdDelete } from "react-icons/md";

const ExpenseList = ({ handleDelete, initialExpenses, handleEdit }) => {
  return (
    <>
      <ul className="list">
        {/* { Expense Item } */}
        {initialExpenses.map((expense) => {
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
      <button className="btn">
        목록 지우기
        <MdDelete className="btn-icons" />
      </button>
    </>
  );
};

export default ExpenseList;
