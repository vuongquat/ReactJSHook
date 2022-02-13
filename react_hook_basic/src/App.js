import logo from './logo.svg';
import './App.css';
import Nav from './views/Nav';
import { useState, useEffect } from 'react';
import Todo from './views/Todo';
import Covid from './views/Covid';
import { CountDown, NewCountDown } from './views/CountDown';
import Blog from './views/Blog';
import BlogDetail from './views/BlogDetail';
import AddNewBlog from './views/AddNewBlog';
import NotFound from './views/NotFound';
import YoutubeSeacrh from './views/YoutubeSearch';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [name, setName] = useState('quat');
  const [todo, setTodo] = useState('');
  const [todos, setTodos] = useState([
    { id: '1', name: 'Doing homework', author: 'tony' },
    { id: '2', name: 'Learing program', author: 'tony' },
    { id: '3', name: 'Playing videogames', author: 'thor' },
    { id: '4', name: 'Watching movies', author: 'tony' },
  ]);

  const handleEventClick = () => {
    if (!todo) {
      alert('emty input');
      return;
    }
    let newTodo = { id: Math.floor(Math.random() * 1000), name: todo, author: 'tony' }
    setTodos([...todos, newTodo]);
    setTodo('');
  }
  const handleOnChange = (e) => {
    setTodo(e.target.value);
  }

  const handleDeleteTodo = (id) => {
    console.log('check id delete: ', id);
    let newTodo = todos;
    newTodo = todos.filter(item => item.id !== id);
    setTodos(newTodo);
  }

  const onTimesup = () => {
    alert('time up');
  }
  return (
    <Router>
      <div className="App">
        <Nav />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />

          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <h1>Ho ten : {name}</h1>
          <Switch>
            <Route path="/timer">
              <CountDown onTimesup={onTimesup} />
              <span>------------------------</span>
              <NewCountDown onTimesup={onTimesup} />
            </Route>
            <Route path="/todo">
              <input type="text" value={todo} onChange={(e) => handleOnChange(e)} />
              <button onClick={() => handleEventClick()}>Click me</button>
              <Todo todos={todos} title={'To do'} deleteTodo={handleDeleteTodo} />
              <Todo todos={todos.filter(item => item.author === 'tony')} title={'tony todos'} deleteTodo={handleDeleteTodo} />
            </Route>
            <Route path="/blog/add-new-blog" >
              <AddNewBlog />
            </Route>
            <Route path="/blog/:id" >
              <BlogDetail />
            </Route>

            <Route path="/blog" exact>
              <Blog />
            </Route>
            <Route path="/youtube" exact>
              <YoutubeSeacrh />
            </Route>
            <Route path="/" exact>
              <Covid />
            </Route>
            <Route path="*" exact>
              <NotFound />
            </Route>

          </Switch>

        </header>

      </div>
    </Router>

  );
}

export default App;
