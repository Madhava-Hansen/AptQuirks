import React from 'react';
import LikeCountComponenet from './like_count_component';

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: [], 
      likeId: null, 
      haveFetchedLikes: false,
      errorClassName: 'hidden'
    };
  }

  componentDidMount() {
    this.props.fetchLikes(this.props.apartmentId || sessionStorage.getItem('apartmentId'));
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    const {likesIndex: {likes}, userId} = nextProps;
    if ((likes && likes.length > 0) && (prevState.likes !== likes)) {
      const like = likes.find(like => like.user_id === userId) || {};
      return {likes: likes, likeId: like.id, haveFetchedLikes: true}
    };

    return null;
  }

  revealLikeErrorMessage = () => {
    this.setState({errorClassName: 'like-error-message'});
    setTimeout(() => {
      this.setState({errorClassName: 'hidden'})
    }, 3000);
  }

  handleLike = () => this.props.like({apartmentId: this.props.apartmentId, userId: this.props.userId})

  handleUnlike = () => {
    const {apartmentId, userId, unlike} = this.props;
    unlike({apartmentId: apartmentId, userId: userId, likeId: this.state.likeId}).then(() => {
      this.setState({likeId: null});
    });
  }

  render() {
    const enableLikes = this.state.haveFetchedLikes && this.props.userId;
    const isLiked = !!this.state.likeId;
    return (
      <div className='like'>
        <div className='like-button'>
          <button 
            className={isLiked ? 'liked-button' : ''} 
            onClick={enableLikes ? (isLiked ? this.handleUnlike : this.handleLike) : this.revealLikeErrorMessage}>
            like
          </button>
        </div>
        <div className='like-count'>
          <LikeCountComponenet 
            count={this.state.likes.length} 
            isLiked={isLiked} 
          />
        </div>
        <p id='like-error-message' className={this.state.errorClassName}>Please login to like things!</p>
      </div>
    )
  }
}

export default LikeButton;
