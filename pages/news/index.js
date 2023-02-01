import React from 'react';

const NewsArticleList = ({ articles }) => {
  return (
    <div>
      <h1>List of News Articles</h1>
      {articles.map((article) => {
        return (
          <div key={article.id}>
            <h2>
              {' '}
              {article.id} {article.category} {article.title}
            </h2>
          </div>
        );
      })}
    </div>
  );
};

export default NewsArticleList;

export async function getServerSideProps() {
  const response = await fetch('http://localhost:3000/news');
  const data = await response.json();

  return {
    props: {
      articles: data,
    },
  };
}
