import { Layers, Github, FilePlus, Play } from 'react-feather'; // eslint-disable-line
import React from 'react';
import ReactDOM from 'react-dom';
import record from '../resources/Images/record.svg';
import recording from '../resources/Images/recording.svg';

const electron = window.require('electron'); // eslint-disable-line
const ipcRenderer = electron.ipcRenderer;
const Spinner = require('react-spinkit');

class Automator extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isRecording: false,
      cache: {},
      hasData: false,
    };

    this.toggleRecording = this.toggleRecording.bind(this);
    this.openGithub = this.openGithub.bind(this);
    this.startPlaying = this.startPlaying.bind(this);

    ipcRenderer.on('cacheRecording', (event, arg) => {
      this.setState({
        cache: arg,
        hasData: true,
      });
    });
  }

  startPlaying() {
    ipcRenderer.send('beginPlaying', this.state.cache);
  }

  toggleRecording(event) {
    this.setState({
      isRecording: !this.state.isRecording,
    });

    if (!this.state.isRecording) {
      ipcRenderer.send('beginRecording', {});
    } else {
      ipcRenderer.send('stopRecording', {});
    }
  }

  openGithub() {
    window.require('electron').shell.openExternal('https://github.com/tburnam/uitestautomator');
  }

  loadPlayButton() {
    if (this.state.hasData) {
      return (
        <div>
          <Play id="playButton" color="rgb(243, 255, 11)" size={22} onClick={this.startPlaying} />
        </div>
      );
    } else {
      return (
        <div />
      );
    }
  }

  loadRecordButton() {
    if (this.state.isRecording) {
      return (
        <span id="recordingSpan">
          <img id="record" src={recording} alt="" onClick={this.toggleRecording} />
          <Spinner name="line-scale-pulse-out-rapid" color="grey" fadeIn="quarter" />
        </span>
      );
    } else {
      return (
        <span id="recordingSpan">
          <img id="record" src={record} alt="" onClick={this.toggleRecording} />
          {this.loadPlayButton()}
        </span>
      );
    }
  }

  render() {
    return (
      <div id="main">
        <div id="titleArea">
          <Layers color="white" size={24} />
          <span id="titleLabel">automator</span>
        </div>
        {this.loadRecordButton()}
        <div id="bottomIcons">
          <FilePlus id="fileIcon" color="white" size={16} />
          <Github id="githubIcon" color="white" size={16} onClick={this.openGithub} />
        </div>
      </div>
    );
  }
}


ReactDOM.render(<Automator />, document.getElementById('root')); // eslint-disable-line


// <div id='buttons'>
//   <button id='startButton' type='button'>start</button>
//   <button id='finishButton' type='button'>finish</button>
// </div>
