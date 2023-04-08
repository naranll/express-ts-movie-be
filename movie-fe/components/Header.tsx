import DropDown from "./DropDown";
import SearchIcon from "@/assets/SearchIcon";

export default function Header(): JSX.Element {
  function clickHandler(): void {
    const filtersth = async () => {
      const res = await fetch(`http://localhost:7100/btns?${`ji`}`);
      const newres = await res.json();
      console.log(newres);
    };
    filtersth();
  }

  const buttonStyle = "static hover:text-black hover:bg-white group";

  return (
    <>
      <div className="w-full m-0 h-14 border-solid border-2 bg-red flex justify-between items-center text-white p-4">
        <picture>
          <img
            src="https://images.fandango.com/cms/assets/2d5a3340-be84-11ed-9d20-83ee649e98bd--rt25-logo-mainnav-161x50.svg"
            alt="logo"
            className="h-8"
          />
        </picture>

        <form className={`flex items-center gap-2 h-9 p-3 bg-black opacity-40 border-solid border-2 border-white rounded-3xl`}>
          <span>
            <SearchIcon/>
          </span>
          <input type="search" placeholder="Search movies, TV, actors, more..." className={`w-96 bg-black opacity-40`} />
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
