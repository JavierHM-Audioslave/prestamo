import React, {Fragment} from 'react';

export default function Header(props) {     {/* En vez de hacer referencia a "props", podria aplicar directamente destructuring. Quedaría "export default function Header({titulo}) {" */}

    return(
        <Fragment>
            <h1>{props.titulo}</h1>
        </Fragment>
        
    ) 
}