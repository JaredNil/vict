import React from 'react';
import './inquest.scss'

import gavai1 from '../../resources/gavai/gavai1.png'

import teriyaki1 from '../../resources/teriyaki/teriyaki1.png'
import teriyaki2 from '../../resources/teriyaki/teriyaki2.png'

import america1 from '../../resources/america/america1.png'
import america2 from '../../resources/america/america2.png'
import america3 from '../../resources/america/america3.png'

import ham1 from '../../resources/ham/ham1.png'
import ham2 from '../../resources/ham/ham2.png'

import cheese1 from '../../resources/cheese/cheese1.png'
import cheese2 from '../../resources/cheese/cheese2.png'
import cheese3 from '../../resources/cheese/cheese3.png'

import hotdog1 from '../../resources/hotdog/hotdog1.png'
import hotdog2 from '../../resources/hotdog/hotdog2.png'

import chicken1 from '../../resources/chicken/chicken1.png'
import chicken2 from '../../resources/chicken/chicken2.png'
import chicken3 from '../../resources/chicken/chicken3.png'

import cesar from '../../resources/cesar/cesar.png'

import italic1 from '../../resources/italic/italic1.png'
import italic2 from '../../resources/italic/italic2.png'

import cheeseChicken from '../../resources/cheeseChicken/cheeseChicken.png'

import carbonara1 from '../../resources/carbonara/carbonara1.png'
import carbonara2 from '../../resources/carbonara/carbonara2.png'
import carbonara3 from '../../resources/carbonara/carbonara3.png'

import tomat1 from '../../resources/tomat/tomat1.png'
import tomat2 from '../../resources/tomat/tomat2.png'
import tomat3 from '../../resources/tomat/tomat3.png'

import greek1 from '../../resources/greek/greek1.png'
import greek2 from '../../resources/greek/greek2.png'

import four from '../../resources/four/four.png'

import season from '../../resources/season/season.png'


