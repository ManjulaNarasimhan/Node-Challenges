function parseFirstInt(str){
    var regex = str.match(/[+\-0-9]+/g);
    // if(regex !== null){
    //     regex = parseInt(regex[0]);        
    // } else{
    //     regex = Number.isNaN(str);
    // }
   console.log(parseInt(regex));
  return regex;
}
//parseFirstInt('No. 10');

function hello(str){
    if(str){
        return "Hello " + str + "!";
    }else{
        return "Hello World!";
    }
} 
//console.log(hello("Nala"));
function add(){

}
add()