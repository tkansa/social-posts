import { useState } from 'react';
import { Thought } from '../interfaces/thought';
import Post from './Post';
import PostForm from './PostForm';
import './SocialPosts.css';

function SocialPosts() {

  const [ thoughts, setThoughts ] = useState<Thought[]>([
    { title: "React", thought: "Is kinda fun!"},
    { title: "JavaScript", thought: "Is cool!"},
    { title: "Today", thought: "Ends in 'y'!"},
  ]);

  const [ showForm, setShowForm ] = useState<boolean>(false);

  function handleAdd(thought: Thought){
    console.log("Inside handle Add");
    setThoughts(prevThoughts => [...prevThoughts, thought]);
  }

  function handleDelete(thought: Thought){
    let tempThoughts = thoughts;
    tempThoughts = tempThoughts.filter(t => t.title !== thought.title);
    setThoughts(tempThoughts);
  }

  function handleClose() {
    setShowForm(false);
  }
  return (
    <div className="SocialPosts">
        <h1>My Thoughts</h1>
        <div>
          {showForm ? 
            <PostForm onSubmit={handleAdd} onClose={handleClose}></PostForm> :
            <button onClick={() => setShowForm(true)}>New Thought</button>
          }
        </div>
        
        <div className='post-container'>
          {thoughts.map((thought, i) => 
            <Post key={i} thought={thought} onDelete={() => handleDelete(thought)}></Post>)}
        </div>
    </div>
  );
}

export default SocialPosts;