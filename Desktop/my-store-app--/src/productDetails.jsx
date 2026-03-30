import React from 'react'
import {useState, useEffect} from 'react'


const productDetails = () => {

    const {id} = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [id]);

    if(!product) return <div>Loading details.... </div>
  return (
    <div>productDetails</div>
  )
}

export default productDetails