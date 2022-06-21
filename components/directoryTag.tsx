import styles from '../styles/Home.module.css'
import { useEffect, useRef, useState } from 'react'




export type directoryTagProps = {
    tag: string;
    currentTag: any;
    setTag: (p:any) => void;
}

//this is a prop that arranges and styles the content of the post
export default function DirectoryTag(props:directoryTagProps) {
    const ref = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        if (props.currentTag !== props.tag) ref.current ? ref.current.style.color='black' : null;
    }
    )

    function selectTag(tag:string) {
        if (tag === props.currentTag) {
          props.setTag(null);
          ref.current ? ref.current.style.color='black' : null;
        } else {
          props.setTag(props.tag);
          ref.current ? ref.current.style.color='rebeccapurple' : null;
        }
    }

    return (
      <button ref={ref} className={styles.directoryTags} onClick={() => selectTag(props.tag)}>{props.tag}</button>
    )
}  
    
