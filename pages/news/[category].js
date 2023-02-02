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
  const { params, req, res, query } = context;
  console.log(query);
  const { category } = params;
  console.log({ category });

  //lets see how to use context fre setting cookie
  console.log(req.headers.cookie);
  res.setHeader('set-Cookie', ['name=yasir']);
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
