import Arrow from "../assets/Arrow";

export default function Filter():JSX.Element{

    const filerButtonStyle = "flex gap-[5px] items-center justify-center py-1 px-4 my-3 border-2 border-solid border-[#bcbdbe] rounded-full hover:border-black";
    return(<div className="flex gap-3">
        <div className={filerButtonStyle}>SORT <Arrow/> </div>
        <div className={filerButtonStyle}>GENRE <Arrow/></div>
        <div className={filerButtonStyle}>RATING <Arrow/></div>
        <div className={filerButtonStyle}>AUDIENCE SCORE <Arrow/></div>
        <div className={filerButtonStyle}>TOMATOMETER</div>
    </div>)
}