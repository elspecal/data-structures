const set = {
  has(elem) {
    return this.collection.includes(elem);
  },
  values() {
    return this.collection;
  },
  add(elem) {
    if (this.has(elem)) return false;
    this.collection.push(elem);
    return true;
  },
  remove(elem) {
    if(!has(elem)) return false;
    this.collection.splice(this.collection.indexOf(elem), 1);
    return true;
  },
  size() {
    return this.collection.length;
  },
  union(other) {
    const newSet = mySet();

    this.collection.map(elem => newSet.add(elem));
    other.collection.map(elem => newSet.add(elem));

    return newSet;
  },
  intersection(other) {
    const newSet = mySet();

    this.collection.filter(elem => other.has(elem)).map(elem => newSet.add(elem));

    return newSet;
  },
  difference(other) {
    const newSet = mySet();

    this.collection.filter(elem => !other.has(elem)).map(elem => newSet.add(elem));
    other.collection.filter(elem => !this.has(elem)).map(elem => newSet.add(elem));

    return newSet;
  },
  subset(other) {
    return this.collection.every(elem => other.has(elem));
  }
}

export const mySet = () => Object.create(set, { collection: { value: [] } });

