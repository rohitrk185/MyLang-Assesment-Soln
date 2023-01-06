import React from 'react'

function Card({ upNum, setUpNum, index }) {

	const onclick = () => {
		setUpNum(index);
	}

	return (
		<td className={upNum === index ? 'card card-up' : 'card card-down'} onClick={() => onclick()}>
			{(upNum === index) ? 'Up' : 'Down'}
			{/* <p></p>
			<p></p> */}
		</td>
	)
}

export default Card;