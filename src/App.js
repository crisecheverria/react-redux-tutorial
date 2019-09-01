import React from 'react';
import { connect } from 'react-redux';
import './App.css';

import 'bulma/css/bulma.min.css';

function App(props) {
  const { expensesItems, handleAddExpense } = props;

  return (
    <div className="container">
      <button onClick={handleAddExpense} className="button is-primary">
        Add Expense
      </button>
      <table className="table">
        <thead>
          <tr>
            <th>id</th>
            <th>Amount</th>
            <th>Description</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {expensesItems.map(item => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.amount}</td>
              <td>{item.description}</td>
              <td>
                <button className="button is-danger">X</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const mapStateToProps = state => state;
const mapDispatchToProps = dispatch => {
  const newExpense = {
    id: 4,
    amount: 12.5,
    description: 'Coca-cola'
  };

  return {
    handleAddExpense: () =>
      dispatch({ type: 'ADD_EXPENSE', payload: newExpense })
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
