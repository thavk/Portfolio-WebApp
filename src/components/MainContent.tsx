import React, { useEffect, useState } from "react";
import { SearchBar } from "../features/SearchBar";
import { Card } from "../features/Card";
import styles from "../styles/Home.module.scss";
import { projects } from "../data/projects";


export const MainContent = () => {
    const [term, setTerm] = useState('');
    const [cards, setCards] = useState<Data[]>([]);


    const eventHandler = (e: { target: { value: string; }; }) => {
        setTerm(e.target.value);
    };

    type Data = {
        title: string,
        subTitle: string,
        tags: string[],
        slug: string,
        cardImg: string,
    }

    const cardSort = (arr: Data[]) => {
        let matchingCards = arr.filter((item) => {
            return item.tags.some(element => element.toLowerCase().includes(term.toLowerCase()));
        })
        setCards(matchingCards);
    }

    useEffect(() => {
        cardSort(projects);
    }, [term]);



    return (
        <section className={styles.projects}>
            <SearchBar value={term} onChange={eventHandler}/>
            <div className={styles.cardcontainer}>
                {cards
                    .map((item: Data, index) => {
                        return <Card key={index} cardImg={item.cardImg} title={item.title} subTitle={item.subTitle} slug={item.slug} tags={item.tags}/>
                    })
                }
            </div>
        </section>
    )
};