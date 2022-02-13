import './Nav.scss';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink
} from "react-router-dom";

const Nav = () => {
    return (
        <div className="topnav">
            <NavLink to="/" exact>Home</NavLink>
            <NavLink to="/timer">Timer App</NavLink>
            <NavLink to="/todo">Todo List</NavLink>
            <NavLink to="/blog">Blog App</NavLink>
            <NavLink to="/youtube">Youtube Search</NavLink>
        </div>
    )
}

export default Nav;