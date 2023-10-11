import { IInjectedProps } from './loudComponentHOC';

export function SilentComponent(props: IInjectedProps) {
  return (
    <div>
      <h3>SilentComponent</h3>
      <button onClick={props.saySomething}>Say Something</button>
    </div>
  );
}
