import { useState } from 'react';
import Products from '../../products.json';
import Card from 'react-bootstrap/Card';

export default function ProductList() {

        return (
            <ul>
                {Products.map((product, index) => {
                    return (
                        <li key={index}>
                            <ProductCard />
                        </li>
                    )
                })}
            </ul>

        );
      }
      


      function ProductCard() {
        return (
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
        )
    }
    