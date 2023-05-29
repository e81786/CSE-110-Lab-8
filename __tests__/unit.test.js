// unit.test.js

const functions = require("../code-to-unit-test/unit-test-me.js");

// TODO - Part 2

// isPhoneNumber testing
test("is 9252548371 a valid phone number", () => {
  expect(functions.isPhoneNumber("925-254-8371")).toBe(true);
});

test("is 3972591264 a valid phone number", () => {
  expect(functions.isPhoneNumber("397-259-1264")).toBe(true);
});

test("is 92525483712 a valid phone number", () => {
  expect(functions.isPhoneNumber("92525483712")).toBe(false);
});

test("is 'free' a valid phone number", () => {
  expect(functions.isPhoneNumber("free")).toBe(false);
});

// isEmail testing
test("is efrainprok@gmail.com a valid email", () => {
  expect(functions.isEmail("efrainprok@gmail.com")).toBe(true);
});

test("is firefirefire@outlook.com a valid email", () => {
  expect(functions.isEmail("firefirefire@outlook.com")).toBe(true);
});

test("is efrainproksgmail.com a valid email", () => {
  expect(functions.isEmail("efrainproksgmail.com")).toBe(false);
});

test("is 325-213-5625 a valid email", () => {
  expect(functions.isEmail("325-213-5625")).toBe(false);
});

// isStrongPassword testing
test("is Strongpassword a strong password", () => {
  expect(functions.isStrongPassword("Strongpassword")).toBe(true);
});

test("is weak3pass2_2 a strong password", () => {
  expect(functions.isStrongPassword("weak3pass2_2")).toBe(true);
});

test("is 2_2123asd a strong password", () => {
  expect(functions.isStrongPassword("2_2123asd")).toBe(false);
});

test("is freakthisisareallylongpasswordhonestly a strong password", () => {
  expect(
    functions.isStrongPassword("freakthisisareallylongpasswordhonestly")
  ).toBe(false);
});

// isDate testing
test("is 32/23/1234 a date", () => {
  expect(functions.isDate("32/23/1234")).toBe(true);
});

test("is 02/08/2008 a date", () => {
  expect(functions.isDate("02/08/2008")).toBe(true);
});

test("is 32/23123/4 a date", () => {
  expect(functions.isDate("32/23123/4")).toBe(false);
});

test("is jackfrost a date", () => {
  expect(functions.isDate("jackfrost")).toBe(false);
});

// isHexColor testing

test("is FF33FF a valid Hex Color", () => {
  expect(functions.isHexColor("FF33FF")).toBe(true);
});

test("is #F3F a valid Hex Color", () => {
  expect(functions.isHexColor("#F3F")).toBe(true);
});

test("is F33FF a valid Hex Color", () => {
  expect(functions.isHexColor("F33FF")).toBe(false);
});

test("is black a valid Hex Color", () => {
  expect(functions.isHexColor("black")).toBe(false);
});
