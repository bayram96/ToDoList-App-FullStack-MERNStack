import React, { Component } from "react";

class Todo extends Component {
  state = {};
  render() {
    return (
      <div className="bg-light">
        <div
          className="d-flex justify-content-between form-check-inline border-bottom"
          style={
            {
              // display: "flex",
              // justifyContent: "space-between",
            }
          }
        >
          <i
            className="far fa-times-circle fa-lg float-left m-3 text-danger"
            style={{ cursor: "pointer" }}
            onClick={this.props.onDelete}
          ></i>
          <h3
            className="flex-fill text-dark text-center p-1 bg-light"
            style={{
              textDecoration: this.props.todo.complete
                ? "line-through"
                : "none",
            }}
            onClick={this.props.onClick}
          >
            {this.props.todo.title}
          </h3>
          <input
            type="checkbox"
            className="m-2"
            onChange={this.props.onCheck}
            checked={this.props.completed}
          />
        </div>
      </div>
    );
  }
}

export default Todo;
