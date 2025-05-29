import React, { Component } from 'react';
import './to-do.css';


class App extends Component {
  constructor(props){
    super(props);

    this.state={
      newItem:"",
      list:[]
    }
  }

  updateInput(key,value){
    //update react state
    this.setState({
      [key]: value
    });
  }



  addItem(){
    // create item with unique id
    const newItem={
      id: 1 + Math.random(),
      value: this.state.newItem.slice()
    };

    // copy of current list of items
    const list = [...this.state.list];

    // add new item to list
    list.push(newItem);

    // update state with new list and reset newItem input
    this.setState({
      list,
      newItem:""
    });
  }

  deleteItem(id) {
    //copy of current list of items
    const list = [...this.state.list];

    // filter out the item being deleted
    const updatedList = list.filter(item => item.id !== id);

    this.setState({list: updatedList});
  }
  render() {
    return (
      <div className="app"> 
        <h1 className="app-title">MY TO-DO LIST</h1>
        <div className="container">
          <p className="input-label">Add an Item:</p>
          <div className="input-group">
            <input
              className="todo-input"
              type="text"
              placeholder="Type item here..."
              value={this.state.newItem}
              onChange={e => this.updateInput("newItem", e.target.value)}
            />
            <button
              className="add-btn"
              onClick={() => this.addItem()}
              disabled={!this.state.newItem.length}
            >
              Add
            </button>
          </div>
          <ul className="todo-list">
            {this.state.list.map(item => (
              <li key={item.id} className="todo-item">
                <span>{item.value}</span>
                <button
                  className="delete-btn"
                  onClick={() => this.deleteItem(item.id)}
                >
                  X
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}
export default App;
