Calculator = function() {
    this.value = 0;
};

Calculator.prototype.add = function(number) {
    if(typeof(number) == "number") {
        if(this.value == 0) {
            this.value = number;
        } else {
            this.value += number;
        }
    } else {
        alert("Argument must be a number!");
    }
};

Calculator.prototype.sub = function(number) {
    if(typeof(number) == "number") {
        if(this.value == 0) {
            this.value = number;
        } else {
            this.value -= number;
        }
    } else {
        alert("Argument must be a number!");
    }
};

Calculator.prototype.mul = function(number) {
    if(typeof(number) == "number") {
        if(this.value == 0) {
            this.value = number;
        } else {
            this.value *= number;
        }
    } else {
        alert("Argument must be a number!");
    }
};

Calculator.prototype.div = function(number) {
    if(typeof(number) == "number") {
        if(this.value == 0) {
            this.value = number;
        } else {
            this.value /= number;
        }
    } else {
        alert("Argument must be a number!");
    }
};


    