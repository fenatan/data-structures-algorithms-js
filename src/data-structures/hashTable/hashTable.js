class HashTable {
    constructor() {
        this._count = 0;
        this._hashTable = {};
    }

    _hashFunction(key) {
        if (typeof key === 'number')
            return key;
        let hash = 0;
        const R = 31;
        for (let i = 0; i < key.length; i++) {
            hash = (R * hash) + key.charCodeAt(i);
        }
        return hash;
    }

    _hashCode(key) {
        return this._hashFunction(key);
    }

    insert(key, value) {
        if (key !== null && value !== null) {
            const hashCode = this._hashCode(key);
            this._hashTable[hashCode] = value;
            this._count++;
            return true;
        }
        return false;
    }

    find(key) {
        if (key !== null) {
            const index = this._hashCode(key);
            const value = this._hashTable[index];
            return value === null ? undefined : value;
        }
        return undefined;
    }

    remove(key){
        const index = this.find(key);
        if(index !== undefined){
            delete this._hashTable[index];
            this._count--;
            return true;
        }
        return false;
    }

    size(){
        return this._count;
    }

    isEmpty(){
        return this.size() === 0;
    }

    clear(){
        this._hashTable = {};
        this._count = 0;
    }
}

module.exports = HashTable;
