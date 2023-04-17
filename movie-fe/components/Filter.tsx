export default function Filter():JSX.Element{
    return(<div className="border-solid border-2 border-black">
        <select>
            <optgroup>
                <option>SORT</option>
            </optgroup>
        </select>
        <select>
            <optgroup>
                <option>GENRE</option>
            </optgroup>
        </select>
        <select>
            <optgroup>
                <option>RATING</option>
            </optgroup>
        </select>
        <select>
            <optgroup>
                <option>AUDIENCE SCORE</option>
            </optgroup>
        </select>
        <select>
            <optgroup>
                <option>TOMATOMETER</option>
            </optgroup>
        </select>
    </div>)
}