const Inquest = () => {
	const startState = {
		current: 'start',
		textContent: [['START', newQuestion], ['START', newQuestion], ['START', newQuestion]],
		styleContainer: ['op_0', ' start', 'op_0'],
		pictureCount: 1,
	}
	const [counter, setCounter] = React.useState(['start'])
	const [state, setState] = React.useState({ ...startState })



	React.useEffect(
		() => {
			if (!counter.includes(state.current)) {
				let newCounter = [...counter, state.current].sort()
				setCounter(newCounter)
			}
		}, [state.current]
	)

	function newQuestion() {
		// console.log(this.counter)
		const nextQuest = question[getRandomQuestion(this.counter, this.state)]

		setState({
			...nextQuest,
		})
	}

	function win() {
		(this.counter.length === 5)
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

		if (counter.length < 5) {
			let random = Math.floor(Math.random() * 15)
			while (counter.includes(`q${random}`)) {
				random = Math.floor(Math.random() * 15)
			}
			return random
		}
		return state.current.split('')[1]
	}


	const question = [
		{
			current: 'q0',
			text: 'Гавай',
			textContent: [['Гавайская', win], ['Пепперони', lose], ['Чикен Спайси', lose]],
			styleContainer: [' ', ' ', ' '],
			pictureCount: 1,
			pictureStorage: [gavai1]
		},
		{
			current: 'q1',
			text: 'Терияки',
			textContent: [['Сырный', lose], ['Камамбер', lose], ['Терияки', win]],
			styleContainer: [' ', ' ', ' '],
			pictureCount: 2,
			pictureStorage: [teriyaki1, teriyaki2]
		},
		{
			current: 'q2',
			text: 'Американо',
			textContent: [['Гавайская', lose], ['Американо', win], ['Греческая', lose]],
			styleContainer: [' ', ' ', ' '],
			pictureCount: 3,
			pictureStorage: [america1, america2, america3]
		},
		{
			current: 'q3',
			text: 'Ветчина',
			textContent: [['Бьянко', lose], ['Ветчина и сыр', win], ['Морская', lose]],
			styleContainer: [' ', ' ', ' '],
			pictureCount: 2,
			pictureStorage: [ham1, ham2]
		},
		{
			current: 'q4',
			text: 'Греческая',
			textContent: [['Римская', lose], ['Греческая', win], ['Португальская', lose]],
			styleContainer: [' ', ' ', ' '],
			pictureCount: 2,
			pictureStorage: [greek1, greek2]
		},
		{
			current: 'q5',
			text: 'Сырная',
			textContent: [['Ветчина и сыр', lose], ['Гавайская', lose], ['Сырная', win]],
			styleContainer: [' ', ' ', ' '],
			pictureCount: 3,
			pictureStorage: [cheese1, cheese2, cheese3]
		},
		{
			current: 'q6',
			text: 'Хотдог',
			textContent: [['Хотдог', win], ['Чикендог', lose], ['Хоткэт', lose]],
			styleContainer: [' ', ' ', ' '],
			pictureCount: 2,
			pictureStorage: [hotdog1, hotdog2]
		},
		{
			current: 'q7',
			text: 'Куриная',
			textContent: [['Сырная', lose], ['Куриная', win], ['Пепперони', lose]],
			styleContainer: [' ', ' ', ' '],
			pictureCount: 3,
			pictureStorage: [chicken1, chicken2, chicken3]
		},
		{
			current: 'q8',
			text: 'Цезарь',
			textContent: [['Черепаха', lose], ['Зимний', lose], ['Цезарь с курицей', win]],
			styleContainer: [' ', ' ', ' '],
			pictureCount: 1,
			pictureStorage: [cesar]
		},
		{
			current: 'q9',
			text: 'Итальянская',
			textContent: [['Мясная', lose], ['Итальянская', win], ['Мексиканская', lose]],
			styleContainer: [' ', ' ', ' '],
			pictureCount: 2,
			pictureStorage: [italic1, italic2]
		},
		{
			current: 'q10',
			text: 'Сырный цыплёнок',
			textContent: [['Сырный цыплёнок', win], ['Томатный цыпленок', lose], ['Сальса', lose]],
			styleContainer: [' ', ' ', ' '],
			pictureCount: 1,
			pictureStorage: [cheeseChicken]
		},
		{
			current: 'q11',
			text: 'Карбонара',
			textContent: [['Фишролл', lose], ['Чизкейк', lose], ['Карбонара', win]],
			styleContainer: [' ', ' ', ' '],
			pictureCount: 3,
			pictureStorage: [carbonara1, carbonara2, carbonara3]
		},
		{
			current: 'q12',
			text: 'Томатная',
			textContent: [['Дон Бекон', lose], ['Томатная', win], ['Мексиканская', lose]],
			styleContainer: [' ', ' ', ' '],
			pictureCount: 3,
			pictureStorage: [tomat1, tomat2, tomat3]
		},
		{
			current: 'q13',
			text: '4 сыра',
			textContent: [['4 мира', lose], ['4 сыра', win], ['4 стороны света', lose]],
			styleContainer: [' ', ' ', ' '],
			pictureCount: 1,
			pictureStorage: [four]
		},
		{
			current: 'q14',
			text: '4 сезона',
			textContent: [['4 сезона', win], ['Додо', win], ['Цыпленок', lose]],
			styleContainer: [' ', ' ', ' '],
			pictureCount: 1,
			pictureStorage: [season]
		},
	]

	const promocode = {
		current: 'promo',
		textContent: [['', () => { }], ['ПОЗДРАВЛЯЕМ', () => { }], ['', () => { }]],
		styleContainer: [' op_0', ' ', ' op_0'],
		pictureCount: 1,
		pictureStorage: [america1]
	}


	function getLoseStatus(state) {
		setState({
			...state.state,
			styleContainer: ['redBack', 'redBack', 'redBack']
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
		return (counter.length === 6) ? 5 : (counter.length - 1)
	}
	const getTotalPicture = () => {
		return state.pictureCount
	}
	const getTotalPictureToClass = () => {
		if (state.pictureCount === 3) {
			return 'third'
		} else if (state.pictureCount === 2) {
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
					<span id='count' className={([0, 1, 2, 3, 4, 5].includes(getStateCounter())) ? '' : 'hide'}>
						{getStateCounter()}/5
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

