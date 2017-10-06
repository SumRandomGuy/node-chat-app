var expect = require('expect');

var {
    generateMessage, generateLocationMessage
} = require('./message');

describe('generateMessage', () => {

    it('should generate the correct message object', () => {
        var from = 'Jen';
        var text = 'This is a test message';
        var message = generateMessage(from, text);

        expect(message.createdAt).toBeA('number');
        expect(message).toInclude({
            from,
            text
        });
    });

});

describe('generateLocationMessage', () => {

    it('should generate correct location object', () => {
        var from = 'User';
        var latitude = 1;
        var longitude = 100;
        var url = 'https://www.google.com/maps?q=1,100';
        var message = generateLocationMessage(from, latitude, longitude);

        expect(message.url).toBe(url);
        expect(message.createdAt).toBeA('number');
        expect(message).toInclude({from, url});
    });

});