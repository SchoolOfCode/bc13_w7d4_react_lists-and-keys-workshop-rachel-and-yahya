import React from 'react';

import './index.css';

function Post(props) {
  return <article>{props.title}{props.date}{props.author}{props.text}</article>;

}



export default Post;
