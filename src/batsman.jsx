import { useState } from "react";

export default function BatsMan() {
  const [Rans, SetRans] = useState(0);
  const [Four, SetFour] = useState(0);
  const [Six, SetSix] = useState(0);

  const [singels, SetSingels] = useState(0);

  const handelSingels = () => {
    const updateRuns = Rans + 1;
    const updateSingals = singels + 1;
    SetRans(updateRuns);
    SetSingels(updateSingals);
  };

  const handelFour = () => {
    const updateRuns = Rans + 4;
    const updateFour = Four + 1;
    SetRans(updateRuns);
    SetFour(updateFour);
  };

  const handelSix = () => {
    const updateRans = Rans + 6;
    const updateSix = Six + 1;
    SetRans(updateRans);
    SetSix(updateSix);
  };

  return (
    <div>
      <h3>Player: Bnagladesh Batsman</h3>
      <p>Singels:{singels}</p>
      <p>Four :{Four}</p>
      <p>Six : {Six}</p>

      {Rans > 50 && <p>Your Score 50</p>}
      {Rans > 100 && <p>your csore Handed</p>}
      <h1>Score: {Rans}</h1>
      <button onClick={handelSingels}>Singels</button>
      <button onClick={handelFour}>Four</button>
      <button onClick={handelSix}>Six</button>
    </div>
  );
}
