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

           2nd iteration we shift off first element
            stack: ['head', 'body']
            current: 'head'
            
           3rd iteration we shift off first element 
            stack: ['body', 'title'] -> ['title', 'ul']
            current: 'body'

           4th iteration
            stack: ['title', 'ul'] -> ['ul']
            current: 'title'
           
           5th iteration
            stack: ['ul'] -> ['li', 'li2']
            current: 'ul'

           6th iteration
            stack: ['li', 'li2'] -> ['li2']
            current: 'li'
           
           li is found returns li Node.
        */

        let toVisitQueue = [this];
    
        while (toVisitQueue.length) {
          let current = toVisitQueue.shift();
          console.log(`CURRENT: ${current.val}`);
    
          if (current.val === val) 
            return current;
          
            // Checks if val matches if not push its children on the stack
            // to check if the children matches. 
          for (let child of current.children) 
            toVisitQueue.push(child)
        }
    }
}

let html = new Node("html", [
    new Node("head", [new Node("title")]), 
    new Node("body", [new Node("ul", 
                        [new Node("li"), 
                        new Node("li2")])])]);

console.log(html.find('li'));