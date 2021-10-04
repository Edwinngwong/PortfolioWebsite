import "./about.scss"
import {LocationOn} from "@material-ui/icons";

export default function About() {

    
    return (
        <div className="about" id="about">
            <h2>About</h2>
            <div className="bottom">
                <p>
                    Born and raised in Venezuela, I came to the U.S when I was 17 years old and pursued my A.A 
                    degree in International Business at Santa Fe College and B.S in Food and Resource Economics at University of Florida. 
                    Due to unforseen situations in my home country, I had to switch my career direction.
                    As a result, I discover a big passion in programming. Currently, I am pursuing my M.S degree in Information Technology 
                    at University of Florida with an expected graduation in December 2021.<br></br> 
                    I have experience in Java, C#, HTML, CSS, ReactJS, SQL, and MongoDB.
                </p>
                <span>
                    Currently in:<br></br>
                    <a href = "https://www.google.com/maps/d/u/0/embed?mid=1xPlbTJRbQi0ycM6bnNWZaVWjZtQ&hl=en&ie=UTF8&msa=0&ll=29.678121269253634%2C-82.385918&spn=0.065101%2C0.122184&output=embed&z=13" 
                    id = "location" target = "_blank"><LocationOn></LocationOn> Gainesville, FL.</a>
                </span>
            </div>
        </div>
    )
}
