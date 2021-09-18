import React, { useState, useEffect } from "react";
import { useRouteMatch, useHistory } from "react-router-dom";
import { getTodo, deleteTodo } from "./api";

export const DeleteTodo = () => {
  const match = useRouteMatch();
  const history = useHistory();
  const [todo, setTodo] = useState();


  useEffect(() => {
    const fetchTodo = async () => {
      const todo = await getTodo(match.params.id)
      setTodo(todo)
    }
    fetchTodo()

  }, [match]);

  const onSubmit = async (event) => {
    event.preventDefault();
    await deleteTodo(match.params.id)
    history.push("/")
  }
  const onBack = async () => { history.push("/") }
  return todo ? (
    <div className="container">
      <div className="mt-3">
        <h3>Do u want to delete ? </h3>
        <p><strong>task:</strong> {todo.text}</p>
        <form onSubmit={onSubmit}>
          <div className="form-group">
          </div>
          <div className="form-group">
            <button type="button" className="btn btn-secondary" onClick={onBack}  data-dismiss="modal">Close</button>
            <button type="submit" className="btn btn-danger ml-3 float-right">Confirm Delete</button>
          </div>
        </form>
      </div>
    </div>
  ) : (
    <div>Loading...</div>
  );
};
