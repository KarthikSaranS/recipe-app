import {FaHamburger,FaIceCream} from "react-icons/fa"
import {GiNoodles, GiChopsticks} from "react-icons/gi"
import styled from "styled-components"
import {NavLink} from "react-router-dom";

function Category() {
  return (
    <Link>
        <NLink to={"./cuisine/American"}>
            <FaHamburger />
            <h4>American</h4>
        </NLink>
        <NLink to={"./cuisine/Italian"}>
            <FaIceCream />
            <h4>Italian</h4>
        </NLink>
        <NLink to={"./cuisine/Thai"}>
            <GiNoodles />
            <h4>Thai</h4>
        </NLink>
        <NLink to={"./cuisine/Korean"}>
            <GiChopsticks />
            <h4>Korean</h4>
        </NLink>
    </Link>
  )
}

const Link = styled.div`
    justify-content: center;
    display: flex;
    margin: 2rem 0rem;
`

const NLink = styled(NavLink)`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 2rem;
    text-decoration: none;
    flex-direction: column;
    border-radius: 50%;

    h4{
        margin-top: 0.5rem;
    }

    &.active{
        color: #f27121;
        svg{
            color: #f27121;

        }
    }

`

export default Category