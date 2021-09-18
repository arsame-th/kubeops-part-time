import React from 'react';
import { Route, Switch, Link } from 'react-router-dom'
import { TodoList } from './TodoList'
import { CreateTodo } from './CreateTodo'
import { EditTodo } from './EditTodo'
import { DeleteTodo } from './DeleteTodo'

function App() {
  return (
    <div>
      <nav className="navbar bg-light navbar-expand-lg navbar-light">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
            <Link to="/" className="nav-link">Todos</Link>
          </li>
        </ul>
      </nav>
    <Switch>
      <Route exact path="/" component={TodoList}/>
      <Route path="/edit/:id" component={EditTodo}/>
      <Route path="/delete/:id" component={DeleteTodo}/>
      <Route path="/create" component={CreateTodo}/>
    </Switch>
    </div>
  );
}

export default App;
