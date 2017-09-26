function fizzBuzz(number) {
   if(number % 3 == 0 && number % 5 == 0) {
       return ('If the number is divisible by 3 and 5, then return “FizzBuzz”')
   }
   else if (number % 3 == 0) {
       return ('If the number is divisible by 3, then return “Fizz”');
   }
   else if (number % 5 == 0) {
       return ('If the number is divisible by 5, then return “Buzz”');
   }
   else {
       return (number);
   }
};
