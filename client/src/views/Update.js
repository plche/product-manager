import {useEffect, useState} from "react";
import axios from "axios";
import ProductForm from "../components/ProductForm/ProductForm";
import DeleteButton from "../components/DeleteButton/DeleteButton";

const Update = props => {
    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(true);

    // buscar el producto a actualizar
    useEffect(() => {
        axios.get('http://localhost:8000/api/products/read/' + props.match.params.id)
            .then(response => {
                setProduct(response.data);
                setLoading(false);
            })
            .catch(err => console.error(err));
    }, []);

    const updateProduct = product => {
        //hacer una petición PUT para actualizar un producto específico
        axios.put('http://localhost:8000/api/products/update/' + props.match.params.id, product)
            .then(response => {
                console.log(response);
            })
            .catch(err => console.log(err));
    }

    return (
        loading ? <h2>Loading...</h2> : <>
            <ProductForm onSubmitProperty={updateProduct} initialTitle={product.title}
                         initialPrice={product.price} initialDescription={product.description}
                         formTitle="Update a Product" />
            <DeleteButton productId={product._id} successCallback={() => props.history.push('/')} />
        </>
    )
}

export default Update;
