import { createContext, Component, ReactNode } from 'react';

interface IContext {
  name: string;
  setName: (value: string) => void;
}

export const contextClass = createContext<IContext>({ name: 'default', setName: () => {} });

export class ContextClassProvider extends Component<{ children: ReactNode }, { name: string }> {
  state = {
    name: 'myName',
  };

  render() {
    return (
      <contextClass.Provider value={{ name: this.state.name, setName: (value) => this.setState({ name: value }) }}>
        {this.props.children}
      </contextClass.Provider>
    );
  }
}
