import '../components/app.scss'
import '../utils/null.scss'

// import bg_pc from '../resources/bg/background_pc.png'
// import bg_mb from '../resources/bg/background_mobile.png'

import React from 'react';
import Inquest from './inquest/Inquest';

const App = () => {
	return (
		<div className='application'>
			<div className='background' />

			<Inquest />
		</div >
	);
};

export default App;