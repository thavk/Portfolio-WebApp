import React from "react";
import { Link } from "react-router-dom";
import { List } from "../components/List.tsx";
import styles from "../styles/Home.module.scss";

export const Home = () => {
    return (
        <div className={styles.home}>
            <header className={styles.header}>
                <h1>My Portfolio</h1>
            </header>
            <main>
                <nav className={styles.nav}>
                    <Link to='/about'>
                        <button className={styles.button} >About me</button>
                    </Link>
                    <Link to='/blog'>
                    <button className={styles.button}>Blog/Articles</button>
                    </Link>
                </nav>
                <section className={styles.projects}>
                    <List/>
                </section>    
            </main>
            <footer className={styles.footer}>
                <h3>Contact:</h3>
                <p>+351924713484</p>    
                <p>marco_estela_ferreira@hotmail.com</p>    
                <a href="https://github.com/silomeno">GitHub</a>    
                <a href="https://www.linkedin.com/in/marco-ferreira-9a5246296/">LinkedIn</a>    
            </footer> 
        </div>
    );
};

