import React, { useState } from "react";

/*Deliverables
The button should say "OFF" when it is first displayed
When the button is clicked, it should say "ON"
When the button is clicked again, it should say "OFF"
etc
*/

function Toggle() {
  let [ isOn, setIsOn ] = useState(false)

  //the click leads to handleClick where:
  // setIsOn(isOn) is telling React, its internal state should update to !isOn (false). Since the initial value is false, the end result is true
  function handleClick() {
    setIsOn((isOn) => !isOn)
  }
  return (
    <button onClick={handleClick}>{isOn ? "ON" : "OFF"}</button>
  );
}

export default Toggle;
