import { useEffect,useState } from "react";
import styled from "styled-components";
import {Splide,SplideSlide} from "@splidejs/react-splide"; //For Carousel
import "@splidejs/react-splide/css";
import { Link } from "react-router-dom";

function Popular() {

    const [popular,setPopular] = useState([]);
    useEffect(() => {
        getPopular();
    },[])

    const getPopular = async () => {

        const check = localStorage.getItem("popular");
        if(check)
        {
            setPopular(JSON.parse(check));
        } else{
            const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=1b5c18c8bbac412498528faec8ef291e&number=9`);
        const data = await api.json();
        localStorage.setItem("popular",JSON.stringify(data.recipes));
        setPopular(data.recipes);
        }
        // const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=1b5c18c8bbac412498528faec8ef291e&number=9`);
        // const data = await api.json();
        //localStorage.setItem("popular",JSON.stringify(data.recipes));
        // setPopular(data.recipes);
        
    };
  return (
    <div>
        <Wrap>
            <h3>Popular Picks</h3>
            <Splide options={{
                perPage:4,
                pagination:false,
                drag:"free",
                gap:"5rem"
            }}>
                {popular.map((x) => {
                    return (
                        <SplideSlide key={x.id}>
                            <Tile>
                                <Link to={'/recipe/'+x.id}>
                                <p>{x.title}</p>
                                <img src={x.image} alt={x.title} />
                                <Gradient />
                                </Link>
                            </Tile>
                        </SplideSlide>
                        );
                    })}
            </Splide>
        </Wrap>  
    </div>
  );
}

const Wrap = styled.div`
    margin: 4rem 0rem;
    
    h3{
        margin:2rem 0;
    }
`;

const Tile = styled.div`
    border-radius: 20px;
    height: 15rem;
    width:15rem;
    overflow: hidden;
    position:relative;
    right-margin: 3rem;
    

    img{
        border-radius: 20px;
        height: 100%;
        width: 100%;
        object-fit:cover;
        position:absolute;
        left: 0;
    }

    p{
        color: white;
        z-index: 10;
        left: 50%;
        bottom: 0%;
        position: absolute;
        width: 90%;
        transform: translate(-50%,0%);
        font-weight: 600;
        font-size: 1.1rem;
        text-align: center;
        justify-content: center;
        display: flex;
        height: 40%;
        align-items: center;
        left-margin: 10px;
        right-margin: 10px;
    }
`;

const Gradient = styled.div`
    z-index: 3;
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0.5));
`
export default Popular