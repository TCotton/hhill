import styles from './index.module.css';

/* eslint-disable-next-line */
export interface ArticlesProps {}

export function Articles(props: ArticlesProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Articles!</h1>
    </div>
  );
}

export default Articles;
