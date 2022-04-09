import ProductForm from "../components/ProductForm/ProductForm";
import ProductList from "../components/ProductList/ProductList";
import {useEffect, useState} from "react";
import axios from "axios";

const Main = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    // obtenemos todas los productos desde nuestra base de datos, solo una vez se ejecuta: al montarse el componente
    useEffect(() => {
        axios.get('http://localhost:8000/api/products/read/all')
            .then(response => {
                setProducts(response.data);
                setLoading(false);
            })
            .catch(err => console.error(err));
    }, []);

    const removeFromDOM = productId => setProducts(products.filter(product => product._id !== productId));

    const createProduct = product => {
        //hacer una petición POST para crear un nuevo producto y agregarlo a la lista de productos
        axios.post('http://localhost:8000/api/products/create', product)
            .then(response => {
                setLoading(true);
                setProducts([...products, response.data]);
                setLoading(false);
            })
            .catch(err => console.log(err))
    }

    return (
        <>
            <ProductForm onSubmitProperty={createProduct} initialTitle='' initialPrice={0.00} initialDescription=''
                         formTitle='Product Manager' />
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
