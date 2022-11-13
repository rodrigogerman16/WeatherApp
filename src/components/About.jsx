import React from "react";
import style from "../modules/About.module.css"
import img from "../img/aboutimg.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLinkedin, faInstagram, faGithub } from "@fortawesome/free-brands-svg-icons"

function About(){
    return(
        <div>
            <div className={style.AboutContainer}>
                <div className={style.ImgContainer}>
                    <img src={img} alt="Profil img"/>
                </div>
                <div className={style.DescriptionContainer}>
                    <h4>Welcome to my Weather App!</h4>
                    <h6>Hi! My name is Rodrigo</h6>
                    
                    <span>For this app i use React, Routing and of course i get all the data from the openweathermap.org API.</span>
                    <p>You can search any city and if you click in the name of that city it will show you more info.</p>                         
                    <p>I hope you like it!</p>
                    <p>You can see my Portfolio with my other projects <a href="https://portfolio-pi-taupe-46.vercel.app/">here</a></p>
                    <p>Also here are my social links</p>
                    <div className={style.ContactContainer}>
                        <a href="https://www.instagram.com/rodrigogerman2/?hl=es"><FontAwesomeIcon icon={faInstagram}/></a>
                        <a href="https://www.linkedin.com/in/rodrigo-german-8408a5127/"><FontAwesomeIcon icon={faLinkedin}/></a>
                        <a href="https://github.com/rodrigogerman16"><FontAwesomeIcon icon={faGithub}/></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;