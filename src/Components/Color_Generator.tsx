import { useState } from "react";

const Color_Generator = () => {
  const [generatedColor, setGeneratedColor] = useState("rgb(0,0,0)");
  const [colorsArray, setColorsArray] = useState<string[]>([]);
  const [display, setDisplay] = useState<boolean>(false);

  const handleEvent = () => {
    //Varibales to store rgb values
    const red = Math.round(Math.random() * 255);
    const green = Math.round(Math.random() * 255);
    const blue = Math.round(Math.random() * 255);

    setGeneratedColor(`rgb(${red},${green},${blue})`);
    setDisplay(true);

    setColorsArray((oldColors) => {
      return [...oldColors, generatedColor];
    });
  };

  const changeBackgroundAgain = (selectedColor: string) => {
    setGeneratedColor(selectedColor);
  };

  return (
    <div className="colorContainer" style={{ backgroundColor: generatedColor }}>
      <button onClick={handleEvent}>pick color</button>
      <p style={{ display: display ? "block" : "none" }}>
        You picked RGB : {generatedColor}
      </p>
      <ul style={{ display: display ? "flex" : "none" }}>
        {colorsArray.length &&
          colorsArray.map((currentColor, index) => {
            return (
              <li
                onClick={() => changeBackgroundAgain(currentColor)}
                style={{ backgroundColor: colorsArray[index] }}
                key={currentColor}>
                {currentColor}
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default Color_Generator;
