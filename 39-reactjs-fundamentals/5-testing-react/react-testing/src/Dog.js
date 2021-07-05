import React from 'react';

const Dog = (({name, isAdopted}) => {
    return (
        <div className="Dog">
            <h1>{name}</h1>
            {isAdopted ? 
            (<p>{name} has been adopted!</p>) 
            : 
            (<button>Adopt me!</button>)
            }
        </div>
    )
});

export default Dog;