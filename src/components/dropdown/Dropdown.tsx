import React, { useEffect, useState } from 'react'
import ArrowIcon from './assets/ArrowIcon'
import './styles/Dropdown.css'

interface iProps {
	options: string[]
	selectedOption: string
	onClickSelect: (option: string) => void
	label?: string
}

const Dropdown: React.FC<iProps> = ({
	options,
	selectedOption,
	onClickSelect,
	label,
}) => {
	useEffect(() => {
		function clickEvent(event: any) {}

		document.addEventListener('click', clickEvent)

		return () => {
			document.removeEventListener('click', clickEvent)
		}
	}, [])

	const [isOpenedDropdown, setIsOpenedDropdown] = useState<boolean>(false)

	function onClickDropdown() {
		setIsOpenedDropdown(prev => !prev)
	}

	function onSelectOption(option: string) {
		onClickSelect(option)
		setIsOpenedDropdown(false)
	}

	return (
		<div className='dropdown__container'>
			{label && <span className='dropdown__label'>{label}</span>}
			<div className='dropdown__field'>
				<div
					className={`${'dropdown__selected'} ${
						isOpenedDropdown ? 'dropdown__selected_opened' : ''
					}`}
					onClick={onClickDropdown}
				>
					<span>{selectedOption}</span>
					<ArrowIcon />
				</div>
				<div
					className={`${'options'} ${
						isOpenedDropdown ? 'options_opened' : ''
					}`}
				>
					{options
						.filter(option => option !== selectedOption)
						.map(option => {
							return (
								<span
									className='option'
									key={option}
									onClick={() => onSelectOption(option)}
								>
									{option}
								</span>
							)
						})}
				</div>
			</div>
		</div>
	)
}

export default Dropdown
