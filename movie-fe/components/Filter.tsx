import { useState } from "react";
import Arrow from "../assets/Arrow";
import Sort from "./modals/Sort";

export default function Filter(): JSX.Element {
  const [showModal, setShowModal] = useState(false);

  const clickHandler = () => {
    console.log("clicked filter");
    setShowModal(true);
  };

  const filerButtonStyle =
    "flex gap-[5px] items-center justify-center py-1 px-4 my-3 border-2 border-solid border-[#bcbdbe] rounded-full hover:border-black";
  return (
    <>
      <div className="flex gap-3">
        <div className={filerButtonStyle} onClick={clickHandler}>
          SORT <Arrow />{" "}
        </div>
        <div className={filerButtonStyle} onClick={clickHandler}>
          GENRE <Arrow />
        </div>
        <div className={filerButtonStyle} onClick={clickHandler}>
          RATING <Arrow />
        </div>
        <div className={filerButtonStyle} onClick={clickHandler}>
          AUDIENCE SCORE <Arrow />
        </div>
        <div className={filerButtonStyle}>TOMATOMETER</div>
      </div>
      {showModal && <Sort />}
    </>
  );
}
