import { React, useState } from 'react';
import { Link } from 'react-router-dom'
import Nav from '../../Components/Nav/Nav'
import './Forum.css'
import axios from 'axios'
import { useEffect } from 'react';

function Compose(props) {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    useEffect(() => {
        axios.get('http://localhost:5000/read')
        .then((response)=>{
            console.log(response)
        })
    }, [])
    
    const addToDB = () => {
        axios.post('http://localhost:5000/insert', {
            title: title, 
            content: content 
        });
    }


    // async function submit() {
    //     const title = document.getElementsByName('title')[0].value.trim();
    //     const content = document.getElementsByName('content')[0].value.trim();

    //     if(title === "") {
    //         return alert("Please enter title.")
    //     } else if(content === ""){
    //         return alert("Please enter content.")
    //     }

    //     const data = { title: title, content: content};
    // }
    return (
        <div>
            <Nav />
            <div className='contnr'>
                <div className='btnCont'>
                    <button onClick={addToDB}><Link to='/'>Publish</Link></button>
                </div>
                
                <div className='title_Forum'>
                    <input type='text' placeholder=' Title' className='Title' name='title' onChange={(e) => {setTitle(e.target.value)}}/>
                </div>
                <div className='textArea'>
                    <textarea placeholder=' Share your Story' className='TextArea' name='content' onChange={(e) => {setContent(e.target.value)}}></textarea>
                </div>
            </div>
            
        </div>
    )
}

export default Compose;