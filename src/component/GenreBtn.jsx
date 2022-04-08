import React from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import styles from "./Style/GenreBtn.module.css";

const GenreBtnDD = () => {
  return (
    <div className={styles.DD}>
      <span>
        <ul>
          <li>Indian</li>
          <li>Romance</li>
          <li>Horror</li>
          <li>Docuseries</li>
          <li>US</li>
          <li>British</li>
          <li>European</li>
        </ul>
      </span>
      <span>
        <ul>
          <li>Bollywood</li>
          <li>Hollywood</li>
          <li>Anime</li>
          <li>Award Winning</li>
          <li>Action</li>
          <li>Dramas</li>
          <li>Comedy</li>
        </ul>
      </span>
      <span>
        <ul>
          <li>Sci-Fi & Fantasy</li>
          <li>Crime</li>
          <li>Kids</li>
          <li>Hindi</li>
          <li>Malyalam</li>
          <li>Fantasy</li>
          <li>Independent</li>
        </ul>
      </span>
    </div>
  );
};

const GenreBtn = () => {
  const [showDD, setShowDD] = React.useState(false);
  return (
    <div>
      <div className={styles.genreComp}>
        <button
          onClick={() => {
            setShowDD(!showDD);
          }}
          className={styles.btn}
        >
          Genres <ArrowDropDownIcon />
        </button>
        {showDD && <GenreBtnDD />}
      </div>
    </div>
  );
};

export default GenreBtn;
