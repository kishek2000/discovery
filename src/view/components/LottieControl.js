import React from "react";
import Lottie from "react-lottie";
import * as animationData from "../../static/lottie/data.json";

export default class LottieControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isPaused: true };
  }

  render() {
    const defaultOptions = {
      loop: true,
      autoplay: false,
      hover: true,
      animationData: animationData.default,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
      },
    };

    return (
      <div
        onMouseEnter={() => this.setState({ isPaused: false })}
        onMouseLeave={() => this.setState({ isPaused: true })}
      >
        <Lottie
          options={defaultOptions}
          height={400}
          width={400}
          isStopped={false}
          isPaused={this.state.isPaused}
        />
      </div>
    );
  }
}
