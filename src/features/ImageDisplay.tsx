import React, { useState } from "react";

type ImageDisplayProps = {
    list: string[],
    img: string,
};

export const ImageDisplay = ({ list, img }: ImageDisplayProps) => {
    const currentIndex = list.findIndex(img);
    const [image, setImage] = useState(img);
    const [imgIndex, setImgIndex] = useState<number>(currentIndex);
    
    let index = currentIndex;
    const imageSelector = (newIndex) => {
        index = newIndex;

        

    };
    

    return (
        <div>
            <div>
                <button>{'<'}</button>
            </div>
            <div>
                <img></img>
            </div>            
            <div>
                <button>{'>'}</button>
            </div>
        </div>
    );
};