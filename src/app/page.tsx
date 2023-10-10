import Image from 'next/image';
import styles from './page.module.scss';

export default function Home() {
  return (
    <main className={styles.main}>
      <div>
        <p>Hello world!</p>
      </div>
      <div>
        <Image src="/next.svg" alt="Next.js Logo" width={180} height={37} priority />
      </div>
    </main>
  );
}
