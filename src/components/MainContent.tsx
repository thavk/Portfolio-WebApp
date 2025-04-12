import React, { useEffect, useState } from "react";
import { SearchBar } from "../features/SearchBar";
import { Card } from "../features/Card";
import styles from "../styles/Home.module.scss";

export const MainContent = () => {
    const [term, setTerm] = useState('');
    const [cards, setCards] = useState<Data[]>([]);

    const cardObjectMock = [{
        name: 'Unholy Lotus Project',
        tags: ['React', 'Jest', 'HTML5', 'HTML', 'javascript', 'React', 'React'],
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
        <section className={styles.projects}>
            <SearchBar value={term} onChange={eventHandler}/>
            <div className={styles.cardcontainer}>
                {cards
                    .map((item: Data) => {
                        return <Card name={item.name} tags={item.tags}/>
                    })
                }
            </div>
        </section>
    )
};