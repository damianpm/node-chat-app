const expect = require('expect');
const {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () =>{
    it('should generate message object', () => {
      var msg = generateMessage('Damian', 'Hola');
      expect(msg).toInclude({from: 'Damian', text: 'Hola'});
      expect(msg.createdAt).toBeA('number');
    });
});

describe('generateLocationMessage', () => {
  it('should generate correct location object', () => {
    var from = 'Admin';
    var lat = 15;
    var long = 25;
    var url = "https://www.google.com/maps?q=15,25";
    var msg = generateLocationMessage(from, lat, long);
    expect(msg).toInclude({from, url});
    expect(msg.from).toBe('Admin');
    expect(msg.url).toBe(url);
    expect(msg.createdAt).toBeA('number');
  });
});
