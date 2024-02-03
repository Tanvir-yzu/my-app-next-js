import React from 'react';

const Dynamic = ({params,searchParams}) => {
    console.log(params,searchParams);
    return (
        <div>
            <h1>dynamic route:{params.id}</h1>
            <h2>Serach by : {searchParams.category},price: {searchParams.price}</h2>
        </div>
    );
};

export default Dynamic;