const prioQueue = {
  print() {
    console.log(this.collection);
  },
  enqueue(x) {
    if (this.isEmpty()) return this.collection.push(x);

    const [_, prioX] = x;
    const idx = this.collection.findIndex(([_, prioY]) => prioX < prioY);

    if (-1 === idx) return this.collection.push(x);

    this.collection.splice(idx, 0, x);

    return this.collection.length;
  },
  dequeue() {
    return this.collection.shift();
  },
  front() {
    return this.collection[0];
  },
  size() {
    return this.collection.length;
  },
  isEmpty() {
    return !this.collection.length;
  }
}

export const PQueue = () => Object.create(prioQueue, { collection: { value: [] } });
