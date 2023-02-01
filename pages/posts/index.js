import Link from 'next/link';
import React from 'react';

const PostList = ({ posts }) => {
  return (
    <>
      <h1>List of Posts</h1>
      {posts.map((post) => {
        return (
          <div key={post.id}>
            <Link href={`posts/${post.id}`}>
              <h2>
                {post.id}.{post.title}
              </h2>
            </Link>
            <hr />
          </div>
        );
      })}
    </>
  );
};

export default PostList;

export async function getStaticProps() {
  console.log('Generating/Regenerating Product List');
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await response.json();
  //console.log(data);

  return {
    props: {
      posts: data,
    },
    // by setting revalidate we are introducing ISR(Incremental Static Regeneration)
    revalidate: 10,
    //here 10 means we area asking nextjs to revalidaet this page after every 10 seconds
  };
}
