import React, { Component } from 'react';
import strftime from 'strftime'
import $ from 'jquery'
import './ClockPanel.css'

class ClockText extends Component {
  clockFrame = 0
  moveIntervalSec = 5
  moveIntervalID = 0
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    this.updateClockState();
    this.updatePosition();
    this.moveIntervalID = setInterval(() => this.updatePosition(), this.moveIntervalSec * 1000);
  }
  componentWillUnmount() {
    cancelAnimationFrame(this.clockFrame);
    clearInterval(this.moveIntervalID);
  }
  updateClockState() {
    this.setState(this.getClockState);
    this.clockFrame = requestAnimationFrame(() => this.updateClockState());
  }
  updatePosition() {
    var myH = $(this.refs.self).height();
    var myW = $(this.refs.self).width();

    var vpH = $(this.refs.self.parentNode).height();
    var vpW = $(this.refs.self.parentNode).width();

    var maxY = vpH - myH;
    var maxX = vpW - myW;

    this.setState({
      alpha: 0
    }, () => setTimeout(() => this.setState({
      x: Math.random() * maxX,
      y: Math.random() * maxY,
      alpha: 1
    }), 500));
  }
  getClockState() {
    var now = new Date();
    return {
      dateString: strftime('%A, %d %B, %Y', now),
      timeString: strftime('%H:%M', now)
    };
  }
  render() {
    return (
      <span className="ClockText" ref="self" style={{
        left: this.state.x,
        top: this.state.y,
        opacity: this.state.alpha
      }}>
        <span className="TimeText">{ this.state.timeString }</span>
        <br />
        <span className="DateText">{ this.state.dateString }</span>
      </span>
    )
  }
}

class ClockPanel extends Component {
  render() {
    return (
      <div className="ClockPanel">
        <ClockText />
      </div>
    );
  }
}

export default ClockPanel
