import React from 'react';
import LikeCountComponenet from './like_count_component';
import { withRouter } from 'react-router-dom';
import { receiveLikes } from '../../actions/like_actions';

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { likes: [] };
    this.likeStatusChecker = this.likeStatusChecker.bind(this);
    this.formattedLike = this.formattedLike.bind(this);
    this.handleLike = this.handleLike.bind(this);
    this.handleUnlike = this.handleUnlike.bind(this);
    this.likeStatusSubFunc = this.likeStatusSubFunc.bind(this);
    this.unlikTrigger = false;
    this.likeCount = 0;
    this.likesFetched = false;
  }

  revealLikeErrorMessage() {
    let errors = document.getElementById("like-error-message");
    errors.className = "like-error-message";
    window.setTimeout(() => {
      errors.className = "hidden";
    }, 3000);
  }

  likeStatusChecker() {
      let likesClone = this.state.likes.slice(0);
      const that = this;
      that.likeStatus = false;
      for (let i = 0; i < likesClone.length; i ++) {
        if (likesClone[i].user_id === that.props.userId) {
          that.likeStatusSubFunc(likesClone, i);
          return;
        }
    }

    this.likeCount = likesClone.length;
  }

  dispatchAfterDelete(likesClone) {
    let { dispatch } = this.props;
    dispatch(receiveLikes(likesClone));
  }

  likeStatusSubFunc(likesClone, idx) {
    if (this.unlikTrigger) {
      likesClone.splice(idx, 1);
      this.likeCount = likesClone.length;
      this.dispatchAfterDelete(likesClone);
      this.unlikTrigger = false;
      this.currentLike = null;
    } else {
      this.likeCount = likesClone.length;
      this.likeStatus = true;
      this.currentLike = likesClone[idx];
    }
  }

  setApartmentId() {
    if (this.props.apartmentId === undefined) {
      this.apartmentId = this.props.location.pathname.split("/").pop();
    } else {
      this.apartmentId = this.props.apartmentId;
    }
  }

  formattedLike() {
    this.setApartmentId();
    this.formattedLikeObject = {like: {apartment_id: this.apartmentId,
      user_id: this.props.userId, id: this.currentLike.id }};
  }

  componentWillReceiveProps(nextProps) {
    this.setApartmentId();
    if (this.apartmentId != nextProps.apartmentId) {
      this.props.fetchLikes(nextProps.apartmentId);
    }
    if (nextProps.likesIndex.likes) {
      this.setState({ likes: nextProps.likesIndex.likes });
    }
  }

  handleLike() {
    if (this.props.userId) {
      let { apartmentId, userId } = this.props;
      let ids = {like: {apartment_id: apartmentId, user_id: userId } };
      this.props.like(ids);
    } else {
      this.revealLikeErrorMessage();
    }
  }

  handleUnlike() {
    this.unlikTrigger = true;
    if (this.props.userId) {
      this.props.unlike(this.formattedLikeObject);
      this.likeStatusChecker();
    } else {
      this.revealLikeErrorMessage();
    }
  }

  componentWillMount() {
    this.setApartmentId();
    this.props.fetchLikes(this.apartmentId);
  }

  render() {
    this.likeStatusChecker(this.state.likes);
    if (this.likeStatus) {
      this.formattedLike();
    }
    const { currentLike, like, unlike} = this.props;
    if (this.likeStatus) {
      return (
        <ul className="like">
          <li className="like-button">
            <button className="liked-button" onClick={ this.handleUnlike }>like</button>
          </li>
          <li className="like-count">
            <LikeCountComponenet count={ this.likeCount } likeStatus={ this.likeStatus } />
          </li>
          <p id="like-error-message" className="hidden">Please login to like things!</p>
        </ul>
      )
    } else {
      return (
        <ul className="like">
          <li className="like-button">
            <button onClick={ this.handleLike }>like</button>
          </li>
          <li className="like-count">
            <LikeCountComponenet count={ this.likeCount } likeStatus={ this.likeStatus } />
          </li>
          <p id="like-error-message" className="hidden">Please login to like things!</p>
        </ul>
      )
    }
  }
}

export default withRouter(LikeButton);
