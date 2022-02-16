import './App.css';
import Message from './Components/Message';
import Navebar from './Components/Navebar';
import Textform from './Components/Textform';
import Example from './Components/Example';
import Example1 from './Components/Example1';
import About from './Components/About';
import React, { useState } from 'react';
import Alert from './Components/Alert';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";



function App() {
    const [mode, setMode] = useState('dark') //whether dark mode is enabled or not
    const [alert, setAlert] = useState(null);
    const showAlert = (message, type) => {
        setAlert({
            msg: message,
            type: type
        })
        setTimeout(() => {
            setAlert(null);
        }, 1500);
    }

    const toggelMode = () => {
        if (mode === 'dark') {
            setMode('light');
            document.body.style.backgroundColor = '#233d54';
            showAlert("dark mode is enabled", "success");
            document.title = "TextUtils-Dark Mode";
            // setInterval(() => {
            //     document.title = "TextUtils is amzing mode";
            // }, 1500);
            // setInterval(() => {
            //     document.title = "Install TextUtils Now";
            // }, 1500);
        } else {
            setMode('dark');
            document.body.style.backgroundColor = 'white';
            showAlert("light mode is enabled", "success");
            document.title = "TextUtils-Light Mode";

        }
    }

    const toggleMode1 = () => {
        if (mode === 'dark') {
            setMode('light')
            document.body.style.backgroundColor = '#f9d5e5';
        } else {
            setMode('dark')
            document.body.style.backgroundColor = '#c83349';
        }

    }
    return ( <
        >

        <
        Router >
        <

        Navebar title = "Textutils"
        mode = { mode }
        toggelMode = { toggelMode }
        toggleMode1 = { toggleMode1 }
        / >  <
        Alert alert = { alert }
        / >  <
        div className = "container my-3" >
        <
        Switch >
        <
        Route exact path = "/about" >
        <
        About / >
        <
        /Route> <
        Route exact path = "/" >
        <
        Textform showAlert = { showAlert }
        heading = "enter the text analyze below"
        mode = { mode }
        />  < /
        Route > < /
        Switch > < /
        div >
        <
        /Router> < / >
    );
}

export default App;