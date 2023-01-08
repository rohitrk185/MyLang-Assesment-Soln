import { useState } from 'react'


function Review() {
    const [rating, setRating] = useState(-1);
    function onclick(e) {
        setRating(e.target.dataset.value);
    }

    return (<>
        <h1 className="heading">Give a Rating?</h1>
        <div id='rating'>
            <span className={((rating >= 1)? 'star active': 'star')} 
                data-value="1"
                onClick={onclick}>
                *
            </span>
            <span className={((rating >= 2)? 'star active': 'star')} 
                data-value="2"
                onClick={onclick}>
                *
            </span>
            <span className={((rating >= 3)? 'star active': 'star')} 
                data-value="3"
                onClick={onclick}>
                *
            </span>
            <span className={((rating >= 4)? 'star active': 'star')} 
                data-value="4"
                onClick={onclick}>
                *
            </span>
            <span className={((rating >= 5)? 'star active': 'star')} 
                data-value="5"
                onClick={onclick}>
                *
            </span>
        </div>
    </>)
}

export default Review