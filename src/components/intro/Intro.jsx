    import "./intro.scss"
    import { init } from "ityped"
    import { useEffect, useRef } from "react";
    import {Instagram, LinkedIn, GitHub, KeyboardArrowDown, FormatQuoteTwoTone} from "@material-ui/icons";

    export default function Intro() {
        const textRef = useRef()

        useEffect(() => {
            init(textRef.current, { 
                showCursor: true,
                backDelay: 1500,
                backSpeed: 60,
                disableBackTyping: true,
                loop: false,
                strings: ['Full Stack Developer'],
         });
        }, [])

        return (
            <div className="intro" id="intro">
                <img src="images/intro.jpg" className="introBackground" alt="" />
                <div className="top">
                    <div className="imgContainer">
                        <img src="images/Edwin Formal.png" alt="" />
                    </div>
                </div>
                <div className="bottom">
                <h1>Edwin Ng Wong</h1>
                    <div className="wrapper">
                        <h2><span ref={textRef}></span></h2>
                        <div className="itemContainer">
                            <a href="https://www.linkedin.com/in/edwinngwong/" target="_blank"><LinkedIn className="item"></LinkedIn></a>
                            <a href="https://github.com/Edwinngwong" target="_blank"><GitHub className="item"></GitHub></a>
                            <a href="https://www.instagram.com/edwin_ngw/" target="_blank"><Instagram className="item"></Instagram></a>
                        </div>
                        <a href="#about"><KeyboardArrowDown className="arrow"></KeyboardArrowDown></a>
                    </div>
                </div>
            </div>
        )
    }
