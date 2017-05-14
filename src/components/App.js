import React, { Component }from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = {
        ws: new WebSocket('ws://125.130.66.85:3100/ws/chat'),
        text: "" ,
        chatBox: ""
    }
  }
  handleChange(e) {
    this.setState({
      text: e.target.value
      });
  }
  handleSubmit(e){
    e.preventDefault();
    let {ws, text}=this.state;
    ws.send(text);
    this.setState({text: ''});
  }
  handleData(data) {
    console.log(data);
    let chatBox=this.state.chatBox;
    chatBox +='\n'+data;
    this.setState({chatBox});
  }
  setupWebsocket() {
    let ws = this.state.ws;
    ws.onopen = () => {
      console.log('Websocket connected');
    };
    ws.onmessage = (e) => {
      this.handleData(e.data);
    };
    ws.onclose = () => {
      console.log('Websocket disconnected');
      if (this.props.reconnect) {
        setTimeout(() => {
          this.setState({attempts: this.state.attempts++});
          this.setupWebsocket();
        }, 2000);
      }
    }
  }
  componentDidMount() {
    this.setupWebsocket();
  }
  componentWillUnmount() {
    let ws = this.state.ws;
    ws.close();
  }
  render(){
    return (
      <div>
        <h1><strong>Hi Hi SW</strong></h1>
        <h3></h3>
        <h3>Node.js express express-ws React, Webpack with ES6</h3>
        <div className="chatBox" overflow="visible">
         {this.state.chatBox.split('\n').map( (line) => {
            return (<span>{line}<br/></span>)
            }
          )}
        </div>
        <form name='chat' onSubmit={(e)=>this.handleSubmit(e)}>
          <input value={this.state.text} type='text' name='inbox' onChange={(e)=>this.handleChange(e)}/>
          <input type='submit' value='Enter'/>
        </form>
      </div>
    );
  }
}

export default App;
