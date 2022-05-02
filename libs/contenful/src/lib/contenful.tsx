import styles from './contenful.module.css';

/* eslint-disable-next-line */
export interface ContenfulProps {}

export function Contenful(props: ContenfulProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Contenful!</h1>
    </div>
  );
}

export default Contenful;
