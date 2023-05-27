import React, { useEffect } from 'react';
import './inquest.scss'



const Inquest = () => {
	const startState = {
		current: 'start',
		textContent: [['START', newQuestion], ['START', newQuestion], ['START', newQuestion]],
		styleContainer: ['op_0', ' ', 'op_0'],
		pictureCount: 1,
	}
	const [counter, setCounter] = React.useState(['start'])
	const [state, setState] = React.useState({ ...startState })



	React.useEffect(
		() => {

			if (!counter.includes(state.current)) {
				let newCounter = [...counter, state.current]
				setCounter(newCounter)
			}
			// console.log(counter)
		}, [state.current]
	)

	function newQuestion() {
		console.log(this)
		const nextQuest = question[getRandomQuestion(this.counter, this.state)]

		setState({
			...nextQuest,
		})
	}
	function win() {
		(this.counter.length == 4)
			? setState({ ...promocode, })
			: newQuestion.bind({ ...this })()
	}
	function lose() {
		getLoseStatus(this)
		setTimeout(() => {
			setCounter(['start'])
			setState({
				...startState,
			})
		}, 1200);
	}

	const getRandomQuestion = (counter, state) => {
		if (counter.length < 4) {
			let random = Math.floor(Math.random() * 3)
			while (counter.includes(`q${random}`)) {
				random = Math.floor(Math.random() * 3)
			}
			console.log(random)
			return random
		}

		return state.current.split('')[1]
	}


	const question = [
		{
			current: 'q0',
			textContent: [['q0Ответ1', win], ['q0Ответ2', lose], ['q0твет0', lose]],
			styleContainer: [' ', ' ', ' '],
			pictureCount: 1,
		},
		{
			current: 'q1',
			textContent: [['q1Ответ1', win], ['q1Ответ2', lose], ['q1Ответ3', lose]],
			styleContainer: [' ', ' ', ' '],
			pictureCount: 2,
		},
		{
			current: 'q2',
			textContent: [['q2Ответ1', win], ['q2Ответ2', lose], ['q2Ответ3', lose]],
			styleContainer: [' ', ' ', ' '],
			pictureCount: 3,
		},
	]

	const promocode = {
		current: 'promo',
		textContent: [['', () => { }], ['ПОЗДРАВЛЯЕМ', () => { }], ['', () => { }]],
		styleContainer: [' op_0', ' ', ' op_0'],
		pictureCount: 1,
	}


	function getLoseStatus(state) {
		console.log(state)

		setState({
			...state.state,
			styleContainer: ['red', 'red', 'red']
		})
	}



	const getTextForButton = (index) => { return <span>{state.textContent[index][0]}</span> }
	const getClickEventHandler = (index) => {
		return state.textContent[index][1].bind({ state, counter })
	}
	const getStyleForButton = (index) => {
		return `slide__button ${state.styleContainer[index]}`
	}
	const getStateCounter = () => {
		return (counter.length == 5) ? 3 : (counter.length - 1)
	}
	const getTotalPicture = () => {
		return state.pictureCount
	}

	const getf = () => {
		// let count = new Array(getTotalPicture()).fill('')
		let count = new Array(3).fill('')
		let a = count.map((_, index) => {
			return (<div className='slide__mistery' key={index}>		<span>?</span>	</div>)
		})

		return a
	}

	return (
		<div className='inquest__wrapper'>

			<div className='slide'>
				<div className='slide__counter'>
					<span id='count' className={([1, 2, 3].includes(getStateCounter())) ? '' : 'hide'}>
						{getStateCounter()}/3
					</span>
				</div>
				<div className="slide__picture">
					{
						getf()
					}
					{/* <div className='slide__mistery'>
						<span>?</span>
					</div>
					<div className='slide__mistery'>
						<span>?</span>
					</div>
					<div className='slide__mistery'>
						<span>?</span>
					</div> */}

				</div>


				<div className="slide__buttons">

					<div className={getStyleForButton(0)} onClick={getClickEventHandler(0).bind({ state, counter })}>
						{getTextForButton(0)}
					</div>
					<div className={getStyleForButton(1)} onClick={getClickEventHandler(1).bind({ state, counter })}>
						{getTextForButton(1)}
					</div>
					<div className={getStyleForButton(2)} onClick={getClickEventHandler(2).bind({ state, counter })}>
						{getTextForButton(2)}
					</div>

				</div>
			</div>

		</div>
	);
};

export default Inquest;

