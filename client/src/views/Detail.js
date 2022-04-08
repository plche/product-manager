import {useEffect, useState} from "react";
import axios from "axios";

const Detail = props => {
    const [product, setProduct] = useState({});

    const deleteProduct = (productId) => {
        axios.delete('http://localhost:8000/api/products/delete/' + productId)
            .then(response => {
                console.log(response);
                props.history.push('/');
            })
            .catch(err => console.log(err));
    }

    useEffect(() => {
        axios.get('http://localhost:8000/api/products/read/' + props.match.params.id)
            .then(response => setProduct(response.data))
            .catch(err => console.error(err));
    }, []);

    return (
        <>
            <h2>{product.title}</h2>
            <p>Price: ${product.price}</p>
            <p>Description: {product.description}</p>
            <a href={'/' + product._id + '/edit'}>Edit</a> | <button onClick={event => deleteProduct(product._id)}>
                                                                 Delete
                                                             </button>
        </>
    );
}

export default Detail;
