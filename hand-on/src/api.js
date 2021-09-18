export const getTodos = () => fetch("/api/todo").then(res => res.json())

export const createTodo = (todo) => fetch("/api/todo/create", {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json; charset=utf-8"
  },
  body: JSON.stringify(todo)
})  

export const updateTodo = (todo, id) => fetch(`/api/todo/${id}`, {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json; charset=utf-8"
  },
  body: JSON.stringify(todo)
})  

export const deleteTodo = (id) => fetch(`/api/todo/${id}`, {
  method: "DELETE",
})

export const getTodo = (id) => fetch(`/api/todo/${id}`).then(res => res.json())