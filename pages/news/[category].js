import React from 'react';

const ArticleListByCategory = ({ articles, category }) => {
  return (
    <div>
      <h1>
        Article List By Category <i>{category}</i>
      </h1>
      {articles.map((article) => {
        return (
          <div key={article.id}>
            <h2>{article.title}</h2>
            <p>{article.description}</p>
            <hr />
          </div>
        );
      })}
    </div>
  );
};

export default ArticleListByCategory;

export async function getServerSideProps(context) {
  const { params } = context;
  const { category } = params;
  console.log({ category });
  const response = await fetch(
    `http://localhost:3000/news?category=${category}`
  );
  const data = await response.json();

  return {
    props: {
      articles: data,
      category,
    },
  };
}
