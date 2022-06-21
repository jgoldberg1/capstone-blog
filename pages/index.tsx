import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import Post from '../components/post'
import { PostProps } from '../components/post'
import styles from '../styles/Home.module.css'
import DirectoryTag from '../components/directoryTag'



const Home: NextPage = () => {
  const [currentTag, setTag] = useState<any>(null);
  const allPosts:PostProps[] = [{postDate:"6/20/22", title:"first title", post: "lorem ipsum", tags:["test tag", "another tag"], currentTag}, 
      {postDate:"6/21/22", title:"second title", post: "dolor dic amet", tags:["another tag"], currentTag}];
  
  const [buttonStyle, setButtonStyle] = useState<string[]>()

  let tagsArr:string[] = [];
  for (let i = 0; i < allPosts.length; i++) {
    tagsArr = tagsArr.concat(allPosts[i].tags);
  }
  let uniqueTagsSet = new Set(tagsArr);
  let uniqueTags = Array.from(uniqueTagsSet);




  return (
    <div className={styles.container}>
      <Head>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to Jenna's Capstone Blog
        </h1>

        <div className={styles.directory}>
          {uniqueTags.map(singleTag => 
            <DirectoryTag key={singleTag}
              tag={singleTag}
              currentTag={currentTag}
              setTag={setTag}/> )}
        </div>

        <div>{currentTag}</div>

        {allPosts.map(singlePost => (
          <Post
            postDate={singlePost.postDate}   
            title={singlePost.title}
            post={singlePost.post}
            tags={singlePost.tags}
            currentTag={currentTag} />
        ))}



      </main>

      <footer className={styles.footer}>
      </footer>
    </div>
  )
}

export default Home
