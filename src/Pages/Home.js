import React from 'react';
import ProductCard from '../componets/ProductCard';
import { useProducts } from '../ProductContex/Contex';

const Home = () => {
    const { state: { products } } = useProducts();
    console.log(products)
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-7xl gap-14 mx-auto my-10'>
            {products.map(product => <ProductCard key={product._id} product={product}></ProductCard>)}
        </div>
    );
};

export default Home;