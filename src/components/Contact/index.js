import './index.scss'
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import {useEffect, useRef, useState} from "react";
import emailjs from '@emailjs/browser';
import Swal from "sweetalert2";

const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");



    const [letterClass, setLetteClass] = useState('text-animate')
    const setTime = () => {
        return setTimeout(() =>{
            setLetteClass('text-animate-hover')
        }, 4000)
    }
    useEffect(() => {
        setTime()
    },[])
    const form = useRef();


    const sendEmail = (e) => {
        e.preventDefault();

        setName("");
        setEmail("");
        setSubject("");
        setMessage("");

        emailjs.sendForm('service_ndvaomw', 'template_wnm692a', form.current, 'ueLmMJ5DVb_D_DT6j')
            .then((result) => {
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Mail send !',
                    showConfirmButton: false,
                    timer: 1500
                })
                console.log(result.text);
            }, (error) => {
                Swal.fire({
                    position: 'center',
                    icon: 'error',
                    title: 'Mail failed !',
                    showConfirmButton: false,
                    timer: 1500
                })
                console.log(error.text);
            });
    };



    return(
        <>
            <div className='container contact-page'>
                <div className="text-zone">
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={['C','o','n','t','a','c','t',' ','m','e']}
                            idx={15} />
                    </h1>
                    <p>
                        I'm interested in CDI opportunities and freelance,
                        especially ambitious or large project. However,
                        if you have other request or question,
                        don't hesitate to contact me using below from either.
                    </p>
                    <div className='contact-form'>
                        <form ref={form} onSubmit={sendEmail}>
                            <ul>
                                <li className='half'>
                                    <input type="text" name='name' placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} required />
                                </li>
                                <li className='half'>
                                    <input type="text" name='email' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} required />
                                </li>
                                <li>
                                    <input placeholder='Subject' type='text' name='subject' value={subject} onChange={(e) => setSubject(e.target.value)} required  />
                                </li>
                                <li>
                                    <textarea placeholder='Message' name='message' value={message} onChange={(e) => setMessage(e.target.value)} required />
                                </li>
                                <li>
                                    <input type='submit' className='flat-button' value='Send' />
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
            </div>
            <Loader type='pacman' />
        </>
    )
}
export default Contact