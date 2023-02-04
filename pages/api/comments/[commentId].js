import { comments } from '../../../data/comments';

export default function handler(req, res) {
  //this commentId is the file name
  const { commentId } = req.query;

  if (req.method === 'GET') {
    const comment = comments.find(
      (comment) => comment.id === parseInt(commentId)
    );
    res.status(200).json(comment);
  } else if (req.method === 'DELETE') {
    const deletedComment = comments.find(
      (comment) => comment.id === parseInt(commentId)
    );
    console.log('need to delete', deletedComment);

    const index = comments.findIndex(
      (comment) => comment.id === parseInt(commentId)
    );
    console.log('index of deletable comment', index);
    comments.splice(index, 1);
    res.status(200).json(deletedComment);
  }
}
