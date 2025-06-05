import React, { Component } from 'react'
import './ExpenseItem.css'
import { MdEdit, MdDelete } from 'react-icons/md'

export class ExpeseItem extends Component {
  render() {
    return (
      <li className='item'>
        <div className='info'>
          <span className='expense'>{this.props.expense.charge}</span>
          <span className='amount'>{this.props.expense.amount}</span>
        </div>
        <div>
          <button className='edit-btn'><MdEdit /></button>
          <button className='clear-btn' onClick={() => console.log(`${this.props.expense.id} clicked`) }><MdDelete /></button>
        </div>

      </li>
    )
  }
}

export default ExpeseItem