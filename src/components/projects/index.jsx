'use client';
import { useState } from 'react';
import styles from './style.module.scss';
import Titles from './titles';
import Descriptions from './descriptions';

const data = [
    {
        title: "Project 1",
        description: " add whatever you want/bbwebdevelop.com",
        speed: 0.5
    },
    {
        title: "Project 2",
        description: "add whatever you want/bbwebdevelop.com",
        speed: 0.5
    },
    {
        title: "Project 3",
        description: "add whatever you want/bbwebdevelop.com",
        speed: 0.67
    },
    {
        title: "Project 4",
        description: "add whatever you want/bbwebdevelop.com",
        speed: 0.8
    },
    {
        title: "Project 5",
        description: "add whatever you want/bbwebdevelop.com",
        speed: 0.8
    },
    {
        title: "Project 6",
        description: "add whatever you want/bbwebdevelop.com",
        speed: 0.8
    }
]

export default function Projects() {
    const [selectedProject, setSelectedProject] = useState(null)
    return (
        <div className={styles.container}>
            <Titles data={data} setSelectedProject={setSelectedProject}/>
            <Descriptions data={data} selectedProject={selectedProject}/>
        </div>
    )
}

