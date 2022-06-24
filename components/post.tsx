import { triggerAsyncId } from 'async_hooks';
import { useRef, useEffect, useState } from 'react';
import styles from '../styles/Home.module.css'

//this is a typescript type alias
export type PostProps={
    postDate:string;
    title:string;
    post:any;
    tags:string[];
    currentTag:string;
}


//this is a prop that arranges and styles the content of the post
export default function Post(props:PostProps) {
    const ref = useRef<HTMLDivElement>(null);
    //let paragraphs = props.post.split('\n');
    const [postText, setPostText] = useState(props.post.props.children[0]);
    const [buttonText, setButtonText] = useState("Expand");

    //minimizes/expands posts
    function switchPostSize() {
        if (postText === props.post) {
            setPostText(props.post.props.children[0]);
            setButtonText("Expand");
        } else {
            setPostText(props.post);
            setButtonText("Minimize");
        }
    }

    return (
        <div ref={ref} className={styles.post}>
            <div className={styles.postDate}>{props.postDate}</div>
            <div className={styles.title}>{props.title}</div>
            <div className={styles.postText}>{postText}</div>
            <button className={styles.directoryTags} onClick={() => switchPostSize()}>{buttonText}</button>
            <div className={styles.tags}>{props.tags.join(" ")}</div>
        </div>
    )
}