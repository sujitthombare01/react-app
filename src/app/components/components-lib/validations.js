const required = value => value ? undefined : 'Required.';


const email = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ?
  'Invalid email address' : undefined ;

const number = value => value && isNaN(Number(value)) ? 'Must be a number' : undefined;


const minValue = min => value =>
  value && value < min ? `Must be at least ${min}` : undefined;

  const minValue18 = minValue(18);

export   {
    required,
    email,
    number,
    minValue,
    minValue18
};