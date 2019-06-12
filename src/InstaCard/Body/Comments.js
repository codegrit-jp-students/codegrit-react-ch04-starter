import React from 'react';
import Comment from './Comment';
import { tsPropertySignature } from '@babel/types';
import { cpus } from 'os';

const Comments = ({data}) => {
  const {
    imageUrl,
    commentOne,
    commentTwo
  } = data
  const props = {
    imageUrl,
    commentOne,
    commentTwo,
  }
  return(
    <ul className="comments">
      <Comment comment={commentOne}/>
      <Comment comment={commentTwo}/>
    </ul>
  )};

export default Comments;