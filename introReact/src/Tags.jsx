import  Button  from "react-bootstrap/Button"

const Tags = ({colorButton, textButton}) => {
    return (
    <>
        <Button variant={colorButton} style = {{width: "100%",}}>{textButton}</Button>
    </>
    )
};

export default Tags;
