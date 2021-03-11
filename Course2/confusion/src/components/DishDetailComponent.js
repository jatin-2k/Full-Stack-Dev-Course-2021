import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component{
    constructor(props){
        super(props);

        this.state = {

        };
    }

    stringToDate(dateString){
        var date = new Date(Date.parse(dateString));
        return(date.toDateString().slice(4));
    }

    renderComments(commentsArray){

        const comments = commentsArray.map((comment) => {
            if(comment!=null){
                return(
                    <div className="col-12">
                        <li>
                            {comment.comment}<br/><br/>
                            -- {comment.author}, {this.stringToDate(comment.date)}<br/><br/>
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

    render(){
        if(this.props.dish!=null){

            return(
                <div  className="row d-flex">
                    <div className="col-12 col-md-5 m-1">
                        <Card>
                            <CardImg width="100%" src={this.props.dish.image} alt={this.props.dish.name}/>
                            <CardBody>
                                <CardTitle>{this.props.dish.name}</CardTitle>
                                <CardText>
                                    {this.props.dish.description}
                                </CardText>
                            </CardBody>
                        </Card>
                    </div>
                    <div className="col-12 m-1 col-md-5">
                        {this.renderComments(this.props.dish.comments)}
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

}

export default DishDetail;