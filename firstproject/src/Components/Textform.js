import React, { useState } from 'react'

export default function Textform(props) {
    const handleUpClick = () => {
        // console.log("uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to UpperCase", "success");
    }
    const handleLowClick = () => {
        // console.log("uppercase was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to LowerCase", "success");
    }
    const handleClearClick = () => {
        // console.log("uppercase was clicked" + text);
        let newText = " ";
        setText(newText)
        props.showAlert("Text cleared", "success");
    }

    const handleCopy = () => {
        console.log("copied");
        var text = document.getElementById("exampleformControlTextarea1");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to clipboard", "success");
    }

    // const handlePaste = () => {
    //     console.log("pasted");
    //     var text = document.getElementById("exampleformControlTextarea1");
    //     text.paste();

    //     navigator.clipboard.readText();
    //     props.showAlert("Copied to clipboard", "success");
    // }

    //rejects
    const handleExtraSpace = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra Space Removed", "success");

    }
    const handleOnChange = (event) => {
        console.log("on change");
        setText(event.target.value)
    }

    const [text, setText] = useState(""); //react hook state
    //text="new text";//wrong way change state 
    // setText("new text"); //correct way to change the state
    return ( <
        >
        <
        div className = 'container'
        style = {
            { color: props.mode === 'light' ? 'white' : 'black' }
        } >
        <
        div className = "mb-3" >
        <
        label htmlFor = "exampleformControlTextarea1"
        className = "form-label" > < h1 > { props.heading } < /h1> < /label > <
        textarea className = "form-control"
        value = { text }
        onChange = { handleOnChange }
        style = {
            { backgroundColor: props.mode === 'light' ? '#4b6a85' : '#b1b5b9', color: props.mode === 'light' ? 'white' : 'black' }
        }
        id = "exampleformControlTextarea1"
        rows = "8" > < /textarea> < /
        div >

        <
        button className = " btn-outline-primary mx-1"
        onClick = { handleUpClick } > Convert to uppercase < /button> <
        button className = " btn-outline-primary mx-1"
        onClick = { handleLowClick } > Convert to Lowercase < /button> <
        button className = " btn-outline-primary mx-1"
        onClick = { handleClearClick } > Cleartext < /button>  <
        button className = " btn-outline-primary mx-1"
        onClick = { handleCopy } > Copy Text < /button>  <
        button className = " btn-outline-primary mx-1"
        onClick = { handleExtraSpace } > Remove Extra Spaces < /button>  


        <
        /div> <
        div className = "container my-3"
        style = {
            { color: props.mode === 'light' ? 'white' : 'black' }
        } >
        <
        h2 > Your text summary < /h2> <
        p > { text.split("").length }
        words and { text.length }
        characters < /p>  <
        p > { 0.008 * text.split("").length }
        Minutes read < /p>  <
        h3 > preview < /h3> <
        p > { text.length > 0 ? text : "Enter something in the textbox above to preview it" } < /p> < /
        div > <
        />

    )
}