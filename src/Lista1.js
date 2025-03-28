import Stack from "./Stack.js";

export const reverseText = (text) => {
    const chars = text.split('');
    const stack = new Stack(text.length);
    const reversedChars = []; 
    
    chars.forEach(c => stack.push(c));
    while (!stack.isEmpty()) {
        reversedChars.push(stack.pop()); 
    }

    return reversedChars.join(''); 
}