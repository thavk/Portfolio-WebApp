import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Card } from "../features/Card.tsx";
import { SearchBar } from "../features/SearchBar.tsx";
import styles from "../styles/Home.module.scss";

export const Home = () => {
    const [term, setTerm] = useState('');
    const [cards, setCards] = useState<Data[]>([]);

    const cardObjectMock = [{
        name: 'Unholy Lotus Project',
        tags: ['React', 'Jest', 'HTML5', 'HTML', 'javascript'],
    },
    {
        name: 'Unholy Lotus Project',
        tags: ['Jest', 'HTML5', 'HTML', 'javascript'],
    },
    {
        name: 'Unholy Lotus Project',
        tags: ['Jest', 'HTML5', 'HTML', 'javascript'],
    },
    {
        name: 'Unholy Lotus Project',
        tags: ['React', 'Jest', 'HTML5', 'HTML', 'javascript'],
    },
    {
        name: 'Unholy Lotus Project',
        tags: ['React', 'Jest', 'HTML5', 'HTML', 'javascript'],
    },
    {
        name: 'Unholy Lotus Project',
        tags: ['Jest', 'HTML5', 'HTML', 'javascript'],
    },
    {
        name: 'Unholy Lotus Project',
        tags: ['Jest', 'HTML5', 'HTML', 'javascript'],
    },
    {
        name: 'Unholy Lotus Project',
        tags: ['Jest', 'HTML5', 'HTML', 'javascript'],
    },
    {
        name: 'Unholy Lotus Project',
        tags: ['Jest', 'HTML5', 'HTML', 'javascript'],
    },
    {
        name: 'Unholy Lotus Project',
        tags: ['Jest', 'HTML5', 'HTML', 'javascript'],
    },
    {
        name: 'Unholy Lotus Project',
        tags: ['Jest', 'HTML5', 'HTML', 'javascript'],
    }]

    const eventHandler = (e: { target: { value: string; }; }) => {
        setTerm(e.target.value);
    };

    type Data = {
        name: string,
        tags: string[]
    }

    const cardSort = (arr: Data[]) => {
        let matchingCards = arr.filter((item) => {
            return item.tags.some(element => element.toLowerCase().includes(term.toLowerCase()));
        })
        setCards(matchingCards);
    }

    useEffect(() => {
        cardSort(cardObjectMock);
    }, [term]);



    return (
        <div className={styles.home}>
            <header className={styles.header}>
                <h1>My Portfolio</h1>
            </header>
            <main className={styles.main}>
                <nav className={styles.nav}>
                    <Link to='/about'>
                        <button className={styles.button} >About me</button>
                    </Link>
                    <Link to='/blog'>
                        <button className={styles.button}>Blog/Articles</button>
                    </Link>
                </nav>
                <section className={styles.projects}>
                    <SearchBar value={term} onChange={eventHandler}/>
                    <div className={styles.cardcontainer}>
                        {cards
                            .map((item) => {
                                return <Card name={item.name} tags={item.tags}/>
                            })
                        }
                    </div>
                </section>    
            </main>
            <footer className={styles.footer}>
                <h3>Contact:</h3>
                <p>+351924713484</p>    
                <p>marco_estela_ferreira@hotmail.com</p>
                <div>
                    <img src="./src/assets/github-mark-white.png" alt="GitHub Icon" height='17 px'></img>
                    <a href="https://github.com/silomeno" className={styles.links}>GitHub</a>    
                </div>    
                <div>
                    <img src="./src/assets/InBug-white.png" alt="LinkedIn Icon" height='16 px'></img>
                    <a href="https://www.linkedin.com/in/marco-ferreira-9a5246296/" className={styles.links}>LinkedIn</a>  
                </div>  
            </footer> 
        </div>
    );
};

