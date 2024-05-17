import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const NewPost = () => {

    const [posts, setPosts] = useState([]);
    const [post , setPost] = useState({ marca: '', modelo: '', placa: ''});
    const navigate = useNavigate();

    useEffect(() => {
        const rawPosts = JSON.parse(localStorage.getItem('posts'));
        setPosts(rawPosts)
        console.log(posts)
    },[])

    const handleOnClick = () => {
        posts.push(post)
        localStorage.setItem('posts', JSON.stringify(posts));
        alert('Post publicado!')
        navigate('/');
    }

    return (
        <div className='ingresarNuevoAuto'>
            <h1>New Post</h1>
           <form>
                <label htmlFor="marca">Marca</label>
                <br />
                <input type="text" name="marca" id="marca" 
                    value={post.marca} onChange={e => setPost({...post, marca: e.target.value})}/>
                <br />
                <label htmlFor="modelo">modelo</label>
                <br />
                <input type="text" name="modelo" id="modelo" 
                    value={post.modelo} onChange={e => setPost({...post, modelo: e.target.value})}/>
                <br />
                <label htmlFor="placa">placa</label>
                <br />
                <input type="text" name="placa" id="placa" 
                    value={post.placa} onChange={e => setPost({...post, placa: e.target.value})}/>
                <br />
                <br />
                <button onClick={handleOnClick}>Publicar</button>
            </form>
        </div>
    );
}

export default NewPost;