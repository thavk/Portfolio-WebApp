import React from "react";
import { Link, Outlet } from "react-router-dom";
import styles from "../styles/Home.module.scss";

export const Home = () => {   
    return (
        <div className={styles.home}>
            <header className={styles.header}>
                <Link to='/'>
                    <h1 className={styles.siteIcon}>Marco's Corner</h1>
                </Link>
            </header>

            <main className={styles.main}>
                <nav className={styles.nav}>
                    <Link to=''>
                        <button className={styles.button} onClick={() => {
                            alert('Under construction!')
                        }}>About me</button>
                    </Link>
                    <Link to=''>
                        <button className={styles.button} onClick={() => {
                            alert('Under construction!')
                        }}>Blog/Articles</button>
                    </Link>
                </nav>
                <Outlet/>   
            </main>
            <footer className={styles.footer}>
                <h3>Contact:</h3>
                <p>+351 924 713 484</p>    
                <p>marco_estela_ferreira@hotmail.com</p>
                <div>
                    <img src="/src/assets/github-mark-white.png" alt="GitHub Icon" height='17 px'></img>
                    <a href="https://github.com/silomeno" className={styles.links}>GitHub</a>    
                </div>    
                <div>
                    <img src="/src/assets/InBug-white.png" alt="LinkedIn Icon" height='16 px'></img>
                    <a href="https://www.linkedin.com/in/marco-ferreira-9a5246296/" className={styles.links}>LinkedIn</a>  
                </div>  
            </footer> 
        </div>
    );
};

