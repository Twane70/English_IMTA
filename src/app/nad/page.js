import Link from 'next/link'
import styles from './style.module.scss';

export default function NewPage() {
  return (
    <div className={styles.description}>
      <p>{"Art & Histoire de l'Image Numérique"}</p>
      <Link href="https://docs.google.com/document/d/1BRYuY5FE_rsGDGbONMvUdoMNI6XNqM9jinJeqT_DmZU/edit?usp=sharing">
        Document
      </Link>
    </div>
  )
}