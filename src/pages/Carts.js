import React from "react";
import { Container } from "react-bootstrap";
import CartItem from "../components/CartItem";
import { Navigate } from "react-router-dom";


const dummyProduct = [
{
    id: 0,
    title: "Doi 1",
    price: 10000,
    description: "Lorem ipsum",
    image: 'https://cdn-icons-png.flaticon.com/512/7985/7985401.png',
    quantity: 1,
},
{
    id: 1,
    title: "Doi 2",
    price: 50000,
    description: "Lorem ipsum",
    image: 'https://cdn-icons-png.flaticon.com/256/7985/7985399.png',
    quantity: 2,
},
{
    id: 2,
    title: "Doi 3",
    price: 100000,
    description: "Lorem ipsum",
    image: 'https://cdn-icons-png.flaticon.com/512/7985/7985404.png',
    quantity: 5,
},
];

function Carts({isLogedIn}) {

    if (!isLogedIn) {
        return (
            <Navigate to='/auth/login' replace />
        );
    }
    return (
        <Container>
           {dummyProduct.map((product) => (
             <CartItem kay={product.id} item={product} />
           ))}
        </Container>
    );
}

export default Carts;

