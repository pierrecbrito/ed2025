import PersonLinkedList from '../src/PersonLinkedList';

describe('PersonLinkedList', () => {
    test('should add persons to the list', () => {
        const list = new PersonLinkedList();
        list.add('Alice', 30);
        list.add('Bob', 25);
        list.add('Charlie', 35);
        
        expect(list.length()).toBe(3);
    });
    
    test('should sort persons by name alphabetically', () => {
        const list = new PersonLinkedList();
        list.add('Charlie', 35);
        list.add('Alice', 30);
        list.add('Bob', 25);
        
        const sortedList = list.getSortedByName();
        
        expect(sortedList.length()).toBe(3);
        
        const array = sortedList.toArray();
        expect(array[0].name).toBe('Alice');
        expect(array[1].name).toBe('Bob');
        expect(array[2].name).toBe('Charlie');
    });
    
    test('should sort persons by age (ascending)', () => {
        const list = new PersonLinkedList();
        list.add('Charlie', 35);
        list.add('Alice', 30);
        list.add('Bob', 25);
        
        const sortedList = list.getSortedByAge();
        
        expect(sortedList.length()).toBe(3);
        
        const array = sortedList.toArray();
        expect(array[0].name).toBe('Bob');
        expect(array[1].name).toBe('Alice');
        expect(array[2].name).toBe('Charlie');
    });
    
    test('should handle empty list when sorting', () => {
        const list = new PersonLinkedList();
        
        const nameList = list.getSortedByName();
        const ageList = list.getSortedByAge();
        
        expect(nameList.length()).toBe(0);
        expect(ageList.length()).toBe(0);
    });
    
    test('should handle list with one person when sorting', () => {
        const list = new PersonLinkedList();
        list.add('Alice', 30);
        
        const nameList = list.getSortedByName();
        const ageList = list.getSortedByAge();
        
        expect(nameList.length()).toBe(1);
        expect(ageList.length()).toBe(1);
        
        expect(nameList.toArray()[0].name).toBe('Alice');
        expect(ageList.toArray()[0].age).toBe(30);
    });
    
    test('should return a new list when sorting', () => {
        const list = new PersonLinkedList();
        list.add('Charlie', 35);
        list.add('Alice', 30);
        
        const nameList = list.getSortedByName();
        
        // Original list should be unchanged
        const originalArray = list.toArray();
        expect(originalArray[0].name).toBe('Charlie');
        expect(originalArray[1].name).toBe('Alice');
        
        // New list should be sorted
        const sortedArray = nameList.toArray();
        expect(sortedArray[0].name).toBe('Alice');
        expect(sortedArray[1].name).toBe('Charlie');
    });
    
    test('toString should display the list properly', () => {
        const list = new PersonLinkedList();
        expect(list.toString()).toBe('[]');
        
        list.add('Alice', 30);
        expect(list.toString()).toBe('[Alice (30)]');
        
        list.add('Bob', 25);
        expect(list.toString()).toBe('[Alice (30), Bob (25)]');
    });
});