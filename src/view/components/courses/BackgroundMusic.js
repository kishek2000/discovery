import React from "react";

export class BackgroundMusic extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playing: true,
    };
    this.playSong = this.playSong.bind(this);
    this.pauseSong = this.pauseSong.bind(this);
    this.src = this.props.src;
    this.stopSong = this.props.stopSong;
  }

  playSong() {
    console.log("play");
    const player = document.getElementById(`${this.props.class}BgMusic`);
    this.setState({ playing: true });
    player.play();
  }

  pauseSong() {
    console.log("pause");
    const player = document.getElementById(`${this.props.class}BgMusic`);
    this.setState({ playing: false });
    player.pause();
    player.src = this.props.src;
  }

  render() {
    console.log("background: ", this.props.stopSong);
    if (this.props.stopSong === true) {
      this.pauseSong();
      return <div></div>;
    } else {
      return (
        <audio
          autoPlay="autoplay"
          controls="controls"
          loop="loop"
          id={`${this.props.class}BgMusic`}
        >
          <source src={this.props.src} type="audio/mp3" />
          Play/Pause
        </audio>
      );
    }
  }
}
