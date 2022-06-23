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
    let paragraphs = props.post.split('\n');
    const [postText, setPostText] = useState(paragraphs[0]);
    const [buttonText, setButtonText] = useState("Expand");


    function switchPostSize() {
        if (postText === props.post) {
            setPostText(paragraphs[0]);
            setButtonText("Expand");
        } else {
            setPostText(props.post);
            setButtonText("Minimize");
        }
    }

    // useEffect(() => {
    //     if (!props.tags.some(tag => props.currentTag === tag) && props.currentTag !== null) {
    //         ref.current ? ref.current.style.display='none' : null;
    //     } else {
    //         ref.current ? ref.current.style.display='block' : null; 
    //     }
    // }
    // ) 
    
    return (
        <div ref={ref} className={styles.post}>
            <div className={styles.postDate}>{props.postDate}</div>
            <div className={styles.title}>{props.title}</div>
            <div>{postText}</div>
            <button className={styles.directoryTags} onClick={() => switchPostSize()}>{buttonText}</button>
            <div className={styles.tags}>{props.tags}</div>
        </div>
    )
}