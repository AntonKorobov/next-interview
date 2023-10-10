import { Component } from 'react';

import { contextClass } from './ContextClassProvider';

export class ContextTypeComponent extends Component {
  static contextType = contextClass;
  context!: React.ContextType<typeof contextClass>;

  render() {
    return (
      <div>
        <p>value={this.context.name}</p>
        <button onClick={() => this.context.setName('default')}>Reset name</button>
      </div>
    );
  }
}
