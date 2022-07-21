import React from 'react';
import { Row, Col } from 'react-bootstrap';
import CardItem from './CardItem';

const dummyProduct = [
    {
        id: 0,
        title: "Doi 1",
        price: 10000,
        description: "Lorem ipsum",
        image: 'https://cdn-icons-png.flaticon.com/512/7985/7985401.png',
    },
    {
        id: 1,
        title: "Doi 2",
        price: 50000,
        description: "Lorem ipsum",
        image: 'https://cdn-icons-png.flaticon.com/256/7985/7985399.png',
    },
    {
        id: 2,
        title: "Doi 3",
        price: 100000,
        description: "Lorem ipsum",
        image: 'https://cdn-icons-png.flaticon.com/512/7985/7985404.png',
    },
];


function CardList() {
    return (
        <Row xs={1} xl={4} sm={2} lg={3} md={3}>
            {dummyProduct.map((product) => (
            <Col key={product.id}>
                <CardItem item={product} />
            </Col>
            ))}
        </Row>
    )
}

export default CardList;