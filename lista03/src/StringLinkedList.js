import LinkedList from './LinkedList.js';

class StringLinkedList {
    constructor(str = '') {
        this.list = new LinkedList();
        for (let char of str) {
            this.list.append(char);
        }
    }

    substring(A, B) {
        const result = new StringLinkedList();
        
        if (A < 0 || B < 0 || A > B || A >= this.list.length()) {
            return result;
        }
        
        let current = this.list.head;
        let index = 0;
        
        while (current !== undefined && index < A) {
            current = current.getNext();
            index++;
        }
        
        while (current !== undefined && index <= B) {
            result.list.append(current.data);
            current = current.getNext();
            index++;
        }
        
        return result;
    }

    toString() {
        return this.list.toString();
    }

    length() {
        return this.list.length();
    }

    isEmpty() {
        return this.list.isEmpty();
    }
}

export default StringLinkedList;