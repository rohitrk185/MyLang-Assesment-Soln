import React from 'react'
import Card from './Card';

function Cards({ amount }) {
	const [upNum, setUpNum] = React.useState(-1);
	
	const arr = [...Array(amount).keys()];
	
	// const onclick = (index) => {
	// 	setUpNum(index);
	// };

	return (
		<table className="card-container">
			<tbody>
				<tr>
					{ arr.map((_item, index) => (
						<Card upNum={upNum} setUpNum={setUpNum} index={index} key={index}/>
					)) }
					{/* <td className='card card-down'>down</td>
					<td className='card card-down'>down</td>
					<td className='card card-down'>down</td>
					<td className='card card-down'>down</td> */}
				</tr>
			</tbody>
		</table>
			/* <div className="card-container">
			// { {arr.map((_item, index) => 
				// <div onClick={() => onclick(index)} className={(upNum === index)? 'card card-up' : 'card card-down' } key={index}> 
					// <Card upNum={upNum} setUpNum={setUpNum} index={index} />
				</div>
			)} } */
		// </div>
	)
}

export default Cards;