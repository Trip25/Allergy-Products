import { Badge, Card, Container, Row, Col } from 'react-bootstrap'
import { useEffect } from 'react'
import { useProductContext } from '../../context/productContext'


const ProductCard = ({ image, name, desc, price, diet, allergies }) => {

  const result = allergies.some(item => diet.includes(item));

  return (
    result && <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Img
          variant="top"
          src={image}
          style={{ width: '200px', height: '200px' }}
        />
        <Card.Title>{name}</Card.Title>
        <Card.Text>{desc}</Card.Text>
        <Card.Text>£{price}</Card.Text>
        {diet.map((title, index) => (
          <Badge key={index}>{title}</Badge>
        ))}
      </Card.Body>
    </Card>
  )
}

export default function ProductList({ products }) {

  const {allergiesArray, addAllergies, removeAllergies} = useProductContext()

  return (
    <Container fluid>
      <Row>
        {products.map(({ image, name, description, price, diet }, index) => (
            <ProductCard
              key={index}
              image={image}
              name={name}
              desc={description}
              price={price}
              diet={diet}
              allergies={allergiesArray}
            />
        ))}
      </Row>
    </Container>
  )
}
