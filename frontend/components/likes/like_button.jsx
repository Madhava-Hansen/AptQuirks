import React from 'react';
import LikeCountComponenet from './like_count_component';
import {withRouter} from 'react-router-dom';

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: [], 
      likeId: null, 
      isLiked: false, 
      haveFetchedLikes: false,
      errorClassName: 'hidden'
    };
  }

  componentDidMount() {
    this.setApartmentId();
    this.props.fetchLikes(this.apartmentId);
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    const {likesIndex: {likes}, userId} = nextProps;
    if ((likes && likes.length > 0) && (prevState.likes !== likes)) {
      const like = likes.find(like => like.user_id === userId) || {};
      return {likes: likes, likeId: like.id, isLiked: !!like.id, haveFetchedLikes: true}
    };

    return null;
  }

  revealLikeErrorMessage = () => {
    this.setState({errorClassName: 'like-error-message'});
    window.setTimeout(() => {
      this.setState({errorClassName: 'hidden'})
    }, 3000);
  }

  setApartmentId = () => {
    this.apartmentId = this.props.apartmentId || this.props.location.pathname.split('/').pop();
  }

  handleLike = () => {
    const {userId, apartmentId, like} = this.props;
    like({apartmentId, userId})
  }

  handleUnlike = () => {
    const {apartmentId, userId, unlike} = this.props;
    unlike({apartmentId: apartmentId, userId: userId, likeId: this.state.likeId}).then(() => {
      this.setState({likeId: null, isLiked: null});
    });
  }

  render() {
      const enableLikes = this.state.haveFetchedLikes && this.props.userId;
      return (
        <div className='like'>
          <div className='like-button'>
            <button 
              className={this.state.isLiked ? 'liked-button' : ''} 
              onClick={enableLikes ? (this.state.isLiked ? this.handleUnlike : this.handleLike) : this.revealLikeErrorMessage}>
              like
            </button>
          </div>
          <div className='like-count'>
            <LikeCountComponenet 
              count={this.state.likes.length} 
              isLiked={this.state.isLiked} 
            />
          </div>
          <p id='like-error-message' className={this.state.errorClassName}>Please login to like things!</p>
        </div>
      )
  }
}

export default withRouter(LikeButton);
