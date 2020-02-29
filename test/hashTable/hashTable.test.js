const assert = require('assert');
const HashTable = require('../../src/data-structures/hashTable/hashTable');

describe('Hash Table tests:', function () {
    it('Should create a Hash Table', () => {
        const hashTable = new HashTable();

        assert.notEqual(hashTable, null);
    });

    it('should insert a element', () => {
        const hashTable = new HashTable();

        assert.ok(hashTable.insert('this', 100));
        assert.ok(hashTable.insert('hits', 99));
    });

    it('should find a element', () => {
        const hashTable = new HashTable();

        hashTable.insert('Iron man', 100);
        hashTable.insert('Thanos', 98);

        assert.deepEqual(hashTable.find('Thanos'), 98);
        assert.deepEqual(hashTable.find('Thanoss'), undefined);
    });

    it('should remove a element', () => {
        const hashTable = new HashTable();

        hashTable.insert('Iron man', 100);
        hashTable.insert('Thanos', 98);

        assert.ok(!hashTable.remove('Thanons'));
        assert.ok(hashTable.remove('Thanos'));
    });

    it('should return the size of the hash table', () => {
        const hashTable = new HashTable();

        hashTable.insert('Iron man', 100);
        hashTable.insert('Thanos', 98);

        assert.deepEqual(hashTable.size(), 2);
    });

    it('should return if the hash table is empty', () => {
        const hashTable = new HashTable();

        assert.ok(hashTable.isEmpty());

        hashTable.insert('Iron man', 100);
        hashTable.insert('Thanos', 98);

        assert.ok(!hashTable.isEmpty());
    });

    it('should clear the hash table', () => {
        const hashTable = new HashTable();
        
        hashTable.insert('Iron man', 100);
        hashTable.insert('Thanos', 98);

        hashTable.clear();

        assert.deepEqual(hashTable.size(), 0);
    });
});