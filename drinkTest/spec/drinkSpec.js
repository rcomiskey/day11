
/*decribe('put the description here', function() {
    it('say what it should do here', function() {
        expect(our_function()).toBe(result);
    });
});*/


describe('whatCanIDrink', function() {
    it("Should return, 'Sorry. I can’t tell what drink because that age is incorrect!'", function() {
        expect(whatCanIDrink(-1)).toBe('Sorry. I can’t tell what drink because that age is incorrect!');
    });
});

describe('whatCanIDrink', function() {
    it("Should return, 'Drink Toddy'", function() {
        expect(whatCanIDrink(13)).toBe('Drink Toddy');
    });
});

describe('whatCanIDrink', function() {
    it("Should return, 'Drink Coke'", function() {
        expect(whatCanIDrink(17)).toBe('Drink Coke');
    });
});

describe('whatCanIDrink', function() {
    it("Should return, 'Drink Beer'", function() {
        expect(whatCanIDrink(20)).toBe('Drink Beer');
    });
});

describe('whatCanIDrink', function() {
    it("Should return, 'Drink Whisky'", function() {
        expect(whatCanIDrink(129)).toBe('Drink Whisky');
    });
});

describe('whatCanIDrink', function() {
    it("Should return, 'Sorry. I can’t tell what drink because that age is incorrect!'", function() {
        expect(whatCanIDrink(131)).toBe('Sorry. I can’t tell what drink because that age is incorrect!');
    });
});