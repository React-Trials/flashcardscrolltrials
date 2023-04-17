
import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import "./Flashcard.css"
/* import DeleteIcon from '@mui/icons-material/Delete';
import axios from 'axios'
import { Menu, MenuItem } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Link } from 'react-router-dom';
import { useAppState } from '../../overmind'; */


function Flashcard({flashcard}) {

    // get user details from overmind state
    const [height, setHeight] = useState('auto')
    const [flip, setFlip] = useState(false);

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);

        if (!event) {
            var event = window.event;
        }
    
        event.cancelBubble = true;
    
        if (event.stopPropagation) {
            event.stopPropagation();
        }
    };

    const handleClose = (event) => {
        setAnchorEl(null);
    
        if (!event) {
            var event = window.event;
        }

        event.cancelBubble = true;

        if (event.stopPropagation) {
            event.stopPropagation();
        }
    };
    
    const frontEl = useRef()
    const backEl = useRef()

    const setMaxHeight = () => {
        const frontHeight = frontEl.current.getBoundingClientRect().height
        setHeight(Math.max(frontHeight, 300))
    }

    useLayoutEffect(() => {
        setMaxHeight();
    }, [flashcard])


    return (
        <div className={`card ${flip ? 'flip' : ''}`} style={{ height: height }} onClick={() => setFlip(!flip)}>
            <div className="front" ref={frontEl} >
                    <h5 className="cardText" style={{whiteSpace: "pre-line"}}>
                        {flashcard.question}
                    </h5>
            </div>
            <div className="back" ref={backEl} style={{ height: height, whiteSpace: "pre-line" }}>
                { flashcard.answer }
            </div>
        </div>
    )
}

export default Flashcard
