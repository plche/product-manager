const ProductList = props => (
    <div>
        <h1>All Products:</h1>
        {props.products.map((product, idx) => <p key={'product_' + idx}><a href={product._id}>{product.title}</a></p>)}
    </div>
);

export default ProductList;
