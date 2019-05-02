import * as React from 'react';
import InputWithOptions from '../../src/InputWithOptions';
import {inputWithOptionsTestkitFactory} from '../../testkit';
import {inputWithOptionsTestkitFactory as inputWithOptionsEnzymeTestkitFactory} from '../../testkit/enzyme';
import {mount} from 'enzyme';
import Input from '../../src/Input';

function testkits() {
  const vanilla = inputWithOptionsTestkitFactory({
    dataHook: 'hi',
    wrapper: document.createElement('div')
  });

  vanilla.exists();

  const enzyme = inputWithOptionsEnzymeTestkitFactory({
    dataHook: 'shbem',
    wrapper: mount(<div />)
  });
}

function InputWithOptionsWithMandatoryProps() {
  return <InputWithOptions />;
}

function InputWithOptionsWithAllProps() {
  return (
    <InputWithOptions
      inputElement={<Input />}
      closeOnSelect
      onManuallyInput={(i, s) => undefined}
      valueParser={o => undefined}
      dropdownWidth="10px"
      dropdownOffsetLeft="10px"
      showOptionsIfEmptyInput
      highlight
    />
  );
}

function InputWithOptionsStandard() {
  const style = {
    display: 'inline-block',
    padding: '0 5px 0',
    width: '200px',
    lineHeight: '22px'
  };

  const options = [
    {id: 0, value: 'First option'},
    {id: 1, value: 'Unselectable option', unselectable: true},
    {id: 2, value: 'Third option'},
    {id: 3, value: <span style={{color: 'red'}}>Node option</span>},
    {id: 4, value: '-'},
    {
      id: 5,
      value:
        'Very long option text jldlkasj ldk jsalkdjsal kdjaklsjdlkasj dklasj'
    }
  ];

  const rtlOptions = [
    {id: 0, value: 'אפשרות ראשונה'},
    {id: 1, value: 'אפשרות שניה'},
    {id: 2, value: 'אפשרות שלישית'},
    {id: 3, value: '-'},
    {id: 4, value: 'אפשרות רביעית'}
  ];

  return (
    <div>
      <div style={style} className="ltr">
        Left to right
        <InputWithOptions options={options} />
      </div>
      <div style={style} className="rtl">
        Right to left
        <InputWithOptions options={rtlOptions} rtl />
      </div>
    </div>
  );
}

function InputWithOptionsControlled() {
  const style = {
    display: 'inline-block',
    padding: '0 5px 0',
    width: '200px',
    lineHeight: '22px',
    marginBottom: '350px'
  };

  const options = [
    {id: '0', value: 'First option'},
    {id: '1', value: 'Second option'},
    {id: '2', value: 'Third option', disabled: true},
    {id: '3', value: 'Fourth option'},
    {id: '4', value: 'Fifth option'},
    {
      id: '5',
      value:
        'Very long option text jldlkasj ldk jsalkdjsal kdjaklsjdlkasj dklasj'
    }
  ];

  class ControlledInputWithOptions extends React.Component<any, any> {
    constructor(props) {
      super(props);
      this.state = {
        value: '',
        selectedId: -1
      };
    }

    render() {
      const onChange = event => {
        this.setState({value: event.target.value});
      };

      const onSelect = option => {
        const value = option.value;
        this.setState({
          value,
          selectedId: option.id
        });

        console.log(
          `Selected option id=${JSON.stringify(option)}, value=${value}`
        );
      };

      const onManuallyInput = value => {
        this.setState({
          selectedId: -1
        });
        console.log(`Manually selected ${value}`);
      };

      const predicate = element =>
        this.state.value
          ? element.value
              .toLowerCase()
              .indexOf(this.state.value.toLowerCase()) !== -1
          : true;

      return (
        <InputWithOptions
          options={options.filter(predicate)}
          selectedId={this.state.selectedId}
          value={this.state.value}
          onChange={onChange}
          onSelect={onSelect}
          onManuallyInput={onManuallyInput}
          highlight
        />
      );
    }
  }

  return ControlledInputWithOptions;
}

function InputWithOptionsNoDropdown() {
  const style = {
    display: 'inline-block',
    padding: '0 5px 0',
    width: '200px',
    lineHeight: '22px'
  };

  const options = [
    {id: '0', value: 'First option'},
    {id: '1', value: 'Second option'},
    {id: '2', value: 'Third option', disabled: true},
    {id: '3', value: 'Fourth option'},
    {id: '4', value: 'Fifth option'},
    {
      id: '5',
      value:
        'Very long option text jldlkasj ldk jsalkdjsal kdjaklsjdlkasj dklasj'
    }
  ];

  return class NoDropdownIfEmptyInput extends React.Component {
    state = {
      value: ''
    };

    render() {
      return (
        <InputWithOptions
          showOptionsIfEmptyInput={false}
          options={options}
          value={this.state.value}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.setState({value: e.target.value})}
        />
      );
    }
  };
}
