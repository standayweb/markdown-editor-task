// @flow
import React, { Component } from 'react';
import SplitPane from 'react-split-pane';
import Markdown from 'react-markdown';
import { css } from 'glamor';
import 'glamor/reset';
import './globalCss';
import Python from './Python';

const textareaStyle = css({
  width: '100%',
  height: '100%',
  border: 'none',
  outline: 'none',
});

type Props = {};

type State = {
  type: 'markdown' | 'python',
  src: string,
};

class App extends Component<Props, State> {
  state = {
    type: 'python',
    src: '',
  };

  handleChange = (e: TextAreaEvent) => {
    this.setState({ src: e.target.value });
  };

  render() {
    return (
      <SplitPane defaultSize="50%" split="vertical">
        <textarea
          className={textareaStyle}
          onChange={this.handleChange}
          value={this.state.src}
        />
        {this.state.type === 'markdown' ? (
          <Markdown source={this.state.src} />
        ) : (
          <Python source={this.state.src} />
        )}
      </SplitPane>
    );
  }
}

export default App;
