import React, { Component } from 'react'
import './todo-list-item.css';

class TodoListItem extends Component {
  render() {
    const { label, onDeleted, onToggleImportant, onToggleDone, important, done } = this.props;

    let classNames = 'todo-list-item';

    if (done) {
      classNames += ' done';
    }

    if (important) {
      classNames += ' important';
    }

    return (
      <span className={classNames}>
        <span className="todo-list-label" onClick={onToggleDone}>
          {label}
        </span >
        <div className="btn-group todo-list-btns">
          <button type="button" className="btn btn-outline-danger btn-sm" onClick={onDeleted}>
            <i className="fa fa-trash-o" />
          </button>
          <button type="button" className="btn btn-outline-success btn-sm" onClick={onToggleImportant}>
            <i className="fa fa-exclamation" />
          </button>
        </div>

      </span>
    );
  }
}

export default TodoListItem;
