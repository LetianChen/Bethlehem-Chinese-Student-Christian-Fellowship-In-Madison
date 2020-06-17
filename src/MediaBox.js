import React from 'react';

function MediaBox(props) {
    //const srcUrl="https://docs.google.com/presentation/d/e/2PACX-1vS-Bh7C9yRZhu3MUgVMTBx34DG9aFzcSTqGWu6VMOjX1o_rz0nR4JeIeeq16oRiUw/embed?start=false&loop=false&delayms=3000"
    return (
      <iframe title={"media"+props.srcUrl} className="media" src={props.srcUrl} frameBorder="0" allowFullScreen={true} mozallowfullscreen="true" webkitallowfullscreen="true">
      </iframe>
    );
  }
  
export default MediaBox;