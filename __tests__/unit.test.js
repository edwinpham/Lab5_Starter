// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2
// README.md answers
// how to run tests: npm test ./__tests__/unit.test.js
// unit testing: create 2 true tests and 2 false tests for each function. 20 tests in total


// ex:
// test('adds 1 + 2 to equal 3', () => {
//   expect(sum(1,2)).toBe(3);
// });

// testing isPhoneNumber
test('basic example', () => {
  expect(isPhoneNumber("555-555-5555")).toBe(true);
})

test('with parenthesis', () => {
  expect(isPhoneNumber("(555) 555-5555")).toBe(true);
})

test('no spaces', () => {
  expect(isPhoneNumber("555 555 5555")).toBe(false);
})

test('wrong count', () => {
  expect(isPhoneNumber("5555-55-555")).toBe(false);
})


// testing isEmail

test('letters only vaild', () => {
  expect(isEmail("pizzaMan@deez.com")).toBe(true);
})

test('number and underscore valid', () => {
  expect(isEmail("pizzaMan_123@deez.com")).toBe(true);
})

test('invalid characters in email domain name', () => {
  expect(isEmail("pizzaMan_123@123.com")).toBe(false);
})

test('missing username', () => {
  expect(isEmail("@123.com")).toBe(false);
})

// testing isStrongPassword
test('valid, no special characters', () => {
  expect(isStrongPassword("hey123")).toBe(true);
})

test('valid, special character', () => {
  expect(isStrongPassword("hey_123")).toBe(true);
})

test('invalid too long', () => {
  expect(isStrongPassword("yoeventhoughthisisformattedwellitstoolong123")).toBe(false);
})

test('invalid doesn\'t start with letter', () => {
  expect(isStrongPassword("1hey23")).toBe(false);
})

// testing isDate
test('using one digits', () => {
  expect(isDate("1/1/1999")).toBe(true);
})

test('using two digits', () => {
  expect(isDate("01/01/1999")).toBe(true);
})

test('wrong size', () => {
  expect(isDate("001/01/1999")).toBe(false);
})

test('using letters', () => {
  expect(isDate("aa/bb/1999")).toBe(false);
})

// testing isHexColor
test('valid size 3 hex', () => {
  expect(isHexColor("#FFF")).toBe(true);
})

test('valid size 6 hex', () => {
  expect(isHexColor("#FFFFFF")).toBe(true);
})

test('wrong size', () => {
  expect(isHexColor("#F")).toBe(false);
})

test('wrong format', () => {
  expect(isHexColor("$FFF")).toBe(false);
})


