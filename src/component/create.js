import React from 'react';
import './Create.css';


function Create(){
    return <>
    
    <style>
        @import url('https://fonts.googleapis.com/css2?family=UnifrakturMaguntia&display=swap');
    </style>
    <div id="title" ><strong>Create Event</strong></div>
    <div class="subApp">
        
        <div class="item"><strong>Day</strong>
        </div>
        <div id="separator"></div>

        <div class="item"><strong>Time</strong></div>
        
        <div id="separator"></div>

        <div class="item"><strong>Group Size</strong></div>
        <div id="separator"></div>

        <div class="item"><strong>Location</strong></div>

    </div>
    <button>Submit</button>
    </>
}

export default Create;