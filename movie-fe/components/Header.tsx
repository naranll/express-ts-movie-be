// import axios from "axios";

export default function Header(): JSX.Element {
    const buttons: Array<string> = [
        "MOVIES", "CATEGORY"
    ]

    function clickHandler(): void {
        const filtersth = async () => {
            const res = await fetch(`http://localhost:7100/btns?${`ji`}`);
            const newres = await res.json();
            console.log(newres);
        }

        filtersth();
    }

    return (<div className="w-full h-8 border-solid border-2 bg-red-400">
        <form>
            <input type="search" />
            {buttons.map((button: string, i: number) =>
                // console.log(button);
                <button type="button" key={i} onClick={clickHandler} className="border-solid border-2 border-black text-white">{button}</button>
            )}
        </form>
    </div>)
}