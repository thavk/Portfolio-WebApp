import React, { useEffect } from "react";
import styles from "../styles/Home.module.scss";

type SearchBarProps = {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};


export const SearchBar = ({value, onChange}: SearchBarProps) => {

    return (
        <div>
            <input 
                type="text" 
                id="searchbar" 
                name="searchbar" 
                className={styles.textInput} 
                placeholder="search for @tag or Project. Example: @React or Project"
                value={value}
                onChange={onChange}
            />        
        </div>
    );
};