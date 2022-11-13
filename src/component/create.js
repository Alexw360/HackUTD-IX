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
            <fieldset class='legacy-form-row'>
            <input id='date_input'
                    name='talk-type'
                    type='radio'
                    value='main-stage' />
            <label for='talk-type-1' class='radio-label'>Today</label>
            
            <input id='talk-type-2'
                    name='talk-type'
                    type='radio'
                    value='workshop'
                    checked />
            <label for='talk-type-2' class='radio-label'>Tomorrow</label>

            <input id='talk-type-3'
                    name='talk-type'
                    type='radio'
                    value='workshop'
                    checked />
            <label for='talk-type-3' class='radio-label'>11/15</label>

            <input id='talk-type-3'
                    name='talk-type'
                    type='radio'
                    value='workshop'
                    checked />
            <label for='talk-type-3' class='radio-label'>11/16</label>

            <input id='talk-type-3'
                    name='talk-type'
                    type='radio'
                    value='workshop'
                    checked />  
            <label for='talk-type-3' class='radio-label'>11/17</label>
            </fieldset>
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