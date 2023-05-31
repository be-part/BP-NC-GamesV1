import {useState, useEffect} from "react"
import { GetComments } from "../Api";
import CommentCard from "./CommentCard";

function CommentsList ({review_id}){
const [commentsList, setCommentsList] = useState([]);
const [isLoading, setIsLoading] = useState(true);

useEffect(() => {
    GetComments(review_id)
    .then(({comments}) => {
    setCommentsList(comments);
    setIsLoading(false);
    })}, []);
    
    if (isLoading) return <p className="Loading"> Loading... </p>
    
    return (<>
    
    
    <ul id ="CommentList">
            {commentsList.map(({comment_id, votes, created_at, author, body}) => {
            return (<CommentCard
                commentID={comment_id}
                votes={votes}
                createdAt={created_at}
                author={author}
                body={body}
            />
            );
        })}
    </ul>
    </>)
}

export default CommentsList