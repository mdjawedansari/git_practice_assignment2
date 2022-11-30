function pallindrome(str){
  let bag="";
  for(let i=str.length-1;i>=0;i--){
    bag+=str[i];
  }
  if(bag==str){
    console.log(str,"is pallindrome");
  }else{
    console.log(str,"not a pallindrome");
  }
}
pallindrome("masai");