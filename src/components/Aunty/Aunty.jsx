import React from 'react';
import Cousin from '../Cousin/Cousin';

const Aunty = ({ring}) => {
    return (
        <div>
            <h1>Aunty</h1>
            <section className='flex'>
                <Cousin>Abir</Cousin>
                <Cousin hasFriend={true} ring={ring}>Nabir</Cousin>
            </section>
        </div>
    );
};

export default Aunty;