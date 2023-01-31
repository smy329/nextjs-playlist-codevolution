import React from 'react';

const Post = ({ post }) => {
  return (
    <div>
      <h2>
        {' '}
        {post.id}.{post.title}{' '}
      </h2>
      <p>{post.body}</p>
    </div>
  );
};

export default Post;

//In case of dynamic SSG page, we need to inform Nextjs about possible values of dynamic section. here this is postId. We need to tell something about postTd
export async function getStaticPaths() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await response.json();

  //as we don't know how many posts will be there, that means we can't tell possible path values.
  //so we will fetch the post id from api.
  const paths = data.map((post) => {
    return {
      params: {
        postId: `${post.id}`,
      },
    };
  });
  return {
    // paths: [
    //   {
    //     params: { postId: '1' },
    //   },
    //   {
    //     params: { postId: '2' },
    //   },
    //   {
    //     params: { postId: '3' },
    //   },
    //   {
    //     params: { postId: '4' },
    //   },
    //   {
    //     params: { postId: '5' },
    //   },
    // ],
    paths: paths,
    fallback: false,
  };
}

// we can get the route parameter inside getStaticProps through context
export async function getStaticProps(context) {
  //this context carries a key named params
  const { params } = context;
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.postId}`
  );
  const data = await response.json();
  return {
    props: {
      post: data,
    },
  };
}
