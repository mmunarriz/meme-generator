import React, { useState } from "react";
import "../App.css";
import html2canvas from "html2canvas";

function Memes() {
  const [linea1, setLinea1] = useState("");
  const [imagen, setImagen] = useState("1");

  const onChangeLinea1 = function (e) {
    setLinea1(e.target.value);
  };

  const onChangeImagen = function (e) {
    setImagen(e.target.value);
  };

  const onClickExportar = function () {
    alert("exportar");

    html2canvas(document.querySelector("#meme")).then((canvas) => {
      var img = canvas.toDataURL("image/png");
      var link = document.createElement("a");
      link.download = "meme.jpg";
      link.href = img;
      link.click();
    });
  };

  return (
    <div className="App">
      <select onChange={onChangeImagen}>
        <option value="1"> img 1 </option>
        <option value="2"> img 2 </option> <option value="3"> img 3 </option>
        <option value="4"> img 4 </option> <option value="5"> img 5 </option>
      </select>
      <br />
      <input
        onChange={onChangeLinea1}
        type="text"
        placeholder="Escribir algo"
      />
      <br />
      <button onClick={onClickExportar}> Exportar </button>
      <div className="meme" id="meme">
        <span> {linea1} </span>
        <img src={"/img/" + imagen + ".jpg"} alt="img" />
      </div>
    </div>
  );
}

export default Memes;
