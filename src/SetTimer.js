import * as React from "react";
import { Input } from "baseui/input";

export default (setTime) => {
  const [time, setValue] = React.useState('');
  return (
    <Input
      time={time}
      onChange={e => setValue(e.target.time)}
      placeholder="Set the notificaiton timer"
      clearOnEscape
    />
  )
};