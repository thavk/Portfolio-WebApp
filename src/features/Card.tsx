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
            
                <button className={styles.buttonCard}>
                    <Link to={`projects/${slug}`}>
                        <div className={styles.card}>
                            <img src="../../src/assets/header-background.jpg" width="350px" height="150px" className={styles.buttonImage}></img>
                            <h3>Unholy Lotus</h3>
                            <h4>Guild Management App</h4>
                        </div>
                    </Link>
                </button>
            
        </div>)
};