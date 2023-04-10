import React from 'react';
import Special from '../Special/Special';

const MySelf = ({ring}) => {
    return (
        <div>
            <h1>My Self</h1>
            <section>
                <Special ring={ring}></Special>
            </section>
        </div>
    );
};

export default MySelf;