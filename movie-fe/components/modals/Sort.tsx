export default function Sort(): JSX.Element {
  function submitHandler(value: { preventDefault: () => void } | undefined) {
    // value.preventDefault();s
    try {
      //   const response = await fetch("");
      //   const sorted = await response.json();
      console.log(`sorted by ${value}`);
    } catch (error) {
      console.log("error sorting");
    }
  }

  return (
    <div className="w-[100px] h-[100px]">
      <form onSubmit={(e) => submitHandler(e)}>
        <select name="sortby">
          <option value="alphabet">By alphabet</option>
          <option value="date">By release date</option>
          <option value="review">By review</option>
        </select>
      </form>
    </div>
  );
}
