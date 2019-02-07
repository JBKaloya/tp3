import React, { Component } from 'react';

class User extends Component {
   render() {
        const name  = this.props.names;

      return (
       <div className="fbnamelist">
         <a class="btn" href='#'>{name}</a>
       </div>

      );
   }
 }

  export default ButtonProfil; 