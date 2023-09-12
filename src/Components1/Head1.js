import React from "react";
export default function Head1(){
    return(
        <div className="head1">
            <div id = "img">
                <img src = "./Images/Lion.jpg" alt="Lion" id ="img1"></img>
            </div>
            <div className="detail">
                <h2>Pruthvi Dharmar</h2>
                <h4>Frontend Developer</h4>
                <p>pruthvi.website</p>
            </div>
            <div id = "btns">
                <button id = "btn1"><img src = "./Images/gmail.png" width = "17px" id = "img2"/>Email</button>
                <button id = "btn2"><img src = "./Images/LinkedIn.png" width="17px" id = "img3"/>LinkedIn</button>
            </div>
            
        </div>
    )
}