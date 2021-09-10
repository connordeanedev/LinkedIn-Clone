import React, {useEffect, useState} from 'react'
import "./Feed.css";
import CreateIcon from "@material-ui/icons/Create";
import ImageIcon from "@material-ui/icons/Image";
import InputOption from './InputOption';
import SubscriptionIcon from "@material-ui/icons/Subscriptions";
import EventNoteIcon from "@material-ui/icons/EventNote";
import CalendarViewDayIcon from "@material-ui/icons/CalendarViewDay";
import Post from './Post';
import { db } from './firebase';
import {onSnapshot, doc, collection, setDoc, addDoc} from "firebase/firestore"






function Feed() {

const [input, setInput] = useState("");
const[posts, setPosts] = useState([]);

useEffect(() =>{
    const newPost = onSnapshot(collection(db, 'posts'), (snapshot) =>{
    setPosts(snapshot.docs.map(doc => ({...doc.data(), id: doc.id})));
    });
    return newPost
}, []);



const sendPost = e =>{
    e.preventDefault(); 

    addDoc(collection(db, 'posts',), {
        name: "Connor",
        description: "Front End Developer",
        message: input,
        photoUrl:'',
    }).then(postRef => console.log("Document written with ID", postRef.id));

setInput("");    
   
}

    return (
        <div className='feed'>
            <div className="feed__inputContainer">
                <div className="feed__input">
                    <CreateIcon />
                    <form>
                        <input value={input} onChange={e => setInput(e.target.value)} type="text" />
                        <button onClick={sendPost} type='submit'>Send</button>
                    </form>
                </div>
                <div className="feed__inputOptions">
                    <InputOption Icon={ImageIcon} title='Photo' 
                    color='#70B5F9'
                    />
                    <InputOption Icon={SubscriptionIcon} title='Video' 
                    color='#E7A33E'
                    />
                    <InputOption Icon={EventNoteIcon} title='Event' 
                    color='#C0CBCD'
                    />
                    <InputOption Icon={CalendarViewDayIcon} title='Write Article' 
                    color='#7FC15E'
                    />
                </div> 
            </div>
            {posts.map(({name, message, description}) =>(
                <Post name={name}
                description={description}
                message={message}
                />
            ))}

            
            {/* <Post name="Connor Deane"
            description="Front End Developer"
            message="This is a test post, hello hello hello"/> */}
        </div>
    )
}

export default Feed
