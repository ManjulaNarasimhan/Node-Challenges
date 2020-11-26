function product(str){
    var strArr = str.split(' ').map(Number);
    let prodArr = [];
    var prod = 1;
    for(var i=0; i<strArr.length;i++){    
        strArr.map((currVal, index)=> {
            if(i !== index){
                prod *= currVal;
            }
        });
        prodArr.push(prod);
        prod = 1;
    };
    return prodArr.join(' ');
};

//console.log(product("10 3 5 6 2"))

//console.log(frankenSplice([1, 2, 3], [4, 5, 6], 2));
function frankenSplice(arr1, arr2, n) {
    // It's alive. It's alive!
    let localArr = arr2.slice();
    localArr.splice(n, 0, ...arr1);
    return localArr;
  }

  function titleCase(str) {
    var convertToArray = str.toLowerCase().split(" ");
    var result = convertToArray.map(function(val) {
      return val.replace(val.charAt(0), val.charAt(0).toUpperCase());
    });
    return result.join(" ");
  }
  
 // console.log(titleCaseReg("I'm a little tea pot"));

  function titleCaseReg(str) {
      let a = /(^|\s)\S/;
      console.log(a);
    return str.toLowerCase().replace(/(^|\s)\S/g, L => L.toUpperCase());
  }

  let quoteSample = "The quick brown fox jumps over the lazy dog.";
  let alphabetRegex = /[a-z\s]/gi; 
  let result = quoteSample.match(alphabetRegex);
  console.log(result.join(''));







