import React from 'react';
import { storiesOf } from '@storybook/react';
import { getTestStoryKind } from '../storiesHierarchy';
import { storySettings } from './storySettings';
import Modal from '../../src/Modal/Modal';
import { MessageBoxFunctionalLayout } from '../../src/MessageBox';
import Button from '../../src/Button/Button';

const kind = getTestStoryKind(storySettings);

storiesOf(kind, module).add('1. Prevent modal background scroll', () => (
  <ModalToTest />
));

class ModalToTest extends React.Component {
  state = { modalIsOpen: false };

  openModal = () => this.setState({ modalIsOpen: true });
  closeModal = () => this.setState({ modalIsOpen: false });

  render() {
    const divStyle = { height: '110vh' };

    return (
      <div data-hook="container">
        <Button onClick={this.openModal} dataHook="open-modal-button">
          Open Modal
        </Button>
        <Modal
          dataHook='storybook-modal'
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          shouldDisplayCloseButton
          contentLabel="Modal With Close Button Example"
          scrollableContent={false}
          parentSelector={() => document.querySelector(`[data-hook="container"]`)}
        >
          <MessageBoxFunctionalLayout
            theme="blue"
            title="Modal With Close Button Example"
            confirmText="OK"
            cancelText="Cancel"
          >
            I Have a close button on the upper right corner but its impossible
            to press without deleting the github creature first using the
            console
          </MessageBoxFunctionalLayout>
        </Modal>
        <div style={divStyle}> </div>
        <div data-hook="scroll-here-div"> Scroll Here </div>
      </div>
    );
  }
}

//TODOs:
/*
 * 1. Add imports for modal
 * 2. Add content to page (body) so that the page is scrollable
 * 3. Add button to open modal
 * */
