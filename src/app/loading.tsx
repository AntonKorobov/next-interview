import style from './loading.module.scss';

export default function loading() {
  return (
    <div className={style.loadingScreen}>
      <p>Loading...</p>
    </div>
  );
}
