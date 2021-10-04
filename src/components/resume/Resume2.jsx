import "./resume2.scss";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@material-ui/icons";
import { useState } from "react";

export default function Resume2() {

    const [currentSlider, setCurrentSlider] = useState(0)
    const data = [
        {
            id: "1",
            title: "Education",
            subtitle: "University of Florida",
            content1: "M.S in Information Technology",
            content2: " | August 2020 - December 2021",
            content3: "GPA: 3.62",
            subtitle1: "University of Florida",
            content12: "B.S in Food and Resource Economics",
            content22: " | January 2017 - December 2018",
            content32: "GPA: 3.72",

        },
        {
            id: "2",
            title: "Work",
            subtitle: "Loxley Services",
            content1: "IT Support Specialist I",
            content2: " | January 2021 - Present",
            content3: "Gainesville, FL",
            subtitle1: "Hollister CO",
            content12: "Assitant Manager",
            content22: " | August 2019 - March 2020",
            content32: "Gainesville FL",
            
        },
        {
            id: "3",
            title: "Skills",
            subtitle: null,
            content1: null,
            content2: null,
            content3: <p><p>Programming Languages: Java, C#, HTML, CSS, JavaScript, ReactJS</p><br></br><p>Databases: SQL</p></p>,
            content12: null,
            content22: null,
            content32: <p><p>Operating Systems: MacOS, Windows</p><br></br><p>Technical Tools: Git, PDQ, NinjaRMM, Confluence, Jira</p></p>,
        },
    ];
    
    const handleClick = (way)=>{
        way === "left" ? setCurrentSlider(currentSlider > 0 ? currentSlider - 1 : 2) :
        setCurrentSlider(currentSlider < data.length - 1 ? currentSlider + 1 : 0)
    }
    
    return (
        <div className="resume2" id="resume2">
            <h2 className="bigHeader">Resume</h2>
            <div className="slider" style={{transform: `translateX(-${currentSlider * 100}vw)`}}>
                {data.map(d=>(

                    <div className="container" id={d.id}>
                    <div className="item">
                        <div className="header">
                            <h1>{d.title}</h1>
                        </div>
                        <div className="content">
                            <div className="wrapper">
                                <div className="subHeader">
                                    <h1>{d.subtitle}</h1>
                                    <p><span>{d.content1}</span>{d.content2}</p>
                                </div>
                                <div className="subContent">
                                    <p>{d.content3}</p>
                                </div>
                            </div>
                            <div className="wrapper">
                                <div className="subHeader">
                                    <h1>{d.subtitle1}</h1>
                                    <p><span>{d.content12}</span>{d.content22}</p>
                                </div>
                                <div className = "subContent">
                                    <p>{d.content32}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>))}
            </div>
            <KeyboardArrowLeft className="arrow left" onClick={()=>handleClick("left")}/>
            <KeyboardArrowRight className="arrow right" onClick={()=>handleClick()}/>
            <a href = "Edwin Ng's Resume.pdf" download> 
                <span id = "button">Download Resume</span>
            </a>
        </div>
    );
}

