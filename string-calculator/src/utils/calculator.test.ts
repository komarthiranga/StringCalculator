import { add } from './calculator';  

describe('String Calculator Tests', () => {  
  test('Empty string returns 0', () => {  
    expect(add("")).toBe(0);  
  });  

  test('Single number returns the number', () => {  
    expect(add("1")).toBe(1);  
    expect(add("5")).toBe(5);  
  });  

  test('Two numbers returns their sum', () => {  
    expect(add("1,2")).toBe(3);  
    expect(add("1,5")).toBe(6);  
  });  

  test('Handles new lines between numbers', () => {  
    expect(add("1\n2,3")).toBe(6);  
  });  

  test('Handles custom delimiters', () => {  
    expect(add("//;\n1;2")).toBe(3);  
    expect(add("//[;]\n1;2;3")).toBe(6); // Adjusted to the correct format  
    expect(add("//[***]\n1***2***3")).toBe(6); // Custom delimiter of ***  
  });  

  test('Throws exception for negative numbers', () => {  
    expect(() => add("1,-2")).toThrow("negative numbers not allowed: -2");  
    expect(() => add("1,-2,-3")).toThrow("negative numbers not allowed: -2, -3");  
  });  
});