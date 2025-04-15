import React from "react";
import { useParams } from "react-router";
import { projects } from "../data/projects";
import styles from "../styles/Projects.module.scss";

type ProjectType = {
    title: string,
    subTitle: string,
    cardImg: string,
    projectImages: string[],
    tags: string[],
    video: string[],
    description: string,
    appUrl: string,
    github: string,
    slug: string,
}

export const Projects = () => {
    const params = useParams();
    
    const currentProject = projects.find((item) => item.slug === params.id) as ProjectType | undefined;

    if (!currentProject) {
        return <div>Project not found.</div>
    }

    return (
        <section className={styles.main}>
            <div className={styles.titles}>
                <h1>{currentProject?.title}</h1>
                <h2>{currentProject?.subTitle}</h2>
            </div>
            <div className={styles.mainBody}>
                <div className={styles.tagsContainer}>
                    {currentProject?.tags
                        .map((item, index) => {
                            return <p key={index} className={styles.tags}>{item}</p>
                        })
                    }
                </div>
                <div className={styles.imageContainer}>
                    {currentProject?.projectImages
                        .map((item, index) => {
                            return <img key={index} src={item} alt={`Project image ${index + 1}`} width="600px" height="337px" className={styles.image} />
                        })  
                    }
                </div>
                <div className={styles.descriptionContainer}>
                    <p className={styles.description}>{currentProject?.description}</p>
                </div>
            </div>
        </section>
    );
};