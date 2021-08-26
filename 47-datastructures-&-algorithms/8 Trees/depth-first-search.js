class Node {
    constructor(val, children=[]) {
        this.val = val;
        this.children = children;
    }

    find(val) {
        // Our stack is going to contain our
        // HTML element that's what this refers to.
        /**1st iteration
            stack: [{val: 'html', children: ['head', 'body']}]
            current: 

           2nd iteration we pop off last element
            stack: ['head', 'body']
            current: 'body'
            
           3rd iteration we pop off last element 
           ul is not li so we look at its children and 
           pop them to the stack.
            stack: ['head', 'ul'] -> ['head', 'li', 'li2']
            current: 'ul'

           4th iteration
            stack: ['head', 'li', 'li2'] -> ['head', 'li']
            current: 'li2'
           
           5th iteration
            stack: ['head', 'li'] -> ['head']
            current: 'li'
           
           li is found returns li Node.
        */

        let toVisitStack = [this];
    
        while (toVisitStack.length) {
          let current = toVisitStack.pop();
    
          if (current.val === val) 
            return current;
        
            // Checks if val matches if not push its children on the stack
            // to check if the children matches. 
          for (let child of current.children) 
            toVisitStack.push(child)
        }
    }
}

let html = new Node("html", [
    new Node("head", [new Node("title")]), 
    new Node("body", [new Node("ul", 
                        [new Node("li"), 
                        new Node("li2")])])]);

console.log(html.find('li'));