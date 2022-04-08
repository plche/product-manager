import axios from "axios";

const ProductList = props => {
    const deleteProduct = (productId) => {
        axios.delete('http://localhost:8000/api/products/delete/' + productId)
            .then(response => {
                props.removeFromDOM(productId);
                console.log(response);
            })
            .catch(err => console.log(err));
    }

    return (
        <div>
            <h1>All Products:</h1>
            {props.products.map((product, idx) => <p key={'product_' + idx}>
                <a href={product._id}>
                    {product.title}
                </a> | <button onClick={event => deleteProduct(product._id)}>
                Delete
            </button>
            </p>)}
        </div>
    );
}

export default ProductList;
