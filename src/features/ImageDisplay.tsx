import React, { useState } from "react";
import styles from "../styles/Projects.module.scss"

type ImageDisplayProps = {
    list: string[],
    img: string | undefined,
    onClose: () => void,
};

export const ImageDisplay = ({ list, img, onClose }: ImageDisplayProps) => {
    const currentIndex = list.findIndex(item => item === img);
    const [image, setImage] = useState(img);
    const [imgIndex, setImgIndex] = useState<number>(currentIndex);

    
    
    const imageSelector = (newIndex) => {
        let index = newIndex;

        if (newIndex > list.length - 1) index = 0;
        else if (newIndex < 0) index = list.length - 1;
        else index = newIndex;

        setImgIndex(index); 
        setImage(list[index]);
    };
    

    return (
        <div className={styles.bigImage} onClick={onClose}>
            <div onClick={(e) => e.stopPropagation()}>
                <div className={styles.close}>
                    <button onClick={onClose}>x</button>
                </div>
                <div className={styles.leftArrow}>
                    <button onClick={() => imageSelector(imgIndex - 1)}>{'<'}</button>
                </div>
                <div className={styles.container}>
                    <div>
                        <img src={image} className={styles.image}></img>
                    </div>            
                </div>
                <div className={styles.rightArrow}>
                    <button onClick={() => imageSelector(imgIndex + 1)}>{'>'}</button>
                </div>
                <div className={styles.bottomDisplay}>
                    {list.map((item, index) => {
                        return <img src={item} key={index} onClick={() => imageSelector(index)}/>
                    })}
                </div>
            </div>
        </div>
    );
};