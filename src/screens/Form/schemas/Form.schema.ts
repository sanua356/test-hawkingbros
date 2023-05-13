import { object, string } from 'yup'

export const FormSchema = object().shape({
	username: string()
		.required('Username field must be filled')
		.min(3, 'Username field must have at least 3 characters')
		.max(30, 'Username field must have no more than 30 characters'),
	password: string()
		.required('Username field must be filled')
		.min(4, 'Username field must have at least 4 characters')
		.max(12, 'Username field must have no more than 12 characters')
		.matches(
			/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
			'Must Contain 8 Characters, one Uppercase, one Lowercase, one Number and one special case character'
		),
})
