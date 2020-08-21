import React, { useState, useEffect } from "react";

import axios from "axios";

import ashFront from "../../assets/images/ashFront.png";

import "../Ash/styles.scss";
import FindTip from "../FindTip";

function Ash() {
  const [showTip, setShowTip] = useState(false);
  const [pokemon, setPokemon] = useState([]);
  const [id, setId] = useState(1);

  const handleShowTip = () => {
    console.log(showTip);
    setShowTip(true);
  };

  const handleHideTip = () => {
    console.log(showTip);
    setShowTip(false);
  };

  const handleSearch = () => {
    console.log("buscando pokemon");
    // let number = Math.floor(Math.random() * 100) + 1;
    // setId(number);
    // axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`).then((data) => {
    //   setPokemon(data);
    // });
  };

  return (
    <div id='container'>
      <div className='FindTip'>{showTip && <FindTip />}</div>
      <img
        id='ash'
        src={ashFront}
        alt='ash'
        onMouseOver={handleShowTip}
        onMouseOut={handleHideTip}
        onClick={handleSearch}
      />
    </div>
  );
}

export default Ash;
