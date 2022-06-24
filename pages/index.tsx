import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import Post from '../components/post'
import { PostProps } from '../components/post'
import styles from '../styles/Home.module.css'
import DirectoryTag from '../components/directoryTag'
import { allPosts, PostData } from '../postData'


const Home: NextPage = () => {
  const [currentTag, setTag] = useState<any>(null);
  const [first, setFirst] = useState<number>(0);
  const [pageNum, setPageNum] = useState<number>(1);
  const [filteredPosts, setFilteredPosts] = useState<PostData[]>(allPosts);
  const [maxPages, setMaxPages] = useState<number>(Math.floor((allPosts.length/10)+1));

  let tagsArr:string[] = [];
  for (let i = 0; i < allPosts.length; i++) {
    tagsArr = tagsArr.concat(allPosts[i].tags);
  }
  let uniqueTagsSet = new Set(tagsArr);
  let uniqueTags = Array.from(uniqueTagsSet);

  //Controls page navigation.
  function updateFirst(direction:string) {
    if ((direction == "right" && first+10 > filteredPosts.length) || (direction == "left" && first-10 < 0)) {
      setFirst(first);
    }
    else if (direction == "right") {
      setFirst(first+10);
    } else {
      setFirst(first-10);
    }
  }

  //updates filteredPosts state based on currentTag, when currentTag changes. updates maxPages according to the new length of filteredPosts
  useEffect(() => {
    if (currentTag !== null) {
      setFilteredPosts(allPosts.filter(singlePost => singlePost.tags.some(tag => tag === currentTag)));
      setMaxPages(Math.floor((filteredPosts.length/10)+1))
    } else {
      setFilteredPosts(allPosts);
      setMaxPages(Math.floor((allPosts.length/10)+1))
    } 
  }, [currentTag]);

  //scrolls back to top of page when page changes. Updates pageNum
  useEffect(() => {
    window.scrollTo(0,0)
    console.log(first)
    setPageNum(first == 0 ? 1 : (first/10)+1);
  }, [first])

  return (
    <div className={styles.container}>
      <Head>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to Jenna&#39;s Capstone Blog
        </h1>

        <div className={styles.directory}>
          {uniqueTags.map(singleTag => 
            <DirectoryTag key={singleTag}
              tag={singleTag}
              currentTag={currentTag}
              setTag={setTag}/> )}
        </div>

        {filteredPosts.slice(first, first+10).map((singlePost, index) => (
          <Post key={index}
            postDate={singlePost.postDate}   
            title={singlePost.title}
            post={singlePost.post}
            tags={singlePost.tags}
            currentTag={currentTag} />
        ))}

        <div className={styles.navButtonBox}>
          <button className={styles.navButton} onClick={() => updateFirst("left")}>Back</button>
          <div>Page {pageNum}/{maxPages}</div>
          <button className={styles.navButton} onClick={() => updateFirst("right")}>Next</button>
        </div>


      </main>

      <footer className={styles.footer}>
      </footer>
    </div>
  )
}

export default Home
