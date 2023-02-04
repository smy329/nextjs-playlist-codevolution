import React, { useState } from 'react';

const CommentsPage = () => {
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState('');

  const fetchComments = async () => {
    const response = await fetch('/api/comments');
    const data = await response.json();
    setComments(data);
  };

  const submitComment = async () => {
    const response = await fetch('/api/comments', {
      method: 'POST',
      body: JSON.stringify({ comment }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();
    console.log(data);
  };

  const deleteComment = async (commentId) => {
    const response = await fetch(`/api/comments/${commentId}`, {
      method: 'DELETE',
    });
    const data = response.json();
    console.log('data from btn clicked', data);
    fetchComments();
  };
  return (
    <div>
      <>
        <input
          type="text"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <button onClick={submitComment}>Comment</button>
        <button onClick={fetchComments}>Load Comments</button>
        {comments.map((comment) => {
          return (
            <div key={comment.id}>
              {comment.id}
              {comment.text}
              <button onClick={() => deleteComment(comment.id)}>
                Delete Comment
              </button>
              <hr />
            </div>
          );
        })}
      </>
    </div>
  );
};

export default CommentsPage;
