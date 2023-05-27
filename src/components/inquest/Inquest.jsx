import React, { useEffect } from 'react';
import './inquest.scss'



const Inquest = () => {

	const [counter, setCounter] = React.useState(['start'])
	const [state, setState] = React.useState({
		current: 'start',
		textContent: [['START', newQuestion], ['START', newQuestion], ['START', newQuestion]],
		styleContainer: ['op_0', ' ', 'op_0'],
		pictureCount: 1,
	}
	)

	React.useEffect(
		() => {
			let newCounter = [...counter, state.current]

			setCounter(newCounter)

		}, [state.current]
	)

	function newQuestion() {
		console.log('NEW QUESTION')

		let random = Math.floor(Math.random() * 3);
		const nextQuest = question[random]
		console.log('Random value:' + random)

		setState({
			...nextQuest,
		})
	}



	const question = [
		{
			current: 'q1',
			textContent: [['q1Ответ1', newQuestion], ['q1Ответ2', newQuestion], ['q1Ответ3', newQuestion]],
			styleContainer: [' ', ' ', ' '],
			pictureCount: 1,
		},
		{
			current: 'q2',
			textContent: [['q2Ответ1', newQuestion], ['q2Ответ2', newQuestion], ['q2Ответ3', newQuestion]],
			styleContainer: [' ', ' ', ' '],
			pictureCount: 2,
		},
		{
			current: 'q3',
			textContent: [['q3Ответ1', newQuestion], ['q3Ответ2', newQuestion], ['q3Ответ3', newQuestion]],
			styleContainer: [' ', ' ', ' '],
			pictureCount: 3,
		},
	]



	const getTextForButton = (index) => { return <span>{state.textContent[index][0]}</span> }
	const getClickEventHandler = (index) => { return state.textContent[index][1] }
	const getStyleForButton = (index) => {
		return `slide__button ${state.styleContainer[index]}`
	}
	const getStateCounter = () => { return counter.length }

	return (
		<div className='inquest__wrapper'>

			<div className='slide'>
				<div className='slide__counter'>
					<span id='count'>{getStateCounter()}/3</span>
				</div>
				<div className='slide__mistery'>
					<span>?</span>
				</div>
				<div className="slide__buttons">

					<div className={getStyleForButton(0)} onClick={getClickEventHandler(0)}>
						{getTextForButton(0)}
					</div>
					<div className={getStyleForButton(1)} onClick={getClickEventHandler(1)}>
						{getTextForButton(1)}
					</div>
					<div className={getStyleForButton(2)} onClick={getClickEventHandler(2)}>
						{getTextForButton(2)}
					</div>

				</div>
			</div>

		</div>
	);
};

export default Inquest;








{/* {
				(!start) ?
					<Start startChanger={startChanger} />
					:
					<Question1 startChanger={startChanger} />
			} */}


// const Start = (props) => {
// 	function startHandler() {
// 		props.startChanger(true)
// 	}

// 	return (
// 		<div className='start slide'>
// 			<div className='slide__mistery'>
// 				<span>?</span>
// 			</div>
// 			<div className="slide__buttons">
// 				<div className="slide__button op_0" onClick={startHandler}>
// 					<span>START</span>
// 				</div>
// 				<div className="slide__button " onClick={startHandler}>
// 					<span>START</span>
// 				</div>
// 				<div className="slide__button op_0 " onClick={startHandler}>
// 					<span>START</span>
// 				</div>
// 			</div>
// 		</div>
// 	);
// };

// const Question1 = (props) => {
// 	function startHandler() {
// 		props.startChanger(false)
// 	}

// 	return (
// 		<div className='start slide'>
// 			<div className='start__mistery'>
// 				<span>?</span>
// 			</div>
// 			<div className="start__button" onClick={startHandler}>
// 				<span>1ый вопрос</span>
// 			</div>
// 			<div className="start__button" onClick={startHandler}>
// 				<span>1ый вопрос</span>
// 			</div>
// 		</div>
// 	);
// };


