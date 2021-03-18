import React from 'react';
import CommentForm from './CommentFormComponent';
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';

    function stringToDate(dateString){
        var date = new Date(Date.parse(dateString));
        return(date.toDateString().slice(4));
    }

    function renderComments(commentsArray, addComment, dishId, errmessC){

        const comments = commentsArray.map((comment) => {
            if(comment!=null){
                return(
                    <div className="col-12">
                        <li>
                            {comment.comment}<br/><br/>
                            -- {comment.author}, {stringToDate(comment.date)}<br/><br/>
                        </li>
                    </div>
                );
            }
            else{
                return(
                    <div></div>
                );
            }
        });

        if (errmessC) {
            return(
                <h4>{errmessC}</h4>
            );
        }

        return(
            <div>
                <h4>Comments</h4>
                <ul className="list-unstyled">
                    {comments}
                </ul>
                <CommentForm dishId={dishId} addComment={addComment}/>
            </div>
        );
    }

    function DishDetail(props){

        if(props.isLoadingD){
            return(
                <div className="container">
                    <div className="row">
                        <Loading/>
                    </div>
                </div>
            );
        }
        else if (props.errmessD) {
            return(
                <div className="container">
                    <div className="row">
                        <h4>{props.errmessD}</h4>
                    </div>
                </div>
            );
        }
        else if(props.dish != null){

            return(
                <div className="container">
                    <div className="row">
                        <Breadcrumb>
                            <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                            <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                        </Breadcrumb>
                        <div className="col-12">
                            <h3>{props.dish.name}</h3>
                            <hr/>
                        </div>
                    </div>
                    <div  className="row d-flex">
                        <div className="col-12 col-md-5 m-1">
                            <Card>
                                <CardImg width="100%" src={baseUrl + props.dish.image} alt={props.dish.name}/>
                                <CardBody>
                                    <CardTitle>{props.dish.name}</CardTitle>
                                    <CardText>
                                        {props.dish.description}
                                    </CardText>
                                </CardBody>
                            </Card>
                        </div>
                        <div className="col-12 m-1 col-md-5">
                            {renderComments(props.comments, props.addComment, props.dish.id, props.errmessC)}
                        </div>
                    </div> 
                </div>
            );
        }
        else{
            return(
                <div></div>
            );
        }
    }

export default DishDetail;