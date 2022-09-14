import styled from "styled-components";
import {useState} from "react";
import {FaSearch} from "react-icons/fa";
import {useNavigate} from "react-router-dom";

function Search() {

    const [search, setSearch] = useState("");
    const nav = useNavigate();

    const submitHandler = (e) => {
        e.preventDefault();
        nav("/search/" + search);
    }

  return (
    <SearchBar onSubmit={submitHandler}>
        <div>
        <FaSearch />
        <input onChange={(e) => {
            setSearch(e.target.value);
        }} type="text" value={search}/>
        </div> 
    </SearchBar>
  )
}

const SearchBar = styled.form`
    justify-content:center;
    align-items: center;
    background: #494949;
    border-radius: 1rem;
    margin: 0rem 20rem;

    div{
        width: 100%;
        position: relative;
    }
    
    input{
        background: none;
        text-decoration: none;
        color: white;
        border: none;
        width: 100%;
        padding: 1rem 3rem;
        outline: none;
    }

    svg{
        position: absolute;
        top: 50%;
        left: 0%;
        transform: translate(100%,-50%);
        color: white;
    }
`
export default Search