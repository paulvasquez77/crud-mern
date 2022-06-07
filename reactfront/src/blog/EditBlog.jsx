import axios from 'axios';
import {useState, useEffect} from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const URI = 'http://localhost:8000/blogs/'

function CompEditBlog() {
    const [titulo, setTitulo] = useState('');
    const [contenido, setContenido] = useState('');
    const navigate = useNavigate();
    const {id} = useParams()

    const update = async (e) =>{
        e.preventDefault()
        await axios.put(URI+id, {
            titulo:titulo,
            contenido:contenido
        })
        navigate('/')
    }

    useEffect( () => {
        getBlogById()
    },[])

    const getBlogById = async() =>{
        const res = await axios.get(URI+id)
        setTitulo(res.data.titulo)
        setContenido(res.data.contenido)
    }

    return(
        <div>
            <h1>EDITAR POST</h1>
            <form onSubmit={update}>
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
                <button type="submit" className='btn btn-primary'>ACTUALIZAR</button>
            </form>
        </div>
    );
}

export default CompEditBlog;