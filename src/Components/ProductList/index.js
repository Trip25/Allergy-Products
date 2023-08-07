import { Badge, Card, Container, Row, Col } from 'react-bootstrap';

const ProductCard = ({ image, name, desc, price, diet }) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Img variant="top" src={image} style={{width: '200px', height: '200px'}} />
        <Card.Title>{name}</Card.Title>
        <Card.Text>{desc}</Card.Text>
        <Card.Text>{price}</Card.Text>
        {diet.map((title, index) => <Badge key={index}>{title}</Badge>)}
      </Card.Body>
    </Card>
  );
};

export default function ProductList({products}) {
  return (
    <Container fluid>
      <Row>
        {products.map(({ image, name, description, price, diet }, index) => (
          <Col style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}} key={index} md={3}>
            <ProductCard image={image} name={name} desc={description} price={price} diet={diet} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}
