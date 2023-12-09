import Card from 'react-bootstrap/Card'

const MyCard = ({image, Title , Parrafo}) => {
    return (
    <>
        <Card>
            <Card.Body style = {{width: "18rem"}}>
                <Card.Img variant="top" src={image}/>
                <Card.Title >{Title}</Card.Title>
                <Card.Text>{Parrafo}</Card.Text> 
            </Card.Body>    
        </Card>    
    </>
    ) 
};

export default MyCard;