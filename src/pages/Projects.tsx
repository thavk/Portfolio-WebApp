import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { projects } from "../data/projects";
import styles from "../styles/Projects.module.scss";
import { ImageDisplay } from "../features/ImageDisplay";


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
    const [currentIndex, setCurrentIndex] = useState(0);
    const [displayedImage, setDisplayedImage] = useState(currentProject?.projectImages[currentIndex]);
    const [bigPicture, setBigPicture] = useState(false);

    if (!currentProject) {
        return <div>Project not found.</div>
    }

    const imageSelector = (imageInd) => {
        const imageArray = currentProject.projectImages;
        let newIndex = imageInd;

        if (imageInd > imageArray.length - 1) newIndex = 0;
        else if (imageInd < 0) newIndex = imageArray.length - 1;
        else newIndex = imageInd;

        setCurrentIndex(newIndex)
        setDisplayedImage(imageArray[newIndex]);
    };



    return (
        <section className={styles.main}>
            {bigPicture ? <ImageDisplay onClose={() => setBigPicture(false)} img={displayedImage} list={currentProject.projectImages}/> : undefined}
            <div className={styles.titles}>
                <h1>{currentProject.title}</h1>
                <h2>{currentProject.subTitle}</h2>
            </div>
            <div className={styles.mainBody}>
                <div className={styles.topDiv}>
                    <div className={styles.compartment}>
                        <div className={styles.tagsContainer}>
                            {currentProject.tags
                                .map((item: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined, index: React.Key | null | undefined) => {
                                    return <p key={index} className={styles.tags}>{item}</p>
                                })
                            }
                        </div>
                        <div className={styles.links}>
                            <p><a href={currentProject.appUrl}>Website</a></p>
                            <p><a href={currentProject.github}>Repository</a></p>
                        </div>
                    </div>
                    <div className={styles.imageContainer}>
                        <div className={styles.arrowContainer}>
                            <button className={styles.arrow} onClick={() => imageSelector(currentIndex - 1)}>{'<'}</button>
                        </div>
                            <button className={styles.imgButton} onClick={() => {
                                setBigPicture(true)
                                console.log(bigPicture)}
                                }>
                                <img src={displayedImage} alt='Project image' className={styles.image}   width={420}
                                height={320}/>
                            </button>
                        <div className={styles.arrowContainer}>
                            <button className={styles.arrow} onClick={() => imageSelector(currentIndex + 1)}>{'>'}</button>
                        </div>
                    </div>
                </div>
                <div className={styles.descriptionContainer}>
                    <p className={styles.description}>{currentProject.description}</p>
                </div>
            </div>
        </section>
    );
};