import React from "react"
export default function Body() {
    return (
        <div className="body">
            <div id = "header">
                <h1>Fun facts about React</h1>
            </div>
            <div id = "points">
                <ul>
                    <span><li id = "one">Was first released in 2013</li></span>
                    <span><li>Was originally created by Jordan Walke</li></span>
                    <span><li>Has well over 100k stars on GitHub</li></span>
                    <span><li>Is maintained by Facebook</li></span>
                    <span><li>Powers thousands of emterprise apps,including mobile apps</li></span>
                </ul>
            </div>
        </div>
    )
}