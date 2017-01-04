import React from 'react';
import ReactDOM from 'react-dom';
import DynamicBackground from '../src/DynamicBackground';

const ExampleApp = () => (
  <div id={'app'}>
    <h1>dynamic-background example app</h1>
    <DynamicValuesForm />
  </div>
);

class DynamicValuesForm extends React.Component {
  constructor() {
    super();
    this.state = {
      stringValue: '',
      harmonyValue: undefined,
    };

    this.handleTextInputChange = (e) => {
      this.setState({ stringValue: e.target.value });
    };

    this.handleOptionInputChange = (e) => {
      this.setState({ harmonyValue: e.target.value });
    };
  }

  render() {
    return (
      <div>
        <form>
          <label htmlFor={'string'}>String to parse:</label>
          <input id={'string'} type={'text'} onChange={this.handleTextInputChange} />
          <label htmlFor={'harmony'}>Color harmony:</label>
          <select id={'harmony'} onChange={this.handleOptionInputChange}>
            <option value="complimentary">Complimentary</option>
            <option value="splitComplimentary">Split-Complimentary</option>
            <option value="triadic">Triadic</option>
            <option value="tetradic">Tetradic</option>
            <option value="analagous">Analagous</option>
          </select>
        </form>
        <DynamicBackground
          string={this.state.stringValue}
          harmony={this.state.harmonyValue}
        />
      </div>
    );
  }
}

ReactDOM.render(<ExampleApp />, document.getElementById('root'));

export default ExampleApp;
