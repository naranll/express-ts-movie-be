// export default function DropDown({ className }: { className: string }) {
//   const baseClass = `hidden group-hover:block absolute w-full h-36 border-solid border-black rounded-lg border-2 bg-white`;
//   return <div className={baseClass}>Hello dropdown</div>;
// }

export default function DropDown() {
  const baseClass = `hidden group-hover:block absolute left-0 right-0 top-[54px] w-full h-36 border-solid rounded-lg border-2 border-white bg-white z-50 container`;
  return <div className={baseClass}>Hello dropdown</div>;
}
