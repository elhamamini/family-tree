class FamilyTree {
  constructor(value) {
    if (!value || typeof value !== "string") {
      throw "error";
    }
    this.value = value;
    this.children = [];
  }
  insert(value) {
    if (value) {
      this.children.push(new FamilyTree(value));
    }
  }
  familySize() {
    return this.children.length + 1;
  }
  findMember(member) {
    if ((this.value = member)) {
      return this;
    }
    this.children.forEach(child => {
      return child.findMember(member);
    });
    return undefined;
  }
  log() {
    const str = "--";
    let string = `${str} ${this.value} \n`;
    if (this.children) {
      const strFinder = (arr, adder) => {
        arr.forEach(child => {
          string += `--${str}${child.value} `;
        });
      };
    }

    // console.log("**", this.children[1].children);
    // return `-- ${this.value}`;
  }
}

// tree traversal - depth first search

module.exports = FamilyTree;
