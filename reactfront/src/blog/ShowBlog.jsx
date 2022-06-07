import axios from 'axios';
import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

const URI = 'http://localhost:8000/blogs/'

function CompShowBlog(){
    const [blogs, setBlog] = useState([])
    useEffect( () =>{
        getBlogs()
    },[])

//procedimiento para mostrar todos los blogs
    const getBlogs = async () =>{
        const res = await axios.get(URI)
        setBlog(res.data)
    }   

//procedimiento para eliminar todos un blog
    const deleteBlog = async (id) =>{
        await axios.delete(`${URI}${id}`)
        getBlogs()
    }


    return(
        <div className='container'>
            <div className="row">
                <div className="col">
                    <Link to={'/create'} className='btn btn-primary mt-2 mb-2'>crear</Link>
                    <table className="table">
                        <thead className="table-primary">
                            <tr>
                                <th>Titulo</th>
                                <th>Contenido</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {blogs.map((blog) => (
                                <tr key={blog.id}>
                                    <td>{blog.titulo}</td>
                                    <td>{blog.contenido}</td>
                                    <td>
                                        <Link to={`/edit/${blog.id}`} className='btn btn-primary'>editar</Link>
                                        <button onClick={() => deleteBlog(blog.id)} className='btn btn-danger'>Eliminar</button>
                                    </td>

                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}



export default CompShowBlog;