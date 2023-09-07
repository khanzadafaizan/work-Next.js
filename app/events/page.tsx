"use client";
export default function Events() {
  function onClick() {
    let colorBox = document.getElementById("color-box");
    if (colorBox) {
      colorBox.className = "bg-slate-300 w-full h-96";
    }
  }
  function onMouseEnter() {
    let colorBox = document.getElementById("color-box");
    if (colorBox) {
      colorBox.className = "bg-emerald-300 w-full h-96";
    }
  }
  function onMouseDown() {
    let colorBox = document.getElementById("color-box");
    if (colorBox) {
      colorBox.className = "bg-cyan-500 w-full h-96";
    }
  }
  function onDoubleClick() {
    let colorBox = document.getElementById("color-box");
    if (colorBox) {
      colorBox.className = "bg-blue-500 w-full h-96";
    }
  }
  function onFocus() {
    let colorBox = document.getElementById("color-box");
    if (colorBox) {
      colorBox.className = "bg-fuchsia-300 w-full h-96";
    }
  }

  return (
    <div className="min-h-full mx-auto">
      <div id="color-box" className="w-full h-96"></div>
      <button
        onClick={onClick}
        className="rounded-full bg-slate-300 px-6 py-6 mx-2 my-4"
      ></button>
      <button
        onMouseEnter={onMouseEnter}
        className="rounded-full bg-emerald-300 px-6 py-6 mx-2 my-4"
      ></button>
      <button
        onMouseDown={onMouseDown}
        className="rounded-full bg-cyan-500 px-6 py-6 mx-2 my-4"
      ></button>
      <button
        onDoubleClick={onDoubleClick}
        className="rounded-full bg-blue-500 px-6 py-6 mx-2 my-4"
      ></button>
      <button
        onFocus={onFocus}
        className="rounded-full bg-fuchsia-300 px-6 py-6 mx-2 my-4"
      ></button>
    </div>
  );
}
