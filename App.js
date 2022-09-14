import Pages from "./pages/Pages"
import Category from "./components/Category";
import Search from "./components/Search";
import {BrowserRouter} from "react-router-dom";
import styled from "styled-components";
import { Link } from "react-router-dom";
import {GiKnifeFork} from 'react-icons/gi';

import React from "react";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav>
        <GiKnifeFork to={'/'}></GiKnifeFork>
        <Logo to={'/'}> delicious</Logo>
      </Nav>
        <Search />
        <Category />
        <Pages />
      </BrowserRouter>
    </div>
  );
}

const Logo = styled(Link)`
    text-decoration: none;
    font-weight: 500;
    font-size: 1.5rem;
    font-family: "Lobster Two", cursive;
`;

const Nav = styled.div`
  padding: 0rem 0rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  svg{
    font-size: 2rem;
  }
`;
export default App;
