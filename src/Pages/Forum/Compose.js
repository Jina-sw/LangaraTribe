import React from 'react';
import Nav from '../../Components/Nav/Nav'
import './Forum.css'

function Compose(props) {
    async function submit() {
        const title = document.getElementsByName('title')[0].value.trim();
        const content = document.getElementsByName('content')[0].value.trim();

        if(title === "") {
            return alert("Please enter title.")
        } else if(content === ""){
            return alert("Please enter content.")
        }

        const data = { title: title, content: content};
    }
    return (
        <div>
            <Nav />
            <div className='contnr'>
                <div className='btnCont'>
                    <button> Publish </button>
                </div>
                <div className='title_Forum'>
                    <input type='text' placeholder=' Title' className='Title' name='title'/>
                </div>
                <div className='textArea'>
                    <textarea placeholder=' Share your Story' className='TextArea' name='content'></textarea>
                </div>
            </div>
            
        </div>
    )
}

export default Compose;