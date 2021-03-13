import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';


    function stringToDate(dateString){
        var date = new Date(Date.parse(dateString));
        return(date.toDateString().slice(4));
    }

    function renderComments(commentsArray){

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

        return(
            <div>
                <h4>Comments</h4>
                <ul className="list-unstyled">
                    {comments}
                </ul>
            </div>
        );
    }

    function DishDetail(props){

        if(props.dish!=null){

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
                                <CardImg width="100%" src={props.dish.image} alt={props.dish.name}/>
                                <CardBody>
                                    <CardTitle>{props.dish.name}</CardTitle>
                                    <CardText>
                                        {props.dish.description}
                                    </CardText>
                                </CardBody>
                            </Card>
                        </div>
                        <div className="col-12 m-1 col-md-5">
                            {renderComments(props.comments)}
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