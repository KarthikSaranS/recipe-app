import React from 'react';
import {useEffect, useState} from 'react';
import {useParams,Link} from "react-router-dom";
import styled from 'styled-components';
 
function Searched() {
  let params = useParams();
  const [searchedRecipes, setsearchedRecipes] = useState([]);
  const getSearched = async (name) => {
    const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=1b5c18c8bbac412498528faec8ef291e&query=${name}`);
    const recipes = await data.json();

    setsearchedRecipes(recipes.results);
  }

  useEffect(() => {
    getSearched(params.searchValue);
  },[params.searchValue]);
  return (
    <Grid>
      {searchedRecipes.map((item) => {
        return(
        <Card key={item.id}>
          <Link to={'/recipe/'+item.id}>
          <img src={item.image} alt=""/>
          <h4>{item.title}</h4>
          </Link>
        </Card>
      )})}
    </Grid>
  )
}

const Grid = styled.div`
  margin-top: 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-gap: 3rem;

`

const Card = styled.div`
  img {
    width: 100%;
    border-radius: 2rem;
  }

  a{
    text-decoration: none;
  }

  h4{
    text-align: center;
    padding: 1rem;
  }
`

export default Searched