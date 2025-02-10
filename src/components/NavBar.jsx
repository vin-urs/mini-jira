import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav class="navbar">
      <div>
        {" "}
        <b>Mini Jira</b>
      </div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/addtask">Add Task</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <a href="#">Log out</a>
        </li>
      </ul>
    </nav>
  );
};
export default NavBar;
