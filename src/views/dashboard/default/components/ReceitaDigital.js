import * as React from "react";
import "../../../../assets/scss/card-receita-digital.scss";

const ReceitaDigital = () => {
  return (
    <div className="cardReceitaDigital">
      <div className="column">
        <div className="row">
          <p className="receitaDigital">
            Receita digital
          </p>
        </div>
        <div className="rowTwo">
          <img
            alt=""
            className="image2"
            src="https://static.overlay-tech.com/assets/8def5fcc-5578-414f-aed2-b3d6d0c83bbd.png"
          />
        </div>
      </div>
    </div>
  );
};

export default ReceitaDigital;