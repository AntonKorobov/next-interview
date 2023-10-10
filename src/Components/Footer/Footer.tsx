import style from './Footer.module.scss';

export function Footer() {
  return (
    <footer className={style.footer}>
      <div className={style.copyright}>© 2023 Anton Korobov</div>
    </footer>
  );
}
