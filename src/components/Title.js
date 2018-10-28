import React from 'react';


const Title = props => (
    <div>
        <h1>{props.title}</h1>
        <h2>{'Things to do: ' + props.count}</h2>
    </div>
    );

export default Title;