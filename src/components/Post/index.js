import React from 'react';

import './index.css';

function Post(props) {
  return <article>{props.title}{props.date}</article>;
}

export default Post;
