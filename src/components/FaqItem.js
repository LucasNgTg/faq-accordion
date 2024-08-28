import React, { useState } from 'react';

import plusIcon from "../assets/images/icon-plus.svg";
import minusIcon from "../assets/images/icon-minus.svg";

function FaqItem({ question, answer }) {

    const [isShowing, setShowing] = useState(false);
    const [isTransparent, setTransparent] = useState(false);
    const [isRolled, setRolled] = useState(false);

    const toggleShowing = () => {
        setTransparent(!isTransparent);
        setRolled(!isRolled);
        setShowing(!isShowing);
    }

    return (
        <tr>
            <td>
                <button className="question" onClick={toggleShowing}>
                    <h2>{question}</h2>
                    <img src={plusIcon} alt="Expand" className="plus" data-rolled={isRolled} data-transparent={isTransparent} />
                    <img src={minusIcon} alt="Retract" className="minus" data-rolled={isRolled} />
                </button>
                <div className="answer" data-showing={isShowing}>
                    <p>{answer}</p>
                </div>
            </td>
        </tr>
    )
}

export default FaqItem;