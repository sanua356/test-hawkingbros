import React from 'react'
import './styles/Button.css'

interface iProps {
	children: React.ReactNode
	onClick?: () => void
	type?: 'button' | 'submit' | 'reset'
	variant: 'white' | 'purple'
	disabled?: boolean
}

const Button: React.FC<iProps> = ({
	children,
	onClick,
	variant,
	type = 'button',
	disabled = false,
}) => {
	return (
		<button
			type={type}
			className={`${'button'} ${variant}`}
			onClick={onClick}
			disabled={disabled}
		>
			{children}
		</button>
	)
}

export default Button
