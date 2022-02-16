import React, { useState } from 'react'

function About() {

    const [myStyle, setMyStyle] = useState({
        color: 'black',
        backgroundColor: 'white'
    })
    const [btntext, setBtnText] = useState("Enable Drark mode")
    const toggleStyle = () => {
        if (myStyle.color == 'black') {
            setMyStyle({
                color: 'white',
                backgroundColor: 'black',
                border: '1px solid white'
            })
            setBtnText("Enable light mode")
        } else {
            setMyStyle({
                color: 'black',
                backgroundColor: 'white'
            })
            setBtnText("Enable Dark mode")
        }
    }

    return ( <
        >
        <
        div className = "container"
        style = { myStyle } >
        <
        h1 > About Us < /h1> <
        div class = "accordion"
        id = "accordionExample" >
        <
        div class = "accordion-item" >
        <
        h2 class = "accordion-header"
        id = "headingOne" >
        <
        button class = "accordion-button"
        style = { myStyle }
        type = "button"
        data _ bs _ toggle = "collapse"
        data _ bs _ target = "#collapseOne"
        aria _ expanded = "true"
        aria _ controls = "collapseOne" >
        Accordion Item #1































</button>































</h2>































<div id= "collapseOne"
        class = "accordion-collapse collapse show"
        aria _ labelledby = "headingOne"
        data _ bs _ parent = "#accordionExample" >
        <
        div class = "accordion-body"
        style = { myStyle } >
        <
        strong > This is the first item 's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It'
        s also worth noting that just about any HTML can go within the < code > .accordion - body < /code>, though the transition does limit overflow. < /
        div > <
        /div> < /
        div > <
        div class = "accordion-item" >
        <
        h2 class = "accordion-header"
        id = "headingTwo" >
        <
        button class = "accordion-button collapsed"
        style = { myStyle }
        type = "button"
        data _ bs _ toggle = "collapse"
        data _ bs _ target = "#collapseTwo"
        aria _ expanded = "false"
        aria _ controls = "collapseTwo" >
        Accordion Item #2































</button>































</h2>































<div id= "collapseTwo"
        class_ = "accordion-collapse collapse"
        aria _ labelledby = "headingTwo"
        data _ bs _ parent = "#accordionExample" >
        <
        div class = "accordion-body"
        style = { myStyle } >
        <
        strong > This is the second item 's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It'
        s also worth noting that just about any HTML can go within the < code > .accordion - body < /code>, though the transition does limit overflow. < /
        div > <
        /div> < /
        div > <
        div class = "accordion-item" >
        <
        h2 class = "accordion-header"
        id = "headingThree" >
        <
        button class = "accordion-button collapsed"
        style = { myStyle }
        type = "button"
        data _ bs _ toggle = "collapse"
        data _ bs _ target = "#collapseThree"
        aria _ expanded = "false"
        aria _ controls = "collapseThree" >
        Accordion Item #3































</button>































</h2>































<div id= "collapseThree"
        class = "accordion-collapse collapse"
        aria _ labelledby = "headingThree"
        data _ bs _ parent = "#accordionExample" >
        <
        div class = "accordion_body"
        style = { myStyle } >
        <
        strong > This is the third item 's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It'
        s also worth noting that just about any HTML can go within the < code > .accordion - body < /code>, though the transition does limit overflow. < /
        div > <
        /div> < /
        div > <
        /div>   <
        div className = "container my-3" >
        <
        button type = "button"
        class = "btn btn-success"
        onClick = { toggleStyle } > Enable Dark mode < /button> < /
        div > < /
        div >

        <
        />


    )
}

export default About