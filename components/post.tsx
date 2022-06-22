import { useRef, useEffect, useState } from 'react';
import styles from '../styles/Home.module.css'

//this is a typescript type alias
export type PostProps={
    postDate:string;
    title:string;
    post:string;
    tags:string[];
    currentTag:string;
}


//this is a prop that arranges and styles the content of the post
export default function Post(props:PostProps) {
    const ref = useRef<HTMLDivElement>(null);
    const [postText, setPostText] = useState(props.post);
    const [buttonText, setButtonText] = useState("Expand");

    let altText = "this is alternative text";

    function switchPostSize() {
        if (postText === props.post) {
            setPostText(altText);
            setButtonText("Minimize");
        } else {
            setPostText(props.post);
            setButtonText("Expand");
        }
    }

    useEffect(() => {
        if (!props.tags.some(tag => props.currentTag === tag) && props.currentTag !== null) {
            ref.current ? ref.current.style.visibility='hidden' : null;
        } else {
            ref.current ? ref.current.style.visibility='visible' : null; 
        }
    }
    )
    
    return (
        <div ref={ref} className={styles.post}>
            <div className={styles.postDate}>{props.postDate}</div>
            <div className={styles.title}>{props.title}</div>
            <div>{postText}</div>
            <button onClick={() => switchPostSize()}>{buttonText}</button>
            <div className={styles.tags}>{props.tags}</div>
        </div>
    )
}