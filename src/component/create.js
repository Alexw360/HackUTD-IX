import React from 'react';
import './Create.css';


function Create(){
    return <>
    
    <div id="title" ><strong>Create Event</strong></div>
    <div class="subApp">
        
        <div class="item">Day</div>
        <div id="separator"></div>

        <div class="item">Time</div>
        <div id="separator"></div>

        <div class="item">Group Size</div>
        <div id="separator"></div>

        <div class="item">Locations</div>

    </div>
    <button>Submit</button>
    </>
}

export default Create;