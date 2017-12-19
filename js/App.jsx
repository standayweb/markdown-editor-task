// @flow
import React, { Component } from 'react';
import SplitPane from 'react-split-pane';
import Markdown from 'react-markdown';
import 'glamor/reset';
import './globalCss';

type Props = {};

type State = {
  src: string,
};

class App extends Component<Props, State> {
  state = {
    src: `
      # Test document

      Let's create a variable \`x\`, equal to 5.

      \`\`\`
      x = 5
      \`\`\`
    `,
  };

  onChange = (e: TextAreaEvent) => {
    this.setState({ src: e.target.value });
  };

  render() {
    return (
      <SplitPane defaultSize="50%" split="vertical">
        <textarea
          onChange={this.onChange}
          value={this.state.src}
          css={{
            width: '100%',
            height: '100%',
            border: 'none',
            outline: 'none',
          }}
        />
        <Markdown css={{ padding: 20 }}>{this.state.src}</Markdown>
      </SplitPane>
    );
  }
}

export default App;
