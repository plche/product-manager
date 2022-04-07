import {useState} from "react";
import axios from "axios";

const ProductForm = () => {
    // mantener el control de lo que se escribe a través del gancho useState
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState(0.00);
    const [description, setDescription] = useState('');
    //gestor cuando se envía el formulario
    const onSubmitHandler = e => {
        //evitar el comportamiento por defecto de submit
        e.preventDefault();
        //hacer una petición POST para crear un nuevo producto
        axios.post('http://localhost:8000/api/products/create', {title, price, description})
            .then(response => console.log(response))
            .catch(err => console.log(err))
    }
    //onChange para actualizar title, price y description
    return (
        <form onSubmit={onSubmitHandler}>
            <h1>Product Manager</h1>
            <p>
                <label>Title: </label>
                <input type="text" onChange = {e => setTitle(e.target.value)} value={title} />
            </p>
            <p>
                <label>Price: </label>
                <input type="number" step="2" onChange={e => setPrice(Number(e.target.value))} value={price} />
            </p>
            <p>
                <label>Description: </label>
                <input type="text" onChange = {e => setDescription(e.target.value)} value={description} />
            </p>
            <input type="submit" value="Create" />
        </form>
    )
}

export default ProductForm;
