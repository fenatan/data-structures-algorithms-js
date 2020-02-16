const assert = require('assert');
const Set = require('../../src/data-structures/set/set');

describe('Set tests', function() {
  it('Should create a set', () => {
    const set = new Set();

    assert.notEqual(set, null);
  });

  context('When insert a element in Set', () => {
    it('should insert a element', () => {
      const set = new Set();

      assert.ok(set.insert(5));
    });

    it('should not insert a repeated element', () => {
      const set = new Set();

      set.insert(5);

      assert.deepEqual(set.insert(5), false);
    });
  });

  context('When erase a element from the Set', () => {
    it('should erase a element if it exists', () => {
      const set = new Set();

      set.insert(5);

      assert.ok(set.erase(5));
    });

    it('should not erase a element if it not exists', () => {
      const set = new Set();

      set.insert(5);

      assert.deepEqual(set.erase(4), false);
    });
  });

  context('When search a element in the Set', () => {
    it('should find a element if it exists', () => {
      const set = new Set();

      set.insert(5);
      set.insert(4);

      assert.ok(set.find(5));
    });

    it('should not find a element if it not exists', () => {
      const set = new Set();

      set.insert(5);
      set.insert(4);

      assert.deepEqual(set.find(1), false);
    });
  });

  it('Should return the size of the Set', () => {
    const set = new Set();
    assert.deepEqual(set.size(), 0);

    set.insert(4);
    set.insert(4); // proposital insert
    set.insert(5);

    assert.deepEqual(set.size(), 2);
  });

  it('Should return if the Set is Empty', () => {
    const set = new Set();
    assert.ok(set.isEmpty());

    set.insert(4);
    set.insert(5);

    assert.ok(!set.isEmpty());
  });

  it('Should clear the Set', () => {
    const set = new Set();

    set.insert(5);
    set.insert(6);
    set.insert(7);

    set.erase(6);

    assert.ok(!set.isEmpty());
    set.clear();
    assert.ok(set.isEmpty());
  });

  it('Should return an array with all elements in the Set', () => {
    const set = new Set();

    set.insert(7);
    set.insert(5);
    set.insert(6);

    assert.deepEqual(set.values(), [5, 6, 7]);

    set.erase(6);
    set.insert(4);

    assert.deepEqual(set.values(), [4, 5, 7]);
  });
});
