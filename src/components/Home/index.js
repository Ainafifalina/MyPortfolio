import {Link} from "react-router-dom";
import './index.scss'
import {useEffect, useState} from "react";
import AnimatedLetters from "../AnimatedLetters";
import me from "../../assets/img/bosco.jpg";
import Loader from "react-loaders";

const Home = () => {
    const [letterClass, setLetteClass] = useState('text-animate')
    const nameArray = [' ', 'A', 'i', 'n', 'a']
    const jobArray = ['w', 'e', 'b', ' ', 'd', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r']

    const setTime = () => {
        return setTimeout(() => {
            setLetteClass('text-animate-hover')
        }, 4000)
    }

    useEffect(() => {
        setTime()
    }, [])

    return <>
        <div className='container home-page'>
            <div className="text-zone">
                <h1>
                    <span className={letterClass}>H</span>
                    <span className={`${letterClass} _12`}>i,</span>
                    <br/>
                    <span className={`${letterClass} _13`}>I</span>
                    <span className={`${letterClass} _14`}>'m</span>
                    <AnimatedLetters letterClass={letterClass}
                                     strArray={nameArray} idx={15}/>
                    <br/>
                    <AnimatedLetters letterClass={letterClass}
                                     strArray={jobArray} idx={23}/>

                </h1>
                <div className="content">
                    <div className="me">
                        <div className="scroller">
                            <div className="inner">
                                <span>Slicer.</span>
                                <span> JS developer.</span>
                                <span>Frontend developer.</span>
                            </div>
                        </div>
                    </div>
                </div>
                <h2>Frontend developer / Slicer / Javascript </h2>
                <Link to='/contact' className='flat-button'> CONTACT ME</Link>

            </div>
            <div className="banner">

                <div className='img'>
                    <img src={me} alt=""/>
                </div>
            </div>
        </div>

        <Loader type='pacman'/>
    </>
}
export default Home