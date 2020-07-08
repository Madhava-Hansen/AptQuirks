import React from 'react';
import {SweepstakesInput} from './sweepstakes_input';
import StarRatings from 'react-star-ratings';
import {createApartment} from '../../util/search_api_util';
import {signup, fetchUser} from '../../util/session_api_util';
import {addQuirk} from '../../util/quirk_api_util';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheck} from '@fortawesome/fontawesome-free-solid'
import {Checkbox} from '../pattern_library/pl_checkbox';
import {PrivacyPolicyLink} from '../footer/footer_privacy_policy_link';

class Sweepstakes extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: '', 
      body: '', 
      apartmentNum: '', 
      username: '', 
      star_rating: 0,
      email: '',
      apartmentParams: null,
      hasSelectedAddress: false,
      usernameExists: false,
    };
    this.autocomplete = null;
    this.emailValidationRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    this.defaultThumbnailUrl =
    "https://res.cloudinary.com/aptquirks/image/upload/c_limit,h_60,w_90/v1496452554/zmocgurx82ptorrqjcpz.png";
  }

  componentDidMount() {
    const defaultBounds = new google.maps.LatLngBounds(
      new google.maps.LatLng(40.571531, -74.22678),
      new google.maps.LatLng(40.90475, -73.716368)
    );

    const options = {
      bounds: defaultBounds,
    };
    this.input = document.getElementById("autocompleteSweepstakes");
    this.autocomplete = new google.maps.places.Autocomplete(
      this.input,
      options
    );
    this.autocomplete.addListener("place_changed", () => {
      this.handleSelectAutocomplete()
      this.setState({hasSelectedAddress: true});
    });
  }
  
  handleSelectAutocomplete = () => {
    const address = this.autocomplete.getPlace();
    const fullAddress = address.formatted_address;
    const lat = address.geometry.location.lat();
    const lon = address.geometry.location.lng();
    const finalFullAddress = this.formatAddress(fullAddress);
    const apartmentParams = {
      apartment: {
        street_address: finalFullAddress,
        longitude: lon,
        latitude: lat,
      },
    };
    this.setState({apartmentParams: apartmentParams});
  }

  formatAddress = fullAddress => {
    const splitAddress = fullAddress.split(" ");
    splitAddress.pop();
    const finalFullAddress = splitAddress
      .join(" ")
      .substring(0, splitAddress.join(" ").length - 1);
    return finalFullAddress;
  }
  
  update = name => e => this.setState({[name]: e.currentTarget.value});

  handleChangeStarRating = rating => this.setState({star_rating: rating});

  validateEmail = () => this.emailValidationRegex.test(this.state.email.toLowerCase());

  validateInputs = () => {
    const {body, apartmentNum, star_rating, email, username} = this.state;
    return  this.validateLength(body, 24) && !!apartmentNum && star_rating && this.validateEmail(email) && this.validateLength(username, 6);
  }

  validateLength = (string, length) => string.length >= length;

  updateUsername = name => e => {
    this.setState({[name]: e.currentTarget.value});
    this.validateUsername(e.currentTarget.value);
  }

  validateUsername = username => {
    fetchUser({user: {username: username}}).then(response => {
      if (!response) {
        this.setState({usernameExists: false});
      } else {
        this.setState({usernameExists: true});
      }
    })
  }

  getHash = () => {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for ( let i = 0; i < 36; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
 }


  handleSubmitReview = () => {
    if (this.validateInputs()) {
      const {title, body, apartmentParams, apartmentNum, star_rating, email, username} = this.state;
      createApartment(apartmentParams).then(response => {
        this.setState({apartmentId: response.id}, () => {
          const user = {user: {username, email, password: this.getHash()}, isSweepstakes: true}
          signup(user).then(response => {
            const quirk = {quirk: 
              {
                title, 
                body, 
                star_rating, 
                apartment_id: this.state.apartmentId, 
                apt_number: apartmentNum, 
                user_name: username,
                user_id: response.id,
                user_pic: this.defaultThumbnailUrl 
              }
            }
            addQuirk(quirk).then(() => {
              this.setState({revealSuccessMessage: true});
            })
          })
        });
      })
    }
  }

  render() {
    const {
      title, 
      body, 
      apartmentNum, 
      revealSuccessMessage, 
      username, 
      email, 
      usernameExists, 
    } = this.state;
    return (
      <div className="Sweepstakes">
        <div className="Sweepstakes-mainContent">
          <div className="Sweepstakes-headingWrapper">
            <h1 className="Sweepstakes-headingText">Review your apartment for a chance to win a month of free rent!</h1>
            <p className="Sweepstakes-subHeading">It will only take a minute and your anonymous review will help New Yorkers find their perfect home!</p>
          </div>
          {revealSuccessMessage ? (
            <>
              <div className="Sweepstakes-successMessageWrapper">
                <div className="Sweepstakes-successMessage">Successfully Submitted!</div>
                <FontAwesomeIcon className="Sweepstakes-successCheckmark" icon={faCheck} size="1x" />
              </div>
              <p className="Sweepstakes-shareOurPage">The final step to complete you entry is to share our website on one of your social media pages!</p>
            </>
          ): (
            <div className="Sweepstakes-inputsWrapper">
            <div className="Sweepstakes-autoCompleteWrapper">
              <p className="Sweepstakes-inputTitle">
                Building Address*
              </p>
              <input
                className="SweepstakesInput-input"
                id="autocompleteSweepstakes"
                type="text"
                placeholder=""
              >
              </input>
              {this.state.hasSelectedAddress && (
                <FontAwesomeIcon className="Sweepstakes-autoCompleteCheckmark" icon={faCheck} size="1x" />
              )}
            </div>
            <p className="Sweepstakes-inputTitle">Review Title (optional)</p>
            <SweepstakesInput 
              name="title"
              update={this.update}
              value={title}
              className="SweepstakesInput-input"
              isValid={this.validateLength(title, 6)}
            />
            <p className="Sweepstakes-inputTitle">Any advice to other future tenants?*</p>
            <SweepstakesInput 
              name="body"
              isTextArea
              update={this.update}
              value={body}
              className="SweepstakesInput-input"
              isValid={this.validateLength(body, 24)}
            />
            <p className="Sweepstakes-inputTitle">Apartment Number (optional)</p>
            <SweepstakesInput 
              name="apartmentNum"
              update={this.update}
              value={apartmentNum}
              className="SweepstakesInput-input"
              isValid={this.validateLength(apartmentNum, 1)}
            />
            <p className="Sweepstakes-inputTitle">Create an anonymous username*</p>
            <SweepstakesInput
              name="username"
              update={this.updateUsername}
              type="text"
              value={username}
              className="SweepstakesInput-input"
              isValid={!usernameExists && this.validateLength(username, 6)}
            />
            {usernameExists && (
              <p className="Sweepstakes-usernameError">username already exists</p>
            )}
            <p className="Sweepstakes-inputTitle">Email Address (Not shown to anyone)*</p>
            <SweepstakesInput
              name="email"
              update={this.update}
              type="email"
              className="SweepstakesInput-input"
              isValid={this.validateEmail(email)}
            />
            <div className="Sweepstakes-bottomSectionWrapper">
              <div className="Sweepstakes-starRating">
                <p className="QuirkForm-ratingTitle">How would you rate your overall experience?*</p>
                  <StarRatings 
                    rating={this.state.star_rating}
                    starRatedColor="#192841"
                    numberOfStars={5}
                    starDimension="35px"
                    starSpacing="3px"
                    name="Sweepstakes star rating"
                    changeRating={this.handleChangeStarRating}
                    starHoverColor="#FDCC0D"
                  />
              </div>
              <div className="SessionForm-termsAndConditionsWrapper">
                <p className="Sweepstakes-conditions">By submitting I accept the
                  <a
                    target="_blank"
                    className="Sweepstakes-termsAndConditionsLink" 
                    href="https://app.termly.io/document/terms-of-use-for-website/c1ad278a-901a-4f1b-9e14-54e318c56599"> terms and conditions
                  </a> the <a
                    className="Sweepstakes-privacyPolicy"
                    target='_blank'
                    href="https://app.termly.io/document/privacy-policy/3a1d9dd9-cb57-4685-9708-1719215c6bec">
                    privacy policy
                  </a> and the <a className="Sweepstakes-rules">sweepstakes rules.</a>
                </p>
              </div>
              <button 
                className="Sweepstakes-button"
                onClick={this.handleSubmitReview}>
                Submit Review!
              </button>
            </div>
          </div>
          )}
          </div>
        </div>
    )
  }

}

export default Sweepstakes;