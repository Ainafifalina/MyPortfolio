import './index.scss'
import AnimatedLetters from "../AnimatedLetters";
import {useEffect, useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGitAlt, faHtml5, faNodeJs, faReact, faSass, faWordpress} from "@fortawesome/free-brands-svg-icons";
import Loader from "react-loaders";
import TelechargerPDF from "./cv";

const About = () => {
    const [letterClass, setLetteClass] = useState('text-animate')
    const setTime = () => {
        return setTimeout(() => {
            setLetteClass('text-animate-hover')
        }, 4000)
    }
    useEffect(() => {
        setTime()
    }, [])
    return (
        <>
            <div className='container about-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
                            idx={15}
                        />
                    </h1>
                    <p>
                        I'm very ambitious front-end looking for a role in
                        established IT company with the opportunity to work
                    </p>
                    <p>I'm quietly confident, naturally curious,
                        and perpetually working on improving my chops problem at a time</p>
                    <TelechargerPDF/>
                </div>
                <div className='stage-cube-cont'>
                    <div className="cubespinner">
                        <div className="face1">
                            <FontAwesomeIcon icon={faGitAlt} color='#4d4d4d'/>
                        </div>
                        <div className="face2">
                            <FontAwesomeIcon icon={faHtml5} color='#F06529'/>
                        </div>
                        <div className="face3">
                            <FontAwesomeIcon icon={faReact} color='#28A4D9'/>
                        </div>
                        <div className="face4">
                            <FontAwesomeIcon icon={faNodeJs} color='#EFD81D'/>
                        </div>
                        <div className="face5">
                            <FontAwesomeIcon icon={faSass} color='#DD0031'/>
                        </div>
                        <div className="face6">
                            <FontAwesomeIcon icon={faWordpress} color='#28A4D5'/>
                        </div>
                    </div>
                </div>
            </div>
            <Loader type='pacman'/>

        </>

    )
}

export default About