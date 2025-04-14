import React from "react";
import { useParams } from "react-router";
import { projects } from "../data/projects";
import { styles } from "../styles/Projects.module.scss";

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
        <section>
            <div>
                <h1>{currentProject?.title}</h1>
                <h2>{currentProject?.subTitle}</h2>
            </div>
            <div>
                <div>
                    {currentProject?.tags
                        .map((item, index) => {
                            return <p key={index}>{item}</p>
                        })
                    }
                </div>
                <div>
                {currentProject?.projectImages
                    .map((item, index) => {
                        return <img key={index} src={item} alt={`Project image ${index + 1}`} />
                    })  
                }
                </div>
                <div>
                    <p>{currentProject?.description}</p>
                </div>
            </div>
        </section>
    );
};