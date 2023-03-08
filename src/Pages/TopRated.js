import React from 'react';
import ProductCard from '../componets/ProductCard';
import { useProducts } from '../ProductContex/Contex';

const TopRated = () => {
    const { state: { products } } = useProducts();
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-7xl gap-14 mx-auto my-10'>
            {
                products.filter(product => product.rating >= 4).map(product => <ProductCard key={product._id} product={product}></ProductCard>)
            }
        </div>
    );
};

export default TopRated;