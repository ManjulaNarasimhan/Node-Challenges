function fibonacci(n) {
    var a = 1, b = 0, temp;
    if(n==0) return 0;
    if(n <= 2) return 1;
    while (n > 0){
      temp = a;
      a = a + b;
      b = temp;
      n--;
    }
  
    return b;
};
console.log(fibonacci(3));
