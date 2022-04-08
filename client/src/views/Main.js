import ProductForm from "../components/ProductForm/ProductForm";
import ProductList from "../components/ProductList/ProductList";
import {useEffect, useState} from "react";
import axios from "axios";

const Main = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get('http://localhost:8000/api/products/read/all')
            .then(response => {
                setProducts(response.data);
                setLoading(false);
            })
            .catch(err => console.error(err));
    }, []);

    const removeFromDOM = productId => setProducts(products.filter(product => product._id !== productId));

    return (
        <>
            <ProductForm />
            <br />
            <hr />
            {
                loading ? <h2>Loading...</h2> : (products.length !== 0) && <ProductList products={products}
                                                                                        removeFromDOM={removeFromDOM} />
            }
        </>
    );
}

export default Main;
