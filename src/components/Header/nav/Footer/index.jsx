import styles from './style.module.scss';
import Magnetic from '../../../../common/Magnetic';

export default function index() {
  return (
    <div className={styles.footer}>
      <a href='mailto:tonduantoine@gmail.com' target='_blank'>
          <Magnetic>
              <p>Email</p>
          </Magnetic>
      </a>
      <a href='https://www.linkedin.com/in/antoinetondu/' target='_blank'>
          <Magnetic>
              <p>LinkedIn</p>
          </Magnetic>
      </a>
      <a href='https://github.com/Twane70' target='_blank'>
          <Magnetic>
              <p>GitHub</p>
          </Magnetic>
      </a>
    </div>
  )
}
