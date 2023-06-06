import React, { useState } from "react";




export default function Textbox(props) {
    const [text, setText] = useState("");
    const handlUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert(" Text in uppercase is DONE.", "success")
    };
    const handllowClick = () => {
        let newText = text.toLocaleLowerCase();
        setText(newText);
        props.showAlert("Text in lowercase is DONE.", "success")
    };
    const handlUpChenge = (event) => {
        setText(event.target.value);
    };
    const handlclrClick = () => {
        setText("");

    };

    return (
        <>
            <div className="container">
                <div className="container" >
                    <div className="mb-3 my-2">
                        <label htmlFor="exampleFormControlTextarea1" className="form-label">
                            <h2> Enter text for editing</h2>{" "}
                        </label>
                        <textarea
                            className="form-control"
                            value={text}
                            onChange={handlUpChenge}
                            id="exampleFormControlTextarea1"
                            rows="8"
                        ></textarea>
                    </div>
                    <div className="container">
                        
                    <button type="button" onClick={handlUpClick} className="btn btn-success mx-2 my-2">
                        Convert in Uppercaase
                    </button>
                    <button type="button" onClick={handllowClick} className="btn btn-success mx-2 my-2">
                        Convert in Lowercase
                    </button>
                    <button type="button"  onClick={handlclrClick} className="btn btn-success mx-2 my-2">
                        Clear Box
                    </button>
                    </div>
                    <div>
                        <h2 className="my-2"> Your Text Summary</h2>

                        <p className="my-2">  {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} word ,{text.length} characters </p>
                        <p>{text.split("").length * 0.008} Minutes to read </p>
                    </div>
                </div>
            </div>
        </>
    );
}
