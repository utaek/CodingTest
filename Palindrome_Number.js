/**
 * @param {number} x
 * @return {boolean}
 */
let isPalindrome = (x) => {
  let bool = false;
  
  if(x < 0){
      return false;
  }
  
  x += '';
  
  if(x.length == 1){
      return true;
  }

  for(let i = 0; i < Math.floor(x.length/2); i++){    
      if(x[i] != x[(x.length - 1) - i]){
          bool = false;
          break;
      }
      
      bool = true;
  }
  
  return bool;
};