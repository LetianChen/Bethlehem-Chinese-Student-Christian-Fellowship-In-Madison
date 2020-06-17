import React from 'react';
import Votd from './Votd';
import CardGrid from './CardGrid';
import CoverMsg from './CoverMsg';

function HomePage(props) {
  return (
    <div className="HomePage">
      <CoverMsg />
      <Votd />
      <CardGrid onClickHandler={props.onClickHandler} />
    </div>
  );
}

export default HomePage;
