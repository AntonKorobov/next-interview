import Link from 'next/link';

export default function RefPage() {
  return (
    <div>
      <h2>Ref</h2>
      <ul>
        <li>
          <Link href={'https://react.dev/learn/referencing-values-with-refs'}>https://react.dev/learn/referencing-values-with-refs</Link>
        </li>
        <li>
          <Link href={'https://react.dev/learn/manipulating-the-dom-with-refs'}>https://react.dev/learn/manipulating-the-dom-with-refs</Link>
        </li>
      </ul>
      <h2>Double check it!</h2>
      <ul>
        <li>flushSync</li>
        <li>
          <Link href={'https://www.youtube.com/watch?v=zpEyAOkytkU'}>useImperativeHandle</Link>
        </li>
        <li>forwardRef</li>
      </ul>
    </div>
  );
}
