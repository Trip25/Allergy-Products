import { useState } from 'react';
import Products from '../../products.json';
import { Badge, Card } from 'react-bootstrap';

const ProductCard = ({name, desc, price, diet})=> {
  return (
      <Card style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>{desc}</Card.Text>
            <Card.Text>{price}</Card.Text>
            {diet.map((title, index) => <Badge key={index}>{title}</Badge>)}
          </Card.Body>
        </Card>
  )
}

export default function ProductList() {

        return (
            <ul>
                {Products.map(({name, description, price, diet}, index) => {
                    return (
                        <li key={index}>
                            <ProductCard name={name} desc={description} price={price} diet={diet} />
                        </li>
                    )
                })}
            </ul>

        );
      }
    
    