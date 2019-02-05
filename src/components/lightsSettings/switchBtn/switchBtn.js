import React from "react";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";


class SwitchBtn extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      lights: []
    }
    this.light = this.props.light;
  }
  loadLights() {
   fetch("http://116.203.42.55/lights")
   .then(res => res.json())
   .then((res) => {
     this.setState({
       lights: res.lightStates
     })
   })
 }
 componentDidMount() {
   window.addEventListener('load', this.loadLights());
}

toggleLights(i) {
  fetch("http://116.203.42.55/toggleLights" , {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    lightStates: i,
 })
})
  .then(res => res.json())
  .then((res) => {
    this.loadLights()
  })
}



render(){
  return (
      <FormControlLabel
        control={
          <Switch
            checked={this.state.lights[this.light] ? true : false }
            onClick={()=>this.toggleLights(this.light)}
          />
        }
        label={this.state.lights[this.light] ? "ON" : "OFF"}
      />
  );
}}

export default SwitchBtn;
