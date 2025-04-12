import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/Home.module.scss"

type CardProps = {
    name: string;
    tags: string[];
}

export const Card = ({ name, tags }: CardProps) => {

        let slug = encodeURIComponent(name);

        return (
        <div>
            <Link to={`projects/${slug}`}>
                <button className={styles.buttonCard}>
                    <div className={styles.card}>
                        <img src="../../src/assets/header-background.jpg" className={styles.buttonImage}></img>
                        <h3>Unholy Lotus</h3>
                        <h4>Guild Management App</h4>
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