import React from "react";
import {saveAs} from "file-saver";
import './index.scss'


function TelechargerPDF() {
    const handleClick = () => {
        const url = process.env.PUBLIC_URL + "/moncv/Fifalianiaina.pdf";
        saveAs(url, "Fifalianiaina.pdf");
    };

    return (
        <div>
            <p>If you interested me, download my Cv now :-) </p>
            <button className='flat-button' onClick={handleClick}>Download my Cv</button>
        </div>
    );
}

export default TelechargerPDF;
