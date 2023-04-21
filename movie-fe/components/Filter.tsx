import Arrow from "./icons/Arrow";

export default function Filter():JSX.Element{

    const filerButtonStyle = "rounded-full flex gap-[5px] items-center justify-center py-1 px-4 my-3 border-solid border-2 border-black";
    return(<div className="flex gap-2 border-solid border-2 border-black">
        <div className={filerButtonStyle}>SORT <Arrow/> </div>
        <div className={filerButtonStyle}>GENRE <Arrow/></div>
        <div className={filerButtonStyle}>RATING <Arrow/></div>
        <div className={filerButtonStyle}>AUDIENCE SCORE <Arrow/></div>
        <div className={filerButtonStyle}>TOMATOMETER</div>
    </div>)
}