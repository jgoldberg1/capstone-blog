import { useRef, useEffect } from 'react';
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
            <div>{props.post}</div>
            <div className={styles.tags}>{props.tags}</div>
        </div>
    )
}