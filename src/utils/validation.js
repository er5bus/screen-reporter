const rules = {
  required: value => !value,
  minLength: min => value => value && (value.length < min ? true : false),
  maxLength: max => value => value && value.length > max ? true : false,
  email: value => value ? !(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(value)) : false,
  min: min => value =>  value && !isFinite(value) && parseInt(value) > min ? true : false,
  max: max => value => value && !isFinite(value) && parseInt(value) < max ? true : false,
  pattern: pattern => value => !value ? false : !pattern.test(value),
  equalTo: eq => value => !value ? false : eq != value,
  digits: value => !value || !/^\d+$/.test(value),
}


export default rules
