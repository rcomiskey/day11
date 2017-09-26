
/*describe('put the description here', function() {
    it('say what it should do here', function() {
        expect(our_function()).toBe(result);
    });
});*/

describe('fizzBuzz', function() {
    it('If the number is divisible by 3 and 5, then return “FizzBuzz”', function() {
        expect(fizzBuzz(15)).toBe('If the number is divisible by 3 and 5, then return “FizzBuzz”');
    });
});

describe('fizzBuzz', function() {
    it('If the number is divisible by 3, then return “Fizz”', function() {
        expect(fizzBuzz(9)).toBe('If the number is divisible by 3, then return “Fizz”');
    });
});

describe('fizzBuzz', function() {
    it('If the number is divisible by 5, then return “Buzz”', function() {
        expect(fizzBuzz(10)).toBe('If the number is divisible by 5, then return “Buzz”');
    });
});

describe('fizzBuzz', function() {
    it('Else just return the number', function() {
        expect(fizzBuzz(22)).toBe(22);
    });
});
