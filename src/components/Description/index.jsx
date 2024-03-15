import styles from './style.module.scss';
import { useInView, motion } from 'framer-motion';
import { useRef } from 'react';
import { slideUp, opacity } from './animation';
import Rounded from '../../common/RoundedButton';
export default function Description() {

    const phrase1 = "Besoin de faire connaître votre produit ou de construire votre audience ?";
    const phrase2 = "Je vous aide à créer des expériences web sur-mesures...et mémorables !";
    const description = useRef(null);
    const isInView = useInView(description)
    return (
        <div id="Presentation" ref={description} className={styles.description}>
            <div className={styles.body}>
                <p>
                {
                    phrase1.split(" ").map( (word, index) => {
                        return <span key={index} className={styles.mask}><motion.span variants={slideUp} custom={index} animate={isInView ? "open" : "closed"} key={index}>{word}</motion.span></span>
                    })
                }<br/><br/>
                {
                    phrase2.split(" ").map( (word, index) => {
                        return <span key={index} className={styles.mask}><motion.span variants={slideUp} custom={index + 20} animate={isInView ? "open" : "closed"} key={index}>{word}</motion.span></span>
                    })
                }
                </p>
                <motion.p className={styles.skills} variants={opacity} animate={isInView ? "open" : "closed"}>Design & Prototypes<br/>Data Science<br/>Animation 3D<br/>Développement Web<br/>Automatisation</motion.p>
                <div data-scroll data-scroll-speed={0.1}>
                    <a href='#Projets' data-scroll-to>
                    <Rounded className={styles.button}>
                        <p>Quelques<br/>exemples ?</p>
                    </Rounded>
                    </a>
                </div>
            </div>
        </div>
    )
}
