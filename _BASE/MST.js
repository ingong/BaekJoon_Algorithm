class DisjointSet{
  constructor(n) {
    this.parent = Array.from({ length: n + 1}, (_, i) => i);
  }

  union(n1, n2) {
    const rootA = this.find(n1);
    const rootB = this.find(n2);
    if (rootA < rootB) this.parent[rootB] = rootA;
    else this.parent[rootA] = rootB;
  }

  find(node) {
    if (this.parent[node] === node) return node;
    this.parent[node] = this.find(this.parent[node]);
    return this.parent[node];
  }

  connected(n1, n2) {
    if (this.find(n1) != this.find(n2)) return false;
    else return true;
  }
}