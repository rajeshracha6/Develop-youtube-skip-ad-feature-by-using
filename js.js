// setTimeout(() => {
//   console.log("Hello, World!");
// }, 1000);

let k=setInterval(() => {
  count++;
  console.log("Hello, Rajesh");
  if(count==11){
    console.log("set interval is cleared")
    clearInterval(k);
  }
}, 1000,count=0);

