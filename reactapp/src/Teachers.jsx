import React from "react";

export default class Teachers extends React.Component {
    state = {
        teachers: []
    }

  render() {
    return(
      <div style={{marginLeft: "20px"}}>
        {JSON.stringify(this.state.teachers)}
      </div>
    )
  }

  componentDidMount() {
    //TODO callout for teachers data
    fetch("http://localhost:3333/teachers")
    .then(console.log)
    .catch(console.warn)
    .finally(()=>{
        console.log("Fetch done")
    })
  }
}