import React from 'react'
import ReactDOM from 'react-dom'
import icon from './icon.svg'
import record from './record.svg'
import recording from './recording.svg'
import { Layers, Github, FilePlus } from 'react-feather';
const electron = window.require('electron');
const ipcRenderer = electron.ipcRenderer;
const remote = electron.remote;
const Spinner = require('react-spinkit');

class Automator extends React.Component {
  constructor(props) {
   super(props);

  this.state = {
    isRecording: false,
    cache: {},
  };

  this.toggleRecording = this.toggleRecording.bind(this);
  this.openGithub = this.openGithub.bind(this);

  ipcRenderer.on('cacheRecording', (event, arg) => {
    this.setState({
      cache: arg,
    });
    console.log(arg);
    ipcRenderer.send('beginPlaying', this.state.cache);
    console.log('SENT');
  });

 }

 toggleRecording(event) {
   this.setState({
     isRecording: !this.state.isRecording,
   })

   if (!this.state.isRecording) {
     ipcRenderer.send('beginRecording', {});
   }
   else {
     ipcRenderer.send('stopRecording', {});
   }
 }

 openGithub() {
   window.require('electron').shell.openExternal("https://www.github.com/tburnam");
 }

 loadRecordButton() {
   if (this.state.isRecording) {
     return(
       <span id="recordingSpan">
         <img id="record" src={recording} alt="" onClick={this.toggleRecording}/>
         <Spinner name="line-scale-pulse-out-rapid" color="grey" fadeIn='quarter'/>
       </span>
     )
   }
   else {
     return(
       <img id="record" src={record} alt="" onClick={this.toggleRecording}/>
     )
   }
 }

 render() {
   const style = {
     fontFamily:"-apple-system, 'Helvetica Neue', sans-serif",
     fontWeight: 900,
     fontSize: 40,
     letterSpacing:'-.04em'
   }

   return (
     <div id='main'>
       <div id='titleArea'>
         <Layers color="white" size={24} />
         <span id="titleLabel">automator</span>
       </div>
       {this.loadRecordButton()}
       <div id="bottomIcons">
         <FilePlus id="fileIcon" color="white" size={16} />
         <Github id="githubIcon" color="white" size={16} onClick={this.openGithub}/>
       </div>
     </div>
   )
 }
}





ReactDOM.render(<Automator />,  document.getElementById('root'));


// <div id='buttons'>
//   <button id='startButton' type='button'>start</button>
//   <button id='finishButton' type='button'>finish</button>
// </div>
