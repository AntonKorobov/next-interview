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
      </ul>
    </header>
  );
}
