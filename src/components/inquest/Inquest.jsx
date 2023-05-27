import React, { useEffect } from 'react';
import './inquest.scss'

import gavai1 from '../../resources/gavai/gavai1.png'

import teriyaki1 from '../../resources/teriyaki/teriyaki1.png'
import teriyaki2 from '../../resources/teriyaki/teriyaki2.png'

import america1 from '../../resources/america/america1.png'
import america2 from '../../resources/america/america2.png'
import america3 from '../../resources/america/america3.png'


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
			text: 'Гавай',
			textContent: [['Гавайская', win], ['Пепперони и томаты', lose], ['Чикен Спайси', lose]],
			styleContainer: [' ', ' ', ' '],
			pictureCount: 1,
			pictureStorage: [gavai1]
		},
		{
			current: 'q1',
			text: 'Терияки',
			textContent: [['Терияки', win], ['Сырный', lose], ['Камамбер', lose]],
			styleContainer: [' ', ' ', ' '],
			pictureCount: 2,
			pictureStorage: [teriyaki1, teriyaki2]
		},
		{
			current: 'q2',
			text: 'Американо',
			textContent: [['Американо', win], ['Гавайская', lose], ['Греческая', lose]],
			styleContainer: [' ', ' ', ' '],
			pictureCount: 3,
			pictureStorage: [america1, america2, america3]
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
	const getTotalPictureToClass = () => {
		if (state.pictureCount == 3) {
			return 'third'
		} else if (state.pictureCount == 2) {
			return 'two'
		}
		return 'one'
	}

	const getPictureFile = (index) => {
		if (!state.pictureStorage) {
			return <span>?</span>
		}
		let temp = state.pictureStorage[index]
		return <img src={temp} alt="#" />
	}


	return (
		<div className='inquest__wrapper'>

			<div className='slide'>
				<div className={`slide__counter`}>
					<span id='count' className={([1, 2, 3].includes(getStateCounter())) ? '' : 'hide'}>
						{getStateCounter()}/3
					</span>
				</div>
				<div className={`slide__picture ${getTotalPictureToClass()}`}>
					{
						new Array(getTotalPicture()).fill('').map((_, index) => {
							return (<div className='slide__mistery' key={index}>
								{
									getPictureFile(index)
								}
							</div>)
						})
					}

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

