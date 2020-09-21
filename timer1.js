const removeDuplicates = function(arr){
  const result = [];
  result.push(arr[0]);
  for (let i = 1; i < arr.length; i++){
    let r = false;
    for (let n = 0; n < result.length; n++){
      if (arr[i] === result[n]){
        r = true;
      }
    }
    if (!r){
      result.push(arr[i]);
    }
  }
  return result;
}

const input = process.argv;
const t = [];
for (let i = 2; i < input.length; i++){
  if ((!isNaN(input[i]))&&(input[i]>=0)){
    t.push(input[i]);
  }
}

const timer = removeDuplicates(t.sort());

for(let n = 0; n < timer.length; n++) { 
  setTimeout(()=>{
  process.stdout.write('\x07');
  }, timer[n]*1000);
}

