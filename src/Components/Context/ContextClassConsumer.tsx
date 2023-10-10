import { Component } from 'react';
import { contextClass } from './ContextClassProvider';

export class ContextClassConsumer extends Component {
  render() {
    return (
      <contextClass.Consumer>
        {({ name, setName }) => {
          return (
            <div>
              <p>value={name}</p>
              <button onClick={() => setName('default')}>Reset name</button>
            </div>
          );
        }}
      </contextClass.Consumer>
    );
  }
}
