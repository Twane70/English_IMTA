'use client';
import styles from './style.module.scss'
import { useState, useEffect, useRef } from 'react';
import Project from './components/project';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import Image from 'next/image';
import Rounded from '../../common/RoundedButton';

const projects = [
  {
    title: "Paldex",
    type: "Animation 3D | Design",
    src: "paldex_screen.gif",
    color: "#5f823c",
    link: "https://www.paldex.fr",
    description : "[insérer bullshit ici]"
  },
  {
    title: "Fractallium",
    type: "Design | Base de Données",
    src: "fractallium.png",
    color: "#543c82",
    link: "https://www.fractallium.com",
    description : "TODO : bullshit time"
  },
  {
    title: "Techno Trash",
    type: "Animation | Storytelling",
    src: "technotrash_all.png",
    color: "#274554",
    link: "https://www.youtube.com/@TechnoTrash",
    description : "TODO : bullshit time"
  },
  {
    title: "Soleil Bleu",
    type: "Data Science | GreenIT",
    src: "data.png",
    color: "#285c9c",
    link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    description : "TODO : bullshit time"
  },
  {
    title: "Lamonde",
    type: "Prototypage | UI/UX",
    src: "Lamonde.png",
    color: "#8a4848",
    link: "https://www.figma.com/proto/pVsYu7B7rLKcKs4X5g5d3D/Lamonde-Immigration-prototype---Bikay?type=design&node-id=157-37447&t=ReDu8lpJenJ7wtKL-1&scaling=contain&page-id=0%3A1&starting-point-node-id=157%3A37447&mode=design",
    description : "TODO : racheter amandes"
  }
]

const scaleAnimation = {
    initial: {scale: 0, x:"-50%", y:"-50%"},
    enter: {scale: 1, x:"-50%", y:"-50%", transition: {duration: 0.4, ease: [0.76, 0, 0.24, 1]}},
    closed: {scale: 0, x:"-50%", y:"-50%", transition: {duration: 0.4, ease: [0.32, 0, 0.67, 0]}}
}

export default function Home() {

  const [modal, setModal] = useState({active: false, index: 0})
  const { active, index } = modal;
  const modalContainer = useRef(null);
  const cursor = useRef(null);
  const cursorLabel = useRef(null);
  const [cursorLink, setCursorLink] = useState('');

  let xMoveContainer = useRef(null);
  let yMoveContainer = useRef(null);
  let xMoveCursor = useRef(null);
  let yMoveCursor = useRef(null);
  let xMoveCursorLabel = useRef(null);
  let yMoveCursorLabel = useRef(null);

  useEffect( () => {
    //Move Container
    xMoveContainer.current = gsap.quickTo(modalContainer.current, "left", {duration: 0.8, ease: "power3"})
    yMoveContainer.current = gsap.quickTo(modalContainer.current, "top", {duration: 0.8, ease: "power3"})
    //Move cursor
    xMoveCursor.current = gsap.quickTo(cursor.current, "left", {duration: 0.5, ease: "power3"})
    yMoveCursor.current = gsap.quickTo(cursor.current, "top", {duration: 0.5, ease: "power3"})
    //Move cursor label
    xMoveCursorLabel.current = gsap.quickTo(cursorLabel.current, "left", {duration: 0.45, ease: "power3"})
    yMoveCursorLabel.current = gsap.quickTo(cursorLabel.current, "top", {duration: 0.45, ease: "power3"})
  }, [])

  const moveItems = (x, y) => {
    xMoveContainer.current(x)
    yMoveContainer.current(y)
    xMoveCursor.current(x)
    yMoveCursor.current(y)
    xMoveCursorLabel.current(x)
    yMoveCursorLabel.current(y)
  }
  const manageModal = (active, index, x, y, link) => {
    moveItems(x, y)
    setModal({active, index})
    setCursorLink(link)
  }

  useEffect(() => {
    const handleClick = (e) => {
    if (cursorLink) {
      window.open(cursorLink, '_blank');
      }
    };

    document.addEventListener('click', handleClick);
    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, [cursorLink]);

  return (
  <main id="Projets" onMouseMove={(e) => {moveItems(e.clientX, e.clientY)}} className={styles.projects}>
    <div className={styles.body}>
      {
        projects.map( (project, index) => {
          return <Project index={index} title={project.title} manageModal={manageModal} key={index} type={project.type} link={project.link}/>
        })
      }
    </div>
    <Rounded>
      <p>+ à venir ...</p>
    </Rounded>
    <>
        <motion.div ref={modalContainer} variants={scaleAnimation} initial="initial" animate={active ? "enter" : "closed"} className={styles.modalContainer}>
            <div style={{top: index * -100 + "%"}} className={styles.modalSlider}>
            {
                projects.map( (project, index) => {
                const { src, color, link } = project
                return <div className={styles.modal} style={{backgroundColor: color}} key={`modal_${index}`}>
                    <a href={link} target='_blank'>
                      <Image 
                      src={`/images/${src}`}
                      width={300}
                      height={0}
                      alt="image"
                      />
                    </a>
                    <p>
                      {project.description}
                    </p>
                </div>
                })
            }
            </div>
        </motion.div>
        <motion.div ref={cursor} className={styles.cursor} variants={scaleAnimation} initial="initial" animate={active ? "enter" : "closed"}></motion.div>
        <motion.div ref={cursorLabel} className={styles.cursorLabel} variants={scaleAnimation} initial="initial" animate={active ? "enter" : "closed"}>Visiter</motion.div>
    </>
  </main>
  )
}
