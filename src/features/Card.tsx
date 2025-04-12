import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/Home.module.scss"

type CardProps = {
    title: string;
    subTitle: string;
    tags: string[];
    slug: string;
    cardImg: string;
}

export const Card = ({ title, subTitle, tags, slug, cardImg }: CardProps) => {

        return (
        <div>
            <Link to={`projects/${slug}`}>
                <button className={styles.buttonCard}>
                    <div className={styles.card}>
                        <img src={cardImg} className={styles.buttonImage}></img>
                        <h3>{title}</h3>
                        <h4>{subTitle}</h4>
                        <section className={styles.tagsContainer}>
                            {tags
                                .map((item, index) => {
                                return (
                                <p key={index} className={styles.tags}>
                                    {item}
                                </p>
                                ) 
                                })
                            }
                        </section>
                    </div>
                </button>
            </Link>
        </div>)
};


