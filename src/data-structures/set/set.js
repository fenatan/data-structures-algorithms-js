class Set {
    constructor() {
        this._set = {};
        this._count = 0;
    }

    insert(element) {
        if (this.find(element))
            return false;
        this._set[element] = element;
        this._count++;
        return true;
    }

    erase(element) {
        if (!this.find(element))
            return false;
        delete this._set[element];
        this._count--;
        return true;
    }

    values() {
        const items = [];
        for(let i in this._set){
            items.push(this._set[i]);
        }
        return items;
    }

    find(element) {
        return element in this._set;
    }

    size() {
        return this._count;
    }

    isEmpty() {
        return this.size() === 0;
    }

    clear() {
        this._set = {};
        this._count = 0;
    }
}

module.exports = Set;