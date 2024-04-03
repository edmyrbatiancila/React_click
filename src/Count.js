import { useState } from "react";
import logo from "./logo.svg";
import Button from "react-bootstrap/Button";

function RepeatedImage({ position }) {
    const style = {
        position: "absolute",
        top: `${position.top}px`,
        left: `${position.left}px`,
    };

    return (
        <div style={style}>
            <img src={logo} className="App-logo" alt="logo" />
        </div>
    );
}

function Count() {
    const [counter, setCounter] = useState(0);
    const [positions, setPositions] = useState([]);

    const generateRandomPosition = () => {
        const maxWidth = window.innerWidth - 100; // Adjusted for image width
        const maxHeight = window.innerHeight - 100; // Adjusted for image height
        const randomLeft = Math.floor(Math.random() * maxWidth);
        const randomTop = Math.floor(Math.random() * maxHeight);
        return { left: randomLeft, top: randomTop };
    };

    const handleClick = () => {
    setCounter(counter + 1);
    const newPosition = generateRandomPosition();
    setPositions([...positions, newPosition]);
    };

    return (
        <div className="container">
            <Button className="click" onClick={handleClick} variant="dark">
            Click Me
            </Button>
            <h1>Total no of clicks: {counter}</h1>
            {positions.map((position, index) => (
            <RepeatedImage key={index} position={position}></RepeatedImage>
            ))}
        </div>
    );
}

export default Count;
