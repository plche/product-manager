import axios from "axios";
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import DeleteButton from "../DeleteButton/DeleteButton";

const ProductList = () => {
    const [products, setProducts] = useState([]);

    // obtenemos todas los productos desde nuestra base de datos, solo una vez se ejecuta: al montarse el componente
    useEffect(() => {
        axios.get('http://localhost:8000/api/products/read/all')
            .then(response => {
                setProducts(response.data);
            })
            .catch(err => console.error(err));
    }, []);

    const removeFromDOM = productId => setProducts(products.filter(product => product._id !== productId));

    return (
        <div>
            <h1>All Products:</h1>
            {products.map((product, idx) => <p key={'product_' + idx}>
                    <Link to={'/' + product._id}>{product.title}
                    </Link> | <Link to={'/' + product._id + '/edit'}>Edit</Link> | <DeleteButton productId={product._id}
                        successCallback={() => removeFromDOM(product._id)} />
                </p>
            )}
        </div>
    );
}

export default ProductList;
