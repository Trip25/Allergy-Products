import { Badge, Card } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Products from '../../products.json';

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

export default function ProductList() {
  return (
    <Container fluid>
      <Row>
        {Products.map(({ image, name, description, price, diet }, index) => (
          <Col style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}} key={index} md={3}>
            <ProductCard image={image} name={name} desc={description} price={price} diet={diet} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}
