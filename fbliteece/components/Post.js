import React, { Component } from 'react';

  class Post extends Component {
   render() {
     const { item } = this.item;
     const { like , content } = item;

     return (
       <div className="fbpostitem">
         <p>{content}</p>
         <p>Liked by {interaction}</p>
         <a class="btn like">Like</button>
       </div>
     );
   }
 }

  export default Post; 