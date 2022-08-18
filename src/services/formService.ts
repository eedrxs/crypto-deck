const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_.]{3,23}$/
const EMAIL_REGEX =
  /^[a-zA-Z\d]+([.]?[a-zA-Z\d]+)*@[a-zA-Z]+(-?[a-zA-Z\d]+)*\.[a-zA-Z]{2,3}$/
const PASSWORD_REGEX = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/

function validateField(field: Field, validatorType: string): string | null {
  const { label, value, required } = field
  const validate = getValidator(validatorType)

  if (required && !value) {
    const validate = getValidator("default")
    return validate(label) as any
  } else if (!required && (value === 0 || value)) {
    return validate(value as string)
  } else if (required && validatorType && validate != defaultValidator) {
    return validate(value as string)
  } else {
    return null
  }
}

function getValidator(validator: string) {
  switch (validator) {
    case "email":
      return emailValidator
    case "password":
      return passwordValidator
    case "initialSupply":
      return initialSupplyValidator
    case "decimals":
      return decimalsValidator
    default:
      return defaultValidator
  }
}

function defaultValidator(label: string): string {
  return `${label} is required!`
}

function emailValidator(value: string): string | null {
  return !EMAIL_REGEX.test(value) ? "Enter a valid email" : null
}

function passwordValidator(value: string): string | null {
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

function initialSupplyValidator(value: string): string | null {
  return +value < 0 ? "Initial supply can't be lesser than zero" : null
}

function decimalsValidator(value: string): string | null {
  return +value < 1 ? "Decimals has to be greater or equal to 1" : null
}

export { validateField }

interface Field {
  label: string
  value: string | number
  required?: boolean
}
