import React from 'react'
import Link from 'next/link'

const Post = (post) => {
  return (
    <div> 
        <h2>My ID  </h2>
        <pre>
            { JSON.stringify(post, null, 2) }
        </pre>
        <Link href='/blog'> Retour </Link>
    </div>
  )
}

export default Post

// Since we have many posts, we gonna use getStaticPaths
// https://nextjs.org/docs/basic-features/data-fetching/get-static-paths
export async function getStaticPaths() {
    const URL= 'https://jsonplaceholder.typicode.com/posts';
    const res = await fetch(URL)
    const posty = await res.json();
    
    const path = posty.map ( p => ({ params: { id: p.id.toString() } }) )
    return {
      paths : path,
      fallback: false, // can also be true or 'blocking'
    }
}

export async function getStaticProps({params}) {
    const URL= 'https://jsonplaceholder.typicode.com/posts/' + params.id;
     const res = await fetch(URL)
     const posty = await res.json()
     return {
       props: {
          posty
       },
    }
}