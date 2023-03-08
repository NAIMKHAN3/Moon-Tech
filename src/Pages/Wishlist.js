import React from 'react';
import ProductCard from '../componets/ProductCard';
import { useProducts } from '../ProductContex/Contex';

const Wishlist = () => {
    const { state: { products, loading, error, wishlist } } = useProducts();

    let content;

    if (loading) {
        content = <p className='text-center text-3xl'>Loading.....</p>
    }
    if (error) {
        content = <p>Somthing went wrong.</p>
    }
    if (!loading && !error && wishlist.length === 0) {
        content = <p>Product is not found</p>
    }
    if (!loading && !error && wishlist.length) {
        content = wishlist.map(product => <ProductCard key={product._id} product={product}></ProductCard>)
    }
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-7xl gap-14 mx-auto my-10'>
            {content}
        </div>
    );
};

export default Wishlist;