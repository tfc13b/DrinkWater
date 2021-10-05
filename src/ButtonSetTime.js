import * as React from "react";
import { Button } from "baseui/button";
//import SetTimer from './SetTimer.js';
import setTime from "./SetTimer.js";

export default () => {
  return (
    <Button onClick={() => React.useState.setTime} >Save</Button>
  );
}