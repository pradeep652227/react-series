/* eslint-disable react/prop-types */
export default function Button(props) {
  function convertBtnText() {
    return (
      "Convert " +
      (props.swap ? props.fromCurr.toUpperCase() : props.toCurr.toUpperCase()) +
      " to " +
      (props.swap ? props.toCurr.toUpperCase() : props.fromCurr.toUpperCase())
    );
  }
  let btn_style = { fontSize: "1.3em", padding: "10px 50px" };
  if (props.type === "swap") {
    btn_style["padding"] = "10px 40px";
    btn_style["margin"] = "0 0 -1.4em 0";
    btn_style["zIndex"] = "1";
  }

  return (
    // eslint-disable-next-line react/prop-types
    <button
      style={btn_style}
      className={props.classes}
      onClick={props.handleClick}
    >
      {props.type === "swap" ? props.children : convertBtnText()}
    </button>
  );
  //   {
  //     props.type === "swap"
  //       ? props.children
  //       : "Convert " +
  //         (props.swap
  //           ? props.fromCurr.toUpperCase()
  //           : props.toCurr.toUpperCase()) +
  //         " to " +
  //         (props.swap
  //           ? props.toCurr.toUpperCase()
  //           : props.fromCurr.toUpperCase());
  //   }
}
