const expect = require('expect');
const {isRealString} = require('./validation');

describe('isRealString', () =>{
  it('should reject non-string values', ()=> {
    var str = true;
    expect(isRealString(str)).toBe(false);
  });

  it('should reject string with only spaces', ()=> {
    var str = '    ';
    expect(isRealString(str)).toBe(false);
  });

  it('should allow valid string', ()=> {
    var str = '  Hola Mundo ';
    expect(isRealString(str)).toBe(true);
  });

});
