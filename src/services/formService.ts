const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_.]{3,23}$/
const EMAIL_REGEX =
  /^[a-zA-Z\d]+([.]?[a-zA-Z\d]+)*@[a-zA-Z]+(-?[a-zA-Z\d]+)*\.[a-zA-Z]{2,3}$/
const PASSWORD_REGEX = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/

const validateField = (field: Field, validatorType: string): string | null => {
  const { label, value, required } = field
  const validate = getValidator(validatorType)

  if (required && !value) {
    return getValidator("default")(label)
  } else if (validatorType && validate != defaultValidator) {
    return validate(value)
  } else {
    return null
  }
}

const getValidator = (validator: string) => {
  switch (validator) {
    case "email":
      return emailValidator
    case "password":
      return passwordValidator
    default:
      return defaultValidator
  }
}

const defaultValidator = (label: string): string => {
  return `${label} is required!`
}

const emailValidator = (value: string): string | null => {
  return !EMAIL_REGEX.test(value) ? "Enter a valid email" : null
}

const passwordValidator = (value: string): string | null => {
  if (PASSWORD_REGEX.test(value)) {
    return "Must include uppercase and lowercase"
  } else if (value.length < 8) {
    return "Too short, min 8 characters"
  } else if (value.length > 20) {
    return "Too long, max 20 characters"
  } else {
    return null
  }
}

export { validateField }

interface Field {
  label: string
  value: string
  required?: boolean
}
