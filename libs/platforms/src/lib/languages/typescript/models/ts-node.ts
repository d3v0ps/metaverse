export class TSNode {
  children: TSNode[] = [];

  constructor(public name: string, public type?: string) {}

  addChildren(name: string, type: string) {
    const node = new TSNode(name, type);
    this.children.push(node);
    return node;
  }

  getType() {
    return this.type;
  }

  getObject() {
    const map: Record<string, any> = {};
    map[this.name] = this.children.length
      ? this.children
          .map((child) => child.getObject())
          .reduce((pv, child) => {
            for (const key in child) {
              // eslint-disable-next-line no-prototype-builtins
              if (pv.hasOwnProperty(key) || key in pv) {
                Object.assign(pv[key] || {}, child[key] || {});
              } else {
                pv[key] = child[key];
              }
            }
            return pv;
          }, {})
      : this.type;
    return map;
  }
}
