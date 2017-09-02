import React from 'react';
import LikeCountComponenet from './like_count_component';
import { withRouter } from 'react-router-dom';

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {errorMessage: ""};
    this.likeStatusChecker = this.likeStatusChecker.bind(this);
    this.createIdsObjectForLike = this.createIdsObjectForLike.bind(this);
    this.formattedLike = this.formattedLike.bind(this);
    this.handleLike = this.handleLike.bind(this);
    this.handleUnlike = this.handleUnlike.bind(this);
    this.unliked = false;
  }

  createIdsObjectForLike() {
    let { userId } = this.props;
    let apartmentId = this.props.location.pathname.split("").pop();
    this.ids = {like: {apartment_id: apartmentId, user_id: userId, status: "true" }};
  }

  likeStatusChecker(likesIndex) {
    if (likesIndex.likes) {
      let likes = likesIndex.likes;
      const that = this;
      that.likeStatus = false;
      that.likeCount = likes.length;
      for (let i = 0; i < likes.length; i ++) {
        if (likes[i].user_id === that.props.userId) {
          that.likeStatus = true;
          that.currentLike = likes[i];
          break;
        }
      }
    }
  }

  formattedLike() {
    this.likeId = this.currentLike.id;
    const { apartmentId, userId } = this.props;
    this.formattedLikeObject = {like: {apartment_id: apartmentId, user_id: userId, id: this.likeId }};
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.apartmentId != nextProps.apartmentId) {
      this.props.fetchLikes({like: {apartment_id: nextProps.apartmentId} });
    }
  }

  handleLike() {
    if (this.props.userId) {
      this.props.like(this.ids);
    } else {
      this.setState({errorMessage: "please login to like things!"});
    }
  }

  handleUnlike() {
    if (this.props.userId) {
      this.props.unlike(this.formattedLikeObject);
    } else {
      this.setState({errorMessage: "login to like things!"});
    }
  }

  componentWillMount() {
    this.createIdsObjectForLike();
    this.props.fetchLikes(this.ids);
  }

  render() {
    this.likeStatusChecker(this.props.likesIndex);
    if (this.likeStatus) {
      this.formattedLike();
    }
    const { currentLike, like, unlike} = this.props;
    if (this.likeStatus) {
      return (
        <ul className="like">
          <li className="like-button">
            <button className="liked-button" onClick={ this.handleUnlike }>unlike</button>
          </li>
          <li className="like-count">
            <LikeCountComponenet count={this.likeCount} likeStatus={this.likeStatus} />
          </li>
          <p>{this.state.errorMessage}</p>
        </ul>
      )
    } else {
      return (
        <ul className="like">
          <li className="like-button">
            <button onClick={ this.handleLike }>like</button>
          </li>
          <li className="like-count">
            <LikeCountComponenet count={this.likeCount} likeStatus={this.likeStatus} />
          </li>
          <p>{this.state.errorMessage}</p>
        </ul>
      )
    }
  }


}



export default withRouter(LikeButton);
