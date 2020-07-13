import React from "react";
import LikeCountComponenet from "./like_count_component";
import {fetchLikes, like, unlike} from '../../util/like_api_util';
import {faThumbsUp} from '@fortawesome/fontawesome-free-solid'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: [],
      likeId: null,
      haveFetchedLikes: false,
      errorClassName: "hidden",
    };
  }

  componentDidMount() {
    fetchLikes(
      this.props.apartmentId || sessionStorage.getItem("apartmentId")
    ).then(likes => {
      const like = likes.find(like => like.user_id === this.props.userId) || {};
      this.setState({likes, likeId: like.id, haveFetchedLikes: true});
    })
  }

  revealLikeErrorMessage = () => {
    this.setState({ errorClassName: "LikeButton-likeErrorMessage" });
    setTimeout(() => {
      this.setState({ errorClassName: "hidden" });
    }, 3000);
  };

  handleLike = () => {
    like({
      apartmentId: this.props.apartmentId,
      userId: this.props.userId,
    }).then(like => {
      const newLikes = this.state.likes.slice(0);
      newLikes.push(like);
      this.setState({likes: newLikes, likeId: like.id});
    })
  }

  handleUnlike = () => {
    const {apartmentId, userId} = this.props;
    unlike({
      apartmentId: apartmentId,
      userId: userId,
      likeId: this.state.likeId,
    }).then(deletedLike => {
      const newLikes = this.state.likes.filter(like => like.id !== deletedLike.id);
      this.setState({likes: newLikes, likeId: null});
    });
  };

  render() {
    const enableLikes = this.state.haveFetchedLikes && this.props.userId;
    const isLiked = !!this.state.likeId;
    return (
      <div className={`LikeButton ${isLiked ? "LikeButton-isLiked" : ""}`}>
        <div className={`LikeButton-likeButtonWrapper`}>
          <div
            onClick={
              enableLikes
                ? isLiked
                  ? this.handleUnlike
                  : this.handleLike
                : this.revealLikeErrorMessage
            }
          >
          <FontAwesomeIcon 
            size="2x"
            icon={faThumbsUp} 
          />
          </div>
        </div>
        <div className="LikeButton-likeCount">
          <LikeCountComponenet
            count={this.state.likes ? this.state.likes.length : 0}
            isLiked={isLiked}
          />
        </div>
        <p className={this.state.errorClassName}>
          Please login to like things!
        </p>
      </div>
    );
  }
}

export default LikeButton;
