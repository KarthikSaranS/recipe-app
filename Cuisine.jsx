import React, { useEffect,useState } from "react";
import styled from "styled-components";
import {useParams, Link } from "react-router-dom";
import {motion} from "framer-motion";

function Cuisine() {

  const [cuisine, setCuisine] = useState([]);
  let params = useParams();

  const getCuisine = async (name) => {
    const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=1b5c18c8bbac412498528faec8ef291e&cuisine=${name}`);
    const recipes = await data.json();

    setCuisine(recipes.results);
  }

  useEffect(() => {
    getCuisine(params.type);
  },[params.type]);
  return (
    <div>
    <h3>{params.type} Picks</h3>
    <Grid 
      animate={{ opacity: 1}}
      initial={{opacity: 0}}
      exit={{opacity: 0}}
      transition={{duration: 0.5}}
        >
      
      {cuisine.map((item) => {
        return (
          <Card key={item.id}>
            <Link to={'/recipe/'+item.id}>
            <img src={item.image} alt="" />
            <h4>{item.title}</h4>
            </Link>
          </Card>
        )
      })}
    </Grid>
    </div>
  )
}

styled.div`
  h3{
    margin: 2rem 0;
  }
`

const Grid = styled(motion.div)`
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
export default Cuisine