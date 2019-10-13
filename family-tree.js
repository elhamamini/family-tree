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
        return function memberFinder(node = this) {
          if (!node) {
            return undefined;
          }
          if (node.value === member) {
            return node;
          }
          if (!node.children) {
            return undefined;
          }
          node.children.forEach(child => {
            const nodeFound = memberFinder(child);
            if (nodeFound) {
              return nodeFound;
            }
          });
          return undefined;
        };
        
      }
      log() {
        const arr = [];
        let generation = 1;
        let str = "";
    
        const firstObj = new FamilyTree(this.value);
    
        const arrMaker = (obj = firstObj) => {
          Object.values(obj).forEach(val => {
            if (Array.isArray(val)) {
              generation += 1;
              val.forEach(v => {
                arrMaker(v);
              });
            } else {
              for (let i = 0; i < generation; i++) {
                str += "--";
              }
              str += val;
              arr.push(str);
            }
          });
          return arr;
        };
        return [arrMaker().join(",")];
        // console.log("**", this.children[1].children);
        // return `-- ${this.value}`;
      }
    }
    
    // tree traversal - depth first search
    
 
}

module.exports = FamilyTree;
