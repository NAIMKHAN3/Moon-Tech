import React from 'react';
import ProductCard from '../componets/ProductCard';
import { useProducts } from '../ProductContex/Contex';

const Card = () => {
    const { state: { loading, error, card } } = useProducts()
    console.log(card)
    let content;

    if (loading) {
        content = <p className='text-center text-3xl'>Loading.....</p>
    }
    if (error) {
        content = <p>Somthing went wrong.</p>
    }
    if (!loading && !error && card.length === 0) {
        content = <p>Product is not found</p>
    }
    if (!loading && !error && card.length) {
        content = card.map(product => <ProductCard key={product._id} product={product}></ProductCard>)
    }
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-7xl gap-14 mx-auto my-10'>
            {content}
        </div>
    );
};

export default Card;