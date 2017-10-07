const expect = require('expect');
const {isRealString} = require('./validation');

describe('Testing validation utilities', () => {

  it('should reject non-string values', () => {
    expect(isRealString(1234)).toBeFalsy();
  });

  it('should reject string with only spaces', () => {
    expect(isRealString('     ')).toBeFalsy();
  });

  it('should allow string with non-space characters', () => {
    expect(isRealString('  abc  ')).toBeTruthy();
  });

});
