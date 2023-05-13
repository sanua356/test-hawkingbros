import React, { ChangeEvent } from 'react'
import CheckmarkIcon from './assets/CheckmarkIcon'
import './styles/Checkbox.css'

interface iProps {
	id: string
	name: string
	checked: boolean
	onChange: (event: ChangeEvent<HTMLInputElement>) => void
	label: string
}

const Checkbox: React.FC<iProps> = ({ id, name, onChange, checked, label }) => {
	return (
		<label htmlFor={id} className='label__checkbox'>
			<span className='checkmark'>{checked && <CheckmarkIcon />}</span>
			{label}
			<input
				type='checkbox'
				className='checkbox'
				id={id}
				name={name}
				onChange={onChange}
				checked={checked}
			/>
		</label>
	)
}

export default Checkbox
