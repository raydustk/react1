import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

const MyCard = ({
    imgUrl,
    nombre,
    descripcion,
    children
}) => {

    return(
    <Card className="cardPerrito">
        <Card.Img variant="top" src={imgUrl} />
        <Card.Body>
          <Card.Title>{nombre}</Card.Title>
          <Card.Text>
            {descripcion}
            {children}
          </Card.Text>
         
        </Card.Body>
      </Card>
    )
}

export default MyCard;