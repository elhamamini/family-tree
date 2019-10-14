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
    if (!member) {
      return undefined;
    }
    memberFinder(this);
    function memberFinder(node) {
      if (!node) {
        return undefined;
      }
      if (node.value === member) {
        return node;
      }
      if (!node.children) {
        return undefined;
      }

      for (let i = 0; i < node.children.length; i++) {
        let nodeFound = memberFinder(node.children[i]);
        if (nodeFound) {
          return nodeFound;
        }
      }
    }
    return undefined;
  }
  log() {
    let counter = 1;
    let str = "--";
    let returnStr = "";

    return function myLog(node = this) {
      returnStr = counter * str + node.value;
      if (node.children) {
        for (const child of node.children) {
          return myLog(child);
        }
      }

      console.log(returnStr);
    }; // console.log("**", this.children[1].children);
    // return `-- ${this.value}`;
  }
}

// tree traversal - depth first search

module.exports = FamilyTree;
