function LongestWord(sen) { 

    // code goes here  
  
    arr = sen.match(/[a-z]+/gi);
  
    sorted = arr.sort(function(a, b) {
      return b.length - a.length;
    });
    return sorted[0];
  
  }
     
  // keep this function call here 
  console.log(LongestWord(readline()));