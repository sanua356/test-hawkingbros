import { useFormik } from 'formik'
import { FormikProps } from 'formik/dist/types'
import { useState } from 'react'
import Checkbox from '../../components/checkbox/Checkbox'
import Dropdown from '../../components/dropdown/Dropdown'
import Input from '../../components/input/Input'
import Radio from '../../components/radio/Radio'
import Toggle from '../../components/toggle/Toggle'
import { FormSchema } from './schemas/Form.schema'
import './styles/Form.css'
import Button from '../../components/button/Button'

interface iFieldsList {
	username: string
	password: string
}

const fieldsList: iFieldsList = {
	username: '',
	password: '',
}

const Form = () => {
	const [additionalFields, setAdditionalFields] = useState({
		rememberMe: false,
		toggle: false,
		radioSelection: 'Radio selection 1',
		dropdownTitle: 'Dropdown option',
	})

	function onClickAdditionalField(
		fieldType: 'checkbox' | 'toggle' | 'radio' | 'dropdown',
		value: string | boolean
	) {
		switch (fieldType) {
			case 'checkbox':
				setAdditionalFields(prev => {
					return { ...prev, rememberMe: Boolean(value) }
				})
				break
			case 'toggle':
				setAdditionalFields(prev => {
					return { ...prev, toggle: Boolean(value) }
				})
				break
			case 'radio':
				setAdditionalFields(prev => {
					return { ...prev, radioSelection: String(value) }
				})
				break
			case 'dropdown':
				setAdditionalFields(prev => {
					return { ...prev, dropdownTitle: String(value) }
				})
				break
			default:
				break
		}
	}

	const formik: FormikProps<iFieldsList> = useFormik<iFieldsList>({
		initialValues: {
			...fieldsList,
		},
		validationSchema: FormSchema,
		validateOnBlur: true,
		onSubmit: (values: iFieldsList) => {
			alert(JSON.stringify({ ...additionalFields, ...values }, null, 2))
		},
	})

	return (
		<div className='layout'>
			<form className='form' onSubmit={formik.handleSubmit}>
				<div className='field'>
					<Input
						id='username'
						label='Username'
						placeholder='Enter username'
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						value={formik.values.username}
						name='username'
						errorText={
							formik.touched.username && formik.errors.username
								? formik.errors.username
								: ''
						}
					/>
				</div>
				<div className='field'>
					<Input
						id='password'
						label='Password'
						type='password'
						placeholder='Enter password'
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						value={formik.values.password}
						name='password'
						errorText={
							formik.touched.password && formik.errors.password
								? formik.errors.password
								: ''
						}
						defaultText='Your password is between 4 and 12 characters'
					/>
				</div>
				<div className='field'>
					<Checkbox
						label='Remember me'
						id='rememberMe'
						name='rememberMe'
						onChange={() =>
							onClickAdditionalField(
								'checkbox',
								!additionalFields.rememberMe
							)
						}
						checked={additionalFields.rememberMe}
					/>
				</div>
				<div className='field'>
					<Toggle
						label={additionalFields.toggle ? 'off' : 'on'}
						onClick={() =>
							onClickAdditionalField(
								'toggle',
								!additionalFields.toggle
							)
						}
						isToggled={additionalFields.toggle}
					/>
				</div>
				<div className='field'>
					<Radio
						label='Radio selection 1'
						onClick={() =>
							onClickAdditionalField('radio', 'Radio selection 1')
						}
						isSelected={
							additionalFields.radioSelection ===
							'Radio selection 1'
						}
					/>
				</div>
				<div className='field'>
					<Radio
						label='Radio selection 2'
						onClick={() =>
							onClickAdditionalField('radio', 'Radio selection 2')
						}
						isSelected={
							additionalFields.radioSelection ===
							'Radio selection 2'
						}
					/>
				</div>
				<div className='field'>
					<Radio
						label='Radio selection 3'
						onClick={() =>
							onClickAdditionalField('radio', 'Radio selection 3')
						}
						isSelected={
							additionalFields.radioSelection ===
							'Radio selection 3'
						}
					/>
				</div>
				<div className='field'>
					<Dropdown
						label='Dropdown option'
						onClickSelect={option =>
							onClickAdditionalField('dropdown', option)
						}
						selectedOption={additionalFields.dropdownTitle}
						options={[
							'Dropdown option',
							'Dropdown option 1',
							'Dropdown option 2',
						]}
					/>
				</div>
				<div className="buttons">
					<Button variant='white'>Cancel</Button>
					<Button type='submit' variant='purple'>Next</Button>
				</div>
			</form>
		</div>
	)
}

export default Form
