const size = require('./size');

test('returns size letter - S', () => {
  expect(size.getSizeValue(60)).toBe('S');
});

test('returns size letter - M', () => {
  expect(size.getSizeValue(110)).toBe('M');
});

test('returns size letter - L', () => {
  expect(size.getSizeValue(160)).toBe('L');
});

test('returns size letter - XL', () => {
  expect(size.getSizeValue(210)).toBe('XL');
});
