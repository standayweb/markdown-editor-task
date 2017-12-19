// @flow
import React, { Component } from 'react';
import axios from 'axios';

type Props = {
  source: string,
};

type State = {
  output: string,
};

class Python extends Component<Props, State> {
  state = {
    output: '',
  };

  componentDidMount() {
    this.runPython(this.props.source);
  }

  componentWillReceiveProps(newProps: Props) {
    if (newProps.source !== this.props.source) {
      this.runPython(newProps.source);
    }
  }

  runPython = (src: string) => {
    axios
      .post('http://localhost:8081/api/python', {
        src,
      })
      .then(response => {
        this.setState({ output: response.data });
      })
      .catch(error => {
        this.setState({ output: error });
      });
  };

  render() {
    return <div>{this.state.output}</div>;
  }
}

export default Python;
