import React from 'react'
import {useState, useEffect} from 'react';
import styled from 'styled-components';
import {useParams} from "react-router-dom";

function Recipe() {
    let params = useParams();
    const [recipeDetails,setrecipeDetails] = useState({});
    const [active,setActive] = useState("Instructions");
    const fetchDetails = async () => {
        const data = await fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=1b5c18c8bbac412498528faec8ef291e`);
        const detailData = await data.json();
        setrecipeDetails(detailData);
        
    };
    useEffect(() => {
        fetchDetails();
    }, [params.name] );
 
    return (
    <DetailWrapper>
        <div>
        <h2>{recipeDetails.title}</h2>
        <img src={recipeDetails.image} alt="" />
        </div>
        <Info>
            <Button className={active === 'instructions' ? 'active' : ''} onClick={() => setActive('instructions')}>Instructions</Button>
            <Button className={active === 'ingredients' ? 'active' : ''} onClick={() => setActive('ingredients')}>Ingredients</Button>
            {active === 'instructions' && (
                <Sum>
                <h3 dangerouslySetInnerHTML={{ __html: recipeDetails.summary }}></h3>
                <h3 dangerouslySetInnerHTML={{ __html: recipeDetails.instructions }}></h3>
            </Sum>
            )}
            
            {active === 'ingredients' && (
                 <ul>
                 {recipeDetails.extendedIngredients.map((item) => (
                     <li key={item.id}>{item.original}</li>
                 ))}
             </ul>
            )}
           
        </Info>
    </DetailWrapper>
  );
}

const Sum = styled.div`
    h3{
        margin-top: 2rem;
        font-weight: 400;
    }
`

const DetailWrapper = styled.div`
    margin-top: 5rem;
    margin-bottom: 5rem;
    display: flex;
    .active{
        background: #313131;
        color: white;
    }
    img{
        border-radius: 2rem;
    }
    h2{
        margin-bottom: 2rem;
        margin-top: 1rem;
    }
    li{
        font-size: 1.2rem;
        line-height: 2.5rem;
    }
    ul{
        margin-top: 2rem;
    }

    }
`
const Button = styled.button`
    padding: 1rem 2rem;
    color: #313131;
    background:white;
    margin-right: 2rem;
    font-weight: 600;
`

const Info = styled.div`
    margin-left: 7rem;
`

export default Recipe