import './styles/Toggle.css'

interface iProps {
	isToggled: boolean
	onClick: () => void
	label?: string
}

const Toggle: React.FC<iProps> = ({ isToggled, onClick, label }) => {
	return (
		<div className='toggle__container' onClick={onClick}>
			<button
				type='button'
				className={`${'toggle__button'} ${
					isToggled ? 'toggle__button_toggled' : ''
				}`}
			></button>
			{label && <span className='toggle__label'>{label}</span>}
		</div>
	)
}

export default Toggle
