import React from 'react'
import { CiHeart } from "react-icons/ci";
import './Like.css';
import { FcLike } from "react-icons/fc";
import { FcLikePlaceholder } from "react-icons/fc";

interface LikeProps {
  // Define props here
  onClick: () => void;
}

const Like = ({onClick: LikeProps}:LikeProps) => {
  const [like, setLike] = React.useState(false);
  const handleLike = () => {
    setLike(!like);
   }
  return (
    <button className='like-btn' onClick={handleLike}>
      {
        like  ?<FcLike size={100}/> :<FcLikePlaceholder size={100}/>
      }
    </button> 
  )
}

export default Like