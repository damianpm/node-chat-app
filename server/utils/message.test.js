const expect = require('expect');
const {generateMessage} = require('./message');

describe('generateMessage', () =>{
    it('should generate message object', () => {
      var msg = generateMessage('Damian', 'Hola');
      expect(msg).toInclude({from: 'Damian', text: 'Hola'});
      expect(msg.createdAt).toBeA('number');
    });
});
