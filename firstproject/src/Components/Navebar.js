import React from 'react'
import { Link } from 'react-router-dom'


export default function Navebar(props) {
    return ( < nav className = { `navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}` } >
        <
        Link className = "navbar-brand"
        to = "/TextUtils" > { props.title } < /Link> <
        button className = "navbar-toggler"
        type = "button"
        data_toggle = "collapse"
        data_target = "#navbarSupportedContent"
        aria_controls = "navbarSupportedContent"
        aria_expanded = "false"
        aria_label = "Toggle navigation" >
        <
        span className = "navbar-toggler-icon" > < /span> < /
        button >

        <
        div className = "collapse navbar-collapse"
        id = "navbarSupportedContent" >
        <
        ul className = "navbar-nav mr-auto" >
        <
        li className = "nav-item active" >
        <
        Link className = "nav-link"
        to = "/" > Home < span className = "sr-only" > (current) < /span>  < /
        Link > < /
        li > <
        li className = "nav-item" >
        <
        Link Link className = "nav-link"
        to = "/about" > Abouttextutils < /Link>< /
        li > <
        /ul>   <
        div className = { `custom-control custom-switch text-${props.mode==='dark'?'light':'dark'}` } > <
        input type = "checkbox"
        onClick = { props.toggelMode }
        className = "custom-control-input"
        id = "customSwitch1" / >
        <
        label className = "custom-control-label"
        htmlFor = "customSwitch1" > Enable Dark Mode < /label> < /div > { /* **************************************************************************************************** */ } <
        div className = { `custom-control custom-switch text-${props.mode==='dark'?'light':'dark'}` } > <
        input type = "checkbox"
        onClick = { props.toggelMode1 }
        className = "custom-control-input"
        id = "customSwitch1" / >
        <
        label className = "custom-control-label"
        htmlFor = "customSwitch1" > Enable Dark Mode < /label> < /div >

        <
        /
        div > < /
        nav >
    )
}