import styles from './style.module.scss';
import Image from 'next/image';
import Rounded from '../../common/RoundedButton';
import { useRef } from 'react';
import { useScroll, motion, useTransform } from 'framer-motion';
import Magnetic from '../../common/Magnetic';

export default function Contact() {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start end", "end end"]
    })
    const x = useTransform(scrollYProgress, [0, 1], [0, 100])
    const y = useTransform(scrollYProgress, [0, 1], [-500, 0])
    const rotate = useTransform(scrollYProgress, [0, 1], [105, 95])
    return (
        <motion.div style={{y}} ref={container} className={styles.contact}>
            <div className={styles.body}>
                <div className={styles.title}>
                    <span>
                        <div className={styles.imageContainer}>
                            <Image 
                            fill={true}
                            alt={"image"}
                            src={`/images/finger.jpg`}
                            />
                        </div>
                        <h2>Alors, quand est-ce</h2>
                    </span>
                    <h2>{"qu'on s'y met ?"}</h2>
                    <motion.div style={{x}} className={styles.buttonContainer}>
                        <a href='https://calendly.com/antoinetondu/meeting-1hr' target='_blank'>
                            <Rounded  backgroundColor={"#334BD3"} className={styles.button}>
                                <p>Planifier <br/>un RDV</p>
                            </Rounded>
                        </a>
                    </motion.div>
                    <motion.svg style={{rotate, scale: 5}} width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 8.5C8.27614 8.5 8.5 8.27614 8.5 8L8.5 3.5C8.5 3.22386 8.27614 3 8 3C7.72386 3 7.5 3.22386 7.5 3.5V7.5H3.5C3.22386 7.5 3 7.72386 3 8C3 8.27614 3.22386 8.5 3.5 8.5L8 8.5ZM0.646447 1.35355L7.64645 8.35355L8.35355 7.64645L1.35355 0.646447L0.646447 1.35355Z" fill="white"/>
                    </motion.svg>
                </div>
                {/* <div className={styles.nav}>
                        <a href='mailto:tonduantoine@gmail.com'>
                        <Rounded className={styles.button} >
                            <p>tonduantoine@gmail.com</p>
                        </Rounded>
                        </a>
                        <Rounded className={styles.button} >
                            <p>+33 7 86 15 48 96</p>
                        </Rounded>
                </div> */}
                <div className={styles.info}>
                    <div>
                        <span>
                            <h3>Version</h3>
                            <p>2024 © Edition</p>
                        </span>
                        {/* <span>
                            <h3>Version</h3>
                            <p>11:49 PM GMT+2</p>
                        </span> */}
                    </div>
                    <div id="Contact">
                        <span>
                            <h3>Réseaux</h3>
                            <a href='mailto:tonduantoine@gmail.com' target='_blank'>
                                <Magnetic>
                                    <p>Email</p>
                                </Magnetic>
                            </a>
                        </span>
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
                </div>
            </div>
        </motion.div>
    )
}
