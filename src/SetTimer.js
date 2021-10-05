import * as React from "react";
import { Input } from "baseui/input";
import { Button } from "baseui/button";

/*export default function MyCustomeField({
  initialValue= 30,
  placeholder= 'Enter Timer in Minutes...'
}){
  const [value, setValue] = React.useState(initialValue);
  return (
    <div><Input
      placeholder={placeholder}
      value={value}
      onChange={e => setValue(e.target.value)}
      clearOnEscape />
      <Button onClick={() => setValue(value)}>Set Timer</Button></div>
  )
};
*/
export default class SetTimer extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      value: 'Set Time in Minutes..',
    };
  }

  handleChange = (event) => {
    this.setState({
      value: event.target.value
    });
  };

 handleClick = () => {
    this.setState({
      value:30
    });
  };

  render() {
    return (
      <div>
        <Input
          value={this.state.value}
          onChange={this.handleChange}
        />
        <Button onClick={this.handleClick}>Set Time in Minutes</Button>
      </div>
    );
  }
}
