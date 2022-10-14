import { FormEvent, useState } from 'react';
import { Thought } from '../interfaces/thought';
import './PostForm.css';

interface Props {
  onSubmit: (thought: Thought) => void;
  onClose: () => void;
}

function PostForm({ onSubmit, onClose }: Props) {
  const [title, setTitle] = useState<string>("");
  const [thought, setThought] = useState<string>("");

  function handleSubmit(event: FormEvent) {
    console.log("Inside post Form handle submit");
    event.preventDefault();
    onSubmit({ title: title, thought: thought }); 
    onClose();
  }
  return (
    <div className="PostForm">
      <form onSubmit={handleSubmit}>
        <button onClick={onClose}>Close</button>
        <label htmlFor="title">Title</label>
        <input type="text" id="title" onChange={(e) => setTitle(e.target.value)} />
        <label htmlFor="thought">Thought</label>
        <input type="thought" id="thought" onChange={(e) => setThought(e.target.value)} />
        <button type='submit'>Submit</button>
      </form>

    </div>
  );
}

export default PostForm;
