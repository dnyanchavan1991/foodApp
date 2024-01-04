import React, {useState} from "react";

export default function Textutils(props){
    const handleUpClick = () => {
        const newText = textContent.toUpperCase();
        setText(newText);
    }
    const handleLoClick = () => {
        const newText = textContent.toLowerCase();
        setText(newText);
    }
    const clearText = () => {
        const newText = '';
        setText(newText);
    }
    const handleOnChange = (event) =>{
        setText(event.target.value);
    }
    const [textContent, setText] = useState("Enter the text...") 
    return (
        <>
        <div className="container mt-3">
            <h3 className="mb-3">{props.title}</h3>
            <textarea className="form-control mb-2" value={textContent} onChange={handleOnChange} rows="8"></textarea>
            <button className="btn btn-primary mx-1" onClick={handleUpClick}>Uppercase</button>
            <button className="btn btn-primary mx-1" onClick={handleLoClick}>Lowercase</button>
            <button className="btn btn-primary mx-1" onClick={clearText}>Clear</button>
        </div>
        <div className="container">
            <h3>Your Word Detail</h3>
            <p>Words: {textContent.split(" ").length} Characters: {textContent.length} Lines: {textContent.split(/\r\n|\r|\n/).length}</p>
            <p> </p>
        </div>
        </>
        
    )
}