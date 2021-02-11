import { db } from "./firebase";

export const getComments = async (article) => {
  return db
    .ref(`articles/${article}`)
    .once("value")
    .then((snapshot) => {
      let comments = [];

      snapshot.forEach((comment) => {
        const cmnt = comment.val();
        let replies = [];

        if (comment.child("replies")) {
          comment.child("replies").forEach((reply) => {
            replies.push(reply.val());
          });
        }
        cmnt.replies = replies;
        comments.push(cmnt);
      });
      return comments;
    });
};
