/* eslint-disable import/no-extraneous-dependencies */
import { NavLink, Route, Routes } from 'react-router-dom';

import Calculator from '../../routes/Calculator';
import Quotes from '../../routes/Quotes';
import Home from '../../routes/Home';
import NotMatch from '../../routes/NotMatch';

import '../../styles/App.css';

function App() {
  return (
    <>
      <nav className="">
        <h1>Math Magicians</h1>
        <ul className="link">
          <li className="">
            <NavLink
              className=""
              style={({ isActive }) => ({
                color: isActive ? 'white' : '#4f2f2f',
              })}
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li className="nav-child">
            <NavLink
              className="nav-link"
              style={({ isActive }) => ({
                color: isActive ? 'white' : '#4f2f2f',
              })}
              to="calculator"
            >
              Calculator
            </NavLink>
          </li>
          <li className="nav-child">
            <NavLink
              className="nav-link"
              style={({ isActive }) => ({
                color: isActive ? 'white' : '#4f2f2f',
              })}
              to="quotes"
            >
              Quotes
            </NavLink>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="calculator" element={<Calculator />} />
        <Route path="quotes" element={<Quotes />} />
        <Route path="*" element={<NotMatch />} />
      </Routes>
    </>
  );
}

export default App;
