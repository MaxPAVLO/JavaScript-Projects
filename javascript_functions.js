function range(num, start) {
    if (start == undefined) {start = 0} else{var t = num; num = start; start = t};
    
    let result = [];
  
    for (let i = start; i <= num - 1; i++) {
      result.push(i);
    };
  
    return result;
};
  
function sum(list) {  
  let result = 0;

  for (let i of list) {
    result += i;
  }

  return list;
};