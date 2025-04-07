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

const verifyPrecedence = (op1, op2) => {
    const weightOperators = {
        "-": 1,
        "+": 1,
        "*": 2,
        "/": 2,
        "^": 3
    }

    return weightOperators[op1] >= weightOperators[op2];
}

export const shutingYard = (expression) => {
    const stack = new Stack(10);
    let out = "";

    const numbers = "0123456789abcdefghijklmnopqrstuvwxyz";
    const operators = "/*-+^";

    expression.split('').forEach(e => {
        if(numbers.includes(e)) out += e;
        if(operators.includes(e)) { 
            while (!stack.isEmpty() && stack.getTop() !== '(' && verifyPrecedence(stack.getTop(), e)) {
                out += stack.pop();
            }
            stack.push(e);
        }
        if(e == '(') stack.push(e);
        if(e == ')') {
            while (!stack.isEmpty() && stack.getTop() !== '(') {
                out += stack.pop();
            }
            if (!stack.isEmpty()) stack.pop();
        }
    })

    while (!stack.isEmpty()) {
        const top = stack.pop();
        if (top !== '(' && top !== ')') {
            out += top;
        }
    }

    return out;
}

export const removeDuplicates = (stack) => {
    const tempStack = new Stack(30);
    const allElements = new Stack(30);
    
    while (!stack.isEmpty()) {
        let element = stack.pop();
        allElements.push(element);
        
        let isDuplicate = false;
        const checkStack = new Stack(30);
        
        while (!tempStack.isEmpty()) {
            let tempElement = tempStack.pop();
            checkStack.push(tempElement);
            if (tempElement === element) {
                isDuplicate = true;
            }
        }
        
        while (!checkStack.isEmpty()) {
            tempStack.push(checkStack.pop());
        }
        
        if (!isDuplicate) {
            tempStack.push(element);
        }
    }
    
    const finalStack = new Stack(30);
    while (!allElements.isEmpty()) {
        let element = allElements.pop();
        const checkStack = new Stack(30);
        let shouldInclude = false;
        
        while (!tempStack.isEmpty()) {
            let tempElement = tempStack.pop();
            checkStack.push(tempElement);
            if (tempElement === element) {
                shouldInclude = true;
            }
        }
        
        // Restaurar tempStack
        while (!checkStack.isEmpty()) {
            tempStack.push(checkStack.pop());
        }
        
        if (shouldInclude) {
            finalStack.push(element);
            const removeStack = new Stack(30);
            while (!tempStack.isEmpty()) {
                let tempElement = tempStack.pop();
                if (tempElement !== element) {
                    removeStack.push(tempElement);
                }
            }
            while (!removeStack.isEmpty()) {
                tempStack.push(removeStack.pop());
            }
        }
    }
    
    return finalStack.toString();
}