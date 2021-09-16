import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import { getTodos } from "./api"
import { BsFillTrashFill, BsPencilSquare, BsPlusSquare } from "react-icons/bs";
import { SpinnerBig } from "./Spinner"

export const TodoList = () => {
  const [items, setItems] = useState([])

  useEffect(() => {
    const fetchItems = async () => {
      const todos = await getTodos()
      setItems(todos)
    }
     fetchItems()
  }, [])

  return (items === undefined) ? (<SpinnerBig/>) : (
    <div className="container">
      <div className="mt-3">
        <h3>Todo List</h3>
        <table className="table table-striped mt-3">
          <thead>
            <tr>
              <th>Text</th>
              <th><div className="d-flex justify-content-center">
                <span className="mr-3">Action </span> 
                <Link to="/create" style={{color: "green" }} ><BsPlusSquare />Create Todo</Link>
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {
              items.map(todo => (
                <tr key={todo._id}>
                  <td>
                    {todo.text}
                  </td>
                  <td>
                    <div className="d-flex justify-content-center">
                    <Link className="mr-3" to={`/edit/${todo._id}`}><BsPencilSquare/>Edit</Link>
                    <Link style={{ color: "red"}} to={`/delete/${todo._id}`}><BsFillTrashFill/>Delete</Link>
                    </div>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};
