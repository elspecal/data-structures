const queue = {
  print() {
    console.log(this.collection);
  },
  enqueue(x) {
    return this.collection.push(x);
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

export const Queue = () => Object.create(queue, { collection: { value: [] } });
