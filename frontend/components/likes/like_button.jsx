import React from 'react';
import LikeCountComponenet from './like_count_component';

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.likeStatusChecker = this.likeStatusChecker.bind(this);
    this.createIdsObjectForLike = this.createIdsObjectForLike.bind(this);
    this.formattedLike = this.formattedLike.bind(this);
  }

  createIdsObjectForLike(nextProps = this.props) {
    const { apartmentId, userId } = nextProps;
    this.ids = {like: {apartment_id: apartmentId, user_id: userId, status: "true" }};
  }

  likeStatusChecker(likesIndex) {
    const that = this;
    const likesArray = Object.keys(likesIndex).map(key => likesIndex[key]);
    that.likeStatus = false;
    that.likeCount = likesArray.length;
    for (let i = 0; i < likesArray.length; i ++) {
      if (likesArray[i].user_id === that.props.userId) {
        that.likeStatus = true;
        that.currentLike = likesArray[i];
        break;
      }
    }
  }

  formattedLike() {
    this.likeId = this.currentLike.id;
    const { apartmentId, userId } = this.props;
    this.formattedLikeObject = {like: {apartment_id: apartmentId, user_id: userId, id: this.likeId }};
  }

  componentWillReceiveProps(nextProps) {
    this.createIdsObjectForLike(nextProps);
    if (nextProps.likesIndex.currentLike === null) {
      this.props.fetchLikes(this.ids);
      return;
    }
    if (JSON.stringify(this.props.likesIndex) != JSON.stringify(nextProps.likesIndex)) {
      this.likeStatusChecker(nextProps.likesIndex);
    }
    if (this.props.apartmentId != nextProps.apartmentId) {
      this.props.fetchLikes(this.ids);
    }
  }

  componentWillMount() {
    this.createIdsObjectForLike();
    this.props.fetchLikes(this.ids);
    this.likeStatusChecker(this.props.likesIndex);
  }

  render() {
    if (this.likeStatus) {
      this.formattedLike();
    }
    const { currentLike, like, unlike} = this.props;
    if (this.likeStatus) {
      return (
        <div>
          <button onClick={ () => unlike(this.formattedLikeObject) }>Unlike</button>
          <LikeCountComponenet count={this.likeCount} />
        </div>
      )
    } else {
      return (
        <div>
          <button onClick={ () => like(this.ids) }>Like</button>
          <LikeCountComponenet count={this.likeCount} />
        </div>
      )
    }
  }


}



export default LikeButton;
