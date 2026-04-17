export function required(value) {
  return value !== null && value !== undefined && value !== '' ? null : 'This field is required';
}

export function minLength(min) {
  return (value) => {
    return value && value.length >= min ? null : `Minimum ${min} characters required`;
  };
}

export function maxLength(max) {
  return (value) => {
    return !value || value.length <= max ? null : `Maximum ${max} characters allowed`;
  };
}

export function email(value) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return !value || regex.test(value) ? null : 'Invalid email format';
}

export function numeric(value) {
  return !value || /^\d+$/.test(value) ? null : 'Must be a number';
}

export function positive(value) {
  return !value || parseFloat(value) > 0 ? null : 'Must be positive';
}

export function validate(form) {
  const errors = {};
  for (const [field, validators] of Object.entries(form)) {
    for (const validator of validators) {
      const error = validator(form[field]);
      if (error) {
        errors[field] = error;
        break;
      }
    }
  }
  return errors;
}