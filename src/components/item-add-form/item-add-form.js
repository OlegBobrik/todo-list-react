import React, { Component } from 'react'

import './item-add-form.css';

class ItemAddForm extends Component {

  state = {
    label: ''
  };

  onLabelChange = (e) => {
    this.setState({
      label: e.target.value.toUpperCase()
    });
  };

  onSubmit = (e) => {
    if (this.state.label) {
      this.props.onItemAdded(this.state.label);
      this.setState({
        label: ''
      });
    }

    e.preventDefault();
  };

  render() {
    return (
      <form className="item-add-form d-flex" onSubmit={this.onSubmit}>
        <input type="text" className="item-add-input from-control" onChange={this.onLabelChange} placeholder="What needs to be done"
        value={this.state.label}/>
        <button
          className='item-add-btn btn btn-outline-primary btn-block'>
          Add Item
        </button>
      </form>
    );
  }
}

export default ItemAddForm;
