export function add(numbers: string): number {  
    if (numbers === "") return 0;  
  
    const delimiterRegex = /^\/\/(.+)\n/;  
    let delimiter = /,|\n/; // default delimiters  
    let numString = numbers;  
  
    const match = delimiterRegex.exec(numbers);  
    if (match) {  
      delimiter = new RegExp(match[1]);  
      numString = numbers.slice(match[0].length);  
    }  
  
    const numArray = numString.split(delimiter).map(x => parseInt(x, 10));  
    
    const negatives = numArray.filter(x => x < 0);  
    
    if (negatives.length > 0) {  
      throw new Error(`negative numbers not allowed: ${negatives.join(', ')}`);  
    }  
  
    return numArray.reduce((acc, num) => acc + (isNaN(num) ? 0 : num), 0);  
  }