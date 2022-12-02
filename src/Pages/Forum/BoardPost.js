import { React, useState } from 'react'
import axios from 'axios'
import BoardList from './BoardList';



function BoardPost(props) {


    const [isOpen, setOpen] = useState(false);
    const [isEdit, setEdit] = useState(false);
    const [isalert, setalert] = useState("");
    const [editedContent, setEdited] = useState({
        id: props.id,
        title: "",
        content: ""
    });

    const url = `http://localhost:5000/posts/update`;


    function setOpenChange() {

        setOpen(!isOpen)
    }

    function editPostHandler() {
        setEdit(!isEdit);
    }

    const response = async () => {
        try {
            await axios.post(url, {
                id: props.id,
                title: editedContent.title,
                content: editedContent.content
            }).then(res => setalert(res.data))
        } catch (e) {
            setalert("Something went wrong!");
        }
    };

    function editPostSubmit(e) {
        e.preventDefault();
        response().then(alert(isalert));
        setEdit(!isEdit);
        setEdited("");
    };

    const editInput = (
        <form className='editInputBox'>
            <h2 className='inputBoxHeader'>Edit Post</h2>
            <div className='editBoxContainer'>
                <label className='editBoxLabel'>Title:</label>
                <input id='editBoxInputs' type="text" onChange={(e) => setEdited({ ...editedContent, title: e.target.value })}></input>
            </div>
            <div className='editBoxContainer'>
                <label className='editBoxLabel'>Content:</label>
                <input id='editBoxContent' type="text" onChange={(e) => setEdited({ ...editedContent, content: e.target.value })}></input>
            </div>
            <button type='submit' onClick={editPostSubmit}>Submit</button>
        </form>
    );

    return (
        <div className="postCtn">
            <button className="boardPost" onClick={setOpenChange} >{props.title}</button>
            {isEdit ? editInput : (isOpen ? <div className="contentBox"><div className="content">{props.content}</div></div> : "")}
            <button className='boardPost' onClick={editPostHandler} >Edit Post</button>
        </div>



    )
}

export default BoardPost;