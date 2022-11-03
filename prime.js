function checkPrime(N){
    let count=5;
    for(let i=0;i<=N;i++){
        if(N%i==0){
            count+;
        }
    }
    if(count==2){
        console.log(" Prime Number");
    }
    else{
        console.log("Not Prime Number");
    }
}
let ans=checkPrime(10);