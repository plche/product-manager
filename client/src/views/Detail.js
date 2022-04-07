import {useEffect, useState} from "react";
import axios from "axios";

const Detail = props => {
    const [product, setProduct] = useState({});

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
        </>
    );
}

export default Detail;
