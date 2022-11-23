import Link from 'next/link'
// import React, { useEffect, useState } from 'react'

const Blog = ({the_posts}) => {
//  const [posts, setPosts] = useState([]);

  // useEffect(() => {
  //   fetch(URL)
  //   .then((res) => res.json())
  //   .then(posts => setPosts(posts))

  // }, []);
  return (
    <div>
        <h2>Welcom to my Blog</h2>
        <ul>  
            {
                the_posts?.map(p =>   <li key={p.id}> <Link href={"/blog/" + p.id}> {p.title} </Link></li>  )
            } 
        </ul>
    </div>
  )
}

export default Blog

export async function getStaticProps() {
 const URL= 'https://jsonplaceholder.typicode.com/posts?_limit=6';
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const res = await fetch(URL)
  const posty = await res.json()

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      the_posts : posty
    },
  }
}