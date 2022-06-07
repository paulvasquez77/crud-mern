import axios from 'axios';
import {useState} from 'react';
import { useNavigate } from 'react-router-dom';

const URI = 'http://localhost:8000/blogs/'

function CompCreateBlog(){

    const [titulo, setTitulo] = useState('');
    const [contenido, setContenido] = useState('');
    const navigate = useNavigate();

    const store = async (e) => {
        e.preventDefault()
        await axios.post(URI, {titulo:titulo, contenido:contenido})
        navigate('/')
    }

    return(
        <div>
            <h1>CREAR NUEVO POST</h1>
            <form onSubmit={store}>
                <div className='mb-2'>
                    <label className='form-label'>titulo</label>
                    <input type="text"
                    value={titulo}
                    onChange={(e) => setTitulo(e.target.value)}
                    className='form-control text-justify'
                    />
                </div>
                <div className='mb-2'>
                    <label className='form-label'>contenido</label>
                    <textarea type="text"
                    value={contenido}
                    onChange={(e) => setContenido(e.target.value)}
                    className='form-control'
                    />
                </div>
                <button type="submit" className='btn btn-primary'>CREAR</button>
            </form>
        </div>
    );
}



export default CompCreateBlog;