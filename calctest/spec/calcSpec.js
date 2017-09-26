describe("Calculator", function() {
 
    beforeEach(function() {
        calc = new Calculator();
    });
    describe('Addition function', function() {
        it('should add these two numbers', function() {
            calc.add(2);
            calc.add(2);
            expect(calc.value).toBe(4);
        });
 
        it("should not return 4 if the numbers given don't add up to 4", function() {
            calc.add(12);
            calc.add(7);
            expect(calc.value).toBe(19);
        });
 
        it("should have called the alert function if the number given is undefined", function() {
            spyOn(window, "alert");
            calc.add("hello");
            expect(window.alert).toHaveBeenCalledWith("Argument must be a number!");
        });
        it('should take the second number from first', function() {
            calc.sub(10);
            calc.sub(2);
            expect(calc.value).toBe(8);
        });
        it('sshould muliply the two numbers', function() {
            calc.mul(10);
            calc.mul(2);
            expect(calc.value).toBe(20);
        });
        it('should divide the first number by the second', function() {
            calc.div(10);
            calc.div(2);
            expect(calc.value).toBe(5);
        });
        
    });
});