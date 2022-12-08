  let function checkPrime(num){
  let count=0;
  for(let i=1;i<num;i++){
    if(num%i){
    count++;
   }
  }
 if (count==2){
 return true;
 }
return false;
}
console.log(checkPrime(13));
