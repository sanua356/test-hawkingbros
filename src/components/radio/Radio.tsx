import React from 'react'
import './styles/Radio.css'

interface iProps {
	isSelected: boolean
	onClick: (value: boolean) => void
	label?: string
}

const Radio: React.FC<iProps> = ({ isSelected, onClick, label }) => {
	return (
		<div className='radio__container' onClick={() => onClick(!isSelected)}>
			<button
				type='button'
				className={`${'radio__button'} ${
					isSelected ? 'radio__button_selected' : ''
				}`}
			></button>
			{label && <span className='radio__label'>{label}</span>}
		</div>
	)
}

export default Radio
