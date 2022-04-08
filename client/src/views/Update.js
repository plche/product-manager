import {useEffect, useState} from "react";
import axios from "axios";

const Update = props => {
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState(0.00);
    const [description, setDescription] = useState('');

    useEffect(() => {
        axios.get('http://localhost:8000/api/products/read/' + props.match.params.id)
            .then(response => {
                setTitle(response.data.title);
                setPrice(response.data.price);
                setDescription(response.data.description);
            })
            .catch(err => console.error(err));
    }, []);

    const updateProduct = event => {
        event.preventDefault();
        axios.put('http://localhost:8000/api/products/update/' + props.match.params.id, {title, price, description})
            .then(response => {
                console.log(response);
                props.history.push('/');
            })
            .catch(err => console.log(err));
    }

    return (
        <form onSubmit={updateProduct}>
            <h1>Update a Product</h1>
            <p>
                <label>Title: </label>
                <input type="text" name="title" value={title}
                       onChange={event => setTitle(event.target.value)} />
            </p>
            <p>
                <label>Price: </label>
                <input type="number" name="price" step="2" value={price}
                       onChange={event => setPrice(Number(event.target.value))} />
            </p>
            <p>
                <label>Description: </label>
                <input type="text" name="description" value={description}
                       onChange={event => setDescription(event.target.value)} />
            </p>
            <input type="submit" value="Update" />
        </form>
    )
}

export default Update;
