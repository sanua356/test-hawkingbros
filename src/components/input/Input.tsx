import React, { ChangeEvent } from 'react'
import ErrorIcon from './assets/ErrorIcon'
import './styles/Input.css'

interface iProps {
	id: string
	name: string
	value: string
	onChange: (event: ChangeEvent<HTMLInputElement>) => void
	onBlur: (event: ChangeEvent<HTMLInputElement>) => void
	label: string
	defaultText?: string
	errorText?: string
	placeholder?: string
	type?: string
}

const Input: React.FC<iProps> = ({
	id,
	name,
	onChange,
	onBlur,
	value,
	type = 'text',
	defaultText,
	errorText,
	label,
	placeholder,
}) => {
	return (
		<label htmlFor={id} className='label__input'>
			{label}
			<div className='field__container'>
				<input
					type={type}
					className={`${'input'} ${errorText ? 'input_error' : ''}`}
					id={id}
					name={name}
					onChange={onChange}
					onBlur={onBlur}
					value={value}
					placeholder={placeholder}
				/>
				{errorText && <ErrorIcon />}
			</div>
			{defaultText && !errorText && (
				<span className='input__defaultText'>{defaultText}</span>
			)}
			{errorText && <span className='input__errorText'>{errorText}</span>}
		</label>
	)
}

export default Input
