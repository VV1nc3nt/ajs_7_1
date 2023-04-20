import Validator from '../Validator';

test('Testing validateUsername function of class Validator', () => {
  const validateFunction = new Validator();
  const username = 'test123_regex';
  const expected = true;
  const recieved = validateFunction.validateUsername(username);
  expect(expected).toBe(recieved);
});
