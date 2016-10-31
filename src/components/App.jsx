import React from 'react';

import {
  Button,
  Modal,
} from 'ui';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {greet: false};
  }

  render() {
    return (
      <div>
        Hey dude!
        <br />
        <Button onClick={e => this.open()}>Say hi</Button>
        {this.state.greet && this.renderModal()}
      </div>
    );
  }

  renderModal() {
    return (
      <Modal width={400} onClose={e => this.close()}>
        <Modal.Header>Whoop whoop</Modal.Header>
        <Modal.Body>Hi!</Modal.Body>
      </Modal>
    );
  }

  open() {
    this.setState({greet: true});
  }

  close() {
    this.setState({greet: false});
  }
}
