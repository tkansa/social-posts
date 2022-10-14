import { Thought } from '../interfaces/thought';
import './Post.css'

interface Props {
    thought: Thought;
    onDelete:(thought: Thought) => void;
}

function Post({ thought, onDelete }: Props) {

    return (
      <div className="Post">
        <h1>{thought.title}</h1>
        <p>{thought.thought} <button onClick={() => onDelete(thought)}>x</button></p>
      </div>
    );
  }
  
  export default Post;
  