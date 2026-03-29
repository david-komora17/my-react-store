import {useCart} from '../cartContext';

const ProductCard = ({product}) => {
    const {addToCart} = useCart();

    return (
        <div className = "border p-4 rounded-lg shadow-md hover: shadow-xl transition-shadow">
            <img src = {product.image} alt = {product.title} className ="h-48 w-full object-contain mb-4"/>
            <h3 className = "font-bold text-lg truncate">{product.title}</h3>
            <p className = "text-gray-600">${product.price}</p>
            <button onClick= {() => addToCart(product)} className='mt-4 bg-blue-600 text-white px-4 py-2 rounded hover: bg-blue-700 w-full'>
                Add to Cart
            </button>
        </div>
    );
};

export default ProductCard