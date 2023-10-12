'use client';

import style from './Header.module.scss';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();

  return (
    <header className={style.header}>
      <ul className={style.nav}>
        <li>
          <Link className={pathname === '/' ? style.activeLink : ''} href="/">
            Home
          </Link>
        </li>
        <li>
          <Link className={pathname === '/context' ? style.activeLink : ''} href="/context">
            Context
          </Link>
        </li>
        <li>
          <Link className={pathname === '/renderprops' ? style.activeLink : ''} href="/renderprops">
            RenderProps
          </Link>
        </li>
        <li>
          <Link className={pathname === '/hoc' ? style.activeLink : ''} href="/hoc">
            HOC
          </Link>
        </li>
        <li>
          <Link className={pathname === '/errorboundary' ? style.activeLink : ''} href="/errorboundary">
            ErrorBoundary
          </Link>
        </li>
        <li>
          <Link className={pathname === '/ref' ? style.activeLink : ''} href="/ref">
            Ref
          </Link>
        </li>
      </ul>
    </header>
  );
}
