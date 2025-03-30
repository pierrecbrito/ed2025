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

export const verifySequence = (sequence) => {
    const sequenceArray = sequence.split('');
    const possibleChars = "()[]".split('');
    const closingChars = ")]".split('');
    const stack = new Stack(Math.ceil(sequence.length / 2));
    let result = true;

    sequenceArray.forEach(c => {
        if (!possibleChars.includes(c)) result = false;

        if (closingChars.includes(c)) {
            let top = stack.pop()
            if((c == ']' && top != '[') || (c == ')' && top != '(')) {
                result = false;
            }
        } else {
            stack.push(c);
        } 
    });

    return result;
}