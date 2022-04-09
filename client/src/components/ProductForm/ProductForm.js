import {useState} from "react";

const ProductForm = props => {
    // desestructuramos las props
    const {onSubmitProperty, initialTitle, initialPrice, initialDescription, formTitle} = props;
    // mantener el control de lo que se escribe a través del gancho useState
    const [title, setTitle] = useState(initialTitle);
    const [price, setPrice] = useState(initialPrice);
    const [description, setDescription] = useState(initialDescription);
    //gestor cuando se envía el formulario
    const onSubmitHandler = event => {
        //evitar el comportamiento por defecto de submit
        event.preventDefault();
        // Invocamos una función que maneja tanto la creación como la actualización. La diferencia entre ambos casos,
        // es manejado por una propiedad.
        onSubmitProperty({title, price, description});
    }
    //onChange para actualizar title, price y description
    return (
        <form onSubmit={onSubmitHandler}>
            <h1>{formTitle}</h1>
            <p>
                <label>Title: </label>
                <input type="text" name="title" value={title}
                       onChange = {event => setTitle(event.target.value)} />
            </p>
            <p>
                <label>Price: </label>
                <input type="number" name="number" step="2" value={price}
                       onChange={event => setPrice(Number(event.target.value))} />
            </p>
            <p>
                <label>Description: </label>
                <input type="text" name="description" value={description}
                       onChange = {event => setDescription(event.target.value)} />
            </p>
            <input type="submit" value="Create" />
        </form>
    )
}

export default ProductForm;
