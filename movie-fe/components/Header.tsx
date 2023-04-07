// import axios from "axios";

import DropDown from "./DropDown";

export default function Header(): JSX.Element {
  function clickHandler(): void {
    const filtersth = async () => {
      const res = await fetch(`http://localhost:7100/btns?${`ji`}`);
      const newres = await res.json();
      console.log(newres);
    };

    filtersth();
  }

  const buttonStyle = "relative hover:text-black hover:bg-white group ";

  return (
    <>
      <div className="w-full h-14 border-solid border-2 bg-red-500 flex justify-between items-center text-white p-4">
        <picture>
          <img
            src="https://images.fandango.com/cms/assets/2d5a3340-be84-11ed-9d20-83ee649e98bd--rt25-logo-mainnav-161x50.svg"
            alt="logo"
            className="h-8"
          />
        </picture>

        <form>
          <input type="search" />
        </form>

        <div className={buttonStyle}>
          <button onClick={clickHandler}>MOVIES</button>
          <DropDown />
        </div>
        <div className={buttonStyle}>
          <button onClick={clickHandler}>TV SHOWS</button>
          <DropDown />
        </div>
        <div className={buttonStyle}>
          <button onClick={clickHandler}>MOVIE TRIVIA</button>
          <DropDown />
        </div>
        <div className={buttonStyle}>
          <button>NEWS</button>
        </div>
        <div className={buttonStyle}>
          <button>SHOWTIMES</button>
        </div>
      </div>
    </>
  );
}
// className = "border-solid border-2 border-black text-white"
