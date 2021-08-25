const recursion = (i=1) => {
    if(i > 5) return;
    switch(i) {
        case 1: 
            console.log('hello')
            break;
        case 2:
            console.log('world')
            break;
        case 3:
            console.log('i')
            break;
        case 4:
            console.log('love')
            break;
        case 5:
            console.log('coding.')
            break;
        default:
            break;
    }
    recursion(i + 1);
}

recursion();