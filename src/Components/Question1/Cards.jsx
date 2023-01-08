import React from 'react'
import Card from './Card';

function Cards({ amount }) {
	const [upNum, setUpNum] = React.useState(-1);
	
	const arr = [...Array(amount).keys()];

	return (<>
		<h1 className="heading">Pick a Card</h1>
		<table className="card-container">
			<tbody>
				<tr>
					{ arr.map((_item, index) => (
						<Card upNum={upNum} setUpNum={setUpNum} index={index} key={index}/>
					)) }
				</tr>
			</tbody>
		</table>
	</>)
}

export default Cards;