import LinkedList from './LinkedList.js';
import Node from './Node.js';
import Person from './Person.js';

class PersonLinkedList extends LinkedList {
    add(name, age) {
        const person = new Person(name, age);
        this.append(person);
    }

    getSortedByName() {
        if (this.isEmpty() || !this.head.hasNext()) {
            return this.clone();
        }

        const people = this.toArray();
        people.sort((a, b) => a.name.localeCompare(b.name));
        
        return this.createListFromArray(people);
    }

    getSortedByAge() {
        if (this.isEmpty() || !this.head.hasNext()) {
            return this.clone();
        }

        const people = this.toArray();
        people.sort((a, b) => a.age - b.age);
        
        return this.createListFromArray(people);
    }

    toArray() {
        const array = [];
        let current = this.head;
        
        while (current !== undefined) {
            array.push(current.data);
            current = current.getNext();
        }
        
        return array;
    }

    createListFromArray(array) {
        const newList = new PersonLinkedList();
        for (const person of array) {
            newList.append(person);
        }
        return newList;
    }

    clone() {
        return this.createListFromArray(this.toArray());
    }

    toString() {
        if (this.isEmpty()) {
            return '[]';
        }
        
        let result = '[';
        let current = this.head;
        
        while (current !== undefined) {
            result += current.data.toString();
            if (current.hasNext()) {
                result += ', ';
            }
            current = current.getNext();
        }
        
        result += ']';
        return result;
    }
}

export default PersonLinkedList;