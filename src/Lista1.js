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

export const decToBi = (dec) => {
    const stack = new Stack(25);

    while(dec != 1 && dec != 0) {
        stack.push(dec % 2);
        dec = Math.floor(dec / 2);
    }

    stack.push(dec);
    
    let binary = "";
    while (!stack.isEmpty()) {
        binary += stack.pop()
    }
    
    return binary;
}
