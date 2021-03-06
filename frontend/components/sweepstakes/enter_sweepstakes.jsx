import React from "react";
import { SweepstakesInput } from "./sweepstakes_input";
import StarRatings from "react-star-ratings";
import { createApartment } from "../../util/search_api_util";
import { signup, fetchUser } from "../../util/session_api_util";
import { addQuirk } from "../../util/quirk_api_util";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/fontawesome-free-solid";
import { TwitterShareButton, TwitterIcon } from "react-share";
import ProgressBar from "@ramonak/react-progress-bar";

class Sweepstakes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "empty",
      body: "",
      apartmentNum: "",
      username: "",
      star_rating: 0,
      email: "",
      apartmentParams: null,
      hasSelectedAddress: false,
      usernameExists: false,
      isAdTraffic: false,
      failedValidation: false,
      currentProgress: 0,
      usernameTouched: false,
      bodyTouched: false,
    };
    this.autocomplete = null;
    this.emailValidationRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    this.defaultThumbnailUrl =
      "https://res.cloudinary.com/aptquirks/image/upload/c_limit,h_60,w_90/v1496452554/zmocgurx82ptorrqjcpz.png";
    this.starRatingColor = "#FDCC0D";
    this.bodyLengthMinimum = 120;
  }

  componentDidMount() {
    scrollTo(0, 0);
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
      this.handleSelectAutocomplete();
      this.setState({ hasSelectedAddress: true }, () => {
        this.updateProgress();
        fbq("trackCustom", "addressSelectionChange");
      });
    });
    const { search } = this.props.location;
    const removedQuestionMark = search.slice(1, search.length);
    const queryStrings = {};
    removedQuestionMark.split("&").forEach((query) => {
      const data = query.split("=");
      queryStrings[data[0]] = data[1];
    });
    if (queryStrings["src"] === "giveaway") {
      this.setState({ isAdTraffic: true });
    }
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
    this.setState({ apartmentParams: apartmentParams });
  };

  formatAddress = (fullAddress) => {
    const splitAddress = fullAddress.split(" ");
    splitAddress.pop();
    const finalFullAddress = splitAddress
      .join(" ")
      .substring(0, splitAddress.join(" ").length - 1);
    return finalFullAddress;
  };

  update = (name) => (e) => {
    const value = e.currentTarget.value;
    fbq("trackCustom", "inputChange", {
      inputName: `${name}: value: ${value}`,
    });
    this.setState({ [name]: value }, () => {
      this.updateProgress();
    });
    if (name === "body") {
      this.setState({ bodyTouched: true });
    }
  };

  handleChangeStarRating = (rating) => {
    this.setState({ star_rating: rating }, () => {
      this.updateProgress();
      fbq("trackCustom", "starRatingSelection");
    });
  };

  validateEmail = () =>
    this.emailValidationRegex.test(this.state.email.toLowerCase());

  validateInputs = () => {
    const { body, usernameExists, star_rating, email, username } = this.state;
    return (
      this.validateLength(body, this.bodyLengthMinimum) &&
      !!star_rating &&
      this.validateEmail(email) &&
      this.validateLength(username, 6) &&
      !usernameExists
    );
  };

  validateLength = (string, length) => string.length >= length;

  updateUsername = (name) => (e) => {
    fbq("trackCustom", "usernameInputChange", {
      inputName: name,
      inputValue: e.currentTarget.value,
    });
    this.setState(
      { [name]: e.currentTarget.value, usernameTouched: true },
      () => {
        this.updateProgress();
      }
    );
    this.validateUsername(e.currentTarget.value);
  };

  validateUsername = (username) => {
    fetchUser({ user: { username: username } }).then((response) => {
      if (!response) {
        this.setState({ usernameExists: false });
      } else {
        this.setState({ usernameExists: true });
      }
    });
  };

  getHash = () => {
    let result = "";
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const charactersLength = characters.length;
    for (let i = 0; i < 36; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
  };

  updateProgress = () => {
    let currentProgress = 0;
    if (this.validateLength(this.state.username, 6)) {
      currentProgress += 20;
    }
    if (this.validateLength(this.state.body, this.bodyLengthMinimum)) {
      currentProgress += 20;
    }
    if (this.validateEmail(this.state.email)) {
      currentProgress += 20;
    }
    if (this.state.hasSelectedAddress) {
      currentProgress += 20;
    }
    if (this.state.star_rating > 0) {
      currentProgress += 20;
    }
    this.setState({ currentProgress: currentProgress });
  };

  handleSubmitReview = () => {
    if (this.validateInputs()) {
      const {
        title,
        body,
        apartmentParams,
        apartmentNum,
        star_rating,
        email,
        username,
      } = this.state;
      createApartment(apartmentParams).then((response) => {
        this.setState({ apartmentId: response.id }, () => {
          const user = {
            user: {
              username,
              email,
              password: this.getHash(),
              isSweepstakes: true,
            },
          };
          signup(user).then((response) => {
            const quirk = {
              quirk: {
                title,
                body,
                star_rating,
                apartment_id: this.state.apartmentId,
                apt_number: apartmentNum,
                user_name: username,
                user_id: response.id,
                user_pic: this.defaultThumbnailUrl,
              },
            };
            addQuirk(quirk).then(() => {
              this.setState({ revealSuccessMessage: true });
              scrollTo(0, 0);
            });
          });
        });
      });
    } else {
      this.setState({ failedValidation: true });
    }
  };

  render() {
    const {
      body,
      revealSuccessMessage,
      username,
      email,
      usernameExists,
      isAdTraffic,
      apartmentNum,
      currentProgress,
      star_rating,
      failedValidation,
      hasSelectedAddress,
      usernameTouched,
      bodyTouched,
    } = this.state;

    const hasValidUsername = this.validateLength(username, 6);
    const hasValidEmail = this.validateEmail(email);
    const hasValidBody = this.validateLength(body, this.bodyLengthMinimum);
    const hasValidApartmentNumber = this.validateLength(apartmentNum, 1);
    const hasValidStarRating = star_rating > 0;

    return (
      <div className="Sweepstakes">
        {!revealSuccessMessage && currentProgress > 0 && (
          <div className="Sweepstakes-progressBar">
            <ProgressBar bgcolor="#4BB543" completed={currentProgress} />
          </div>
        )}
        <div className="Sweepstakes-mainContent">
          {!revealSuccessMessage && (
            <div className="Sweepstakes-headingWrapper">
              {isAdTraffic ? (
                <>
                  <p className="Sweepstakes-headingText">
                    Review an apartment below to complete you entry into the
                    giveaway!
                  </p>
                </>
              ) : (
                <>
                  <h1 className="Sweepstakes-headingText">
                    Review your apartment for a chance to win a month of free
                    rent!
                  </h1>
                  <p className="Sweepstakes-subHeading">
                    It will only take a minute and your anonymous review will
                    help others find their perfect home!
                  </p>
                </>
              )}
            </div>
          )}
          {revealSuccessMessage ? (
            <>
              <div className="Sweepstakes-successMessageWrapper">
                <div className="Sweepstakes-successMessageAndIcon">
                  <div className="Sweepstakes-successMessage">
                    Successfully Submitted!
                  </div>
                  <FontAwesomeIcon
                    className="Sweepstakes-successCheckmark"
                    icon={faCheck}
                    size="1x"
                  />
                </div>
                <p className="Sweepstakes-shareOurPage">
                  Like or share our Sweepstakes on any social media platform and
                  you'll be entered a second time!
                </p>
                <div className="Sweepstakes-shareButtons">
                  <div
                    className="fb-like"
                    data-href="https://www.apartmentquirks.com/giveaway"
                    data-width="300px"
                    data-layout="button"
                    data-action="like"
                    data-size="small"
                    data-share="true"
                  ></div>
                </div>
                <div className="Sweepstakes-socialIconsWrapper">
                  <TwitterShareButton url="https://www.apartmentquirks.com/giveaway">
                    <TwitterIcon size={32} />
                  </TwitterShareButton>
                  <a
                    className="Sweepstakes-socialIcon"
                    target="_blank"
                    href="https://www.facebook.com/apartmentquirks"
                  >
                    <FontAwesomeIcon size="2x" icon={["fab", "facebook"]} />
                  </a>
                  <a
                    className="Sweepstakes-socialIcon"
                    target="_blank"
                    href="https://www.instagram.com/nesnahmade"
                  >
                    <FontAwesomeIcon size="2x" icon={["fab", "instagram"]} />
                  </a>
                </div>
              </div>
            </>
          ) : (
            <div className="Sweepstakes-inputsWrapper">
              <div className="Sweepstakes-autoCompleteWrapper">
                <p className="Sweepstakes-inputTitle">Rental Address</p>
                <input
                  className={`SweepstakesInput-input ${
                    hasSelectedAddress
                      ? "SweepstakesInput--isValid"
                      : failedValidation
                      ? "SweepstakesInput--failedValidation"
                      : ""
                  }`}
                  id="autocompleteSweepstakes"
                  type="text"
                ></input>
                {this.state.hasSelectedAddress && (
                  <FontAwesomeIcon
                    className="Sweepstakes-autoCompleteCheckmark"
                    icon={faCheck}
                    size="1x"
                  />
                )}
              </div>
              {/* <p className="Sweepstakes-inputTitle">Review Title (optional)</p>
            <SweepstakesInput 
              name="title"
              update={this.update}
              value={title}
              className="SweepstakesInput-input"
              isValid={this.validateLength(title, 6)}
            /> */}
              <p className="Sweepstakes-inputTitle">
                Anonymous username (Ironman, Pitbull, Post Malone?)
              </p>
              <SweepstakesInput
                name="username"
                update={this.updateUsername}
                type="text"
                value={username}
                modifierClass={`${
                  hasValidUsername
                    ? "SweepstakesInput--isValid"
                    : failedValidation
                    ? "SweepstakesInput--failedValidation"
                    : ""
                }`}
                isValid={!usernameExists && hasValidUsername}
              />
              {usernameTouched && (
                <p className="Sweepstakes-inputLengthTracker">
                  {6 - username.length > 0
                    ? `${6 - username.length} more
                  characters required`
                    : ""}
                </p>
              )}
              {usernameExists && (
                <p className="Sweepstakes-usernameError">
                  username already exists
                </p>
              )}
              <p className="Sweepstakes-inputTitle">
                Email Address (We'll need to get in touch if you win!)*
              </p>
              <SweepstakesInput
                name="email"
                update={this.update}
                type="email"
                modifierClass={`${
                  hasValidEmail
                    ? "SweepstakesInput--isValid"
                    : failedValidation
                    ? "SweepstakesInput--failedValidation"
                    : ""
                }`}
                isValid={hasValidEmail}
              />
              <p className="Sweepstakes-inputTitle">
                Apartment Number (optional)
              </p>
              <SweepstakesInput
                name="apartmentNum"
                update={this.update}
                value={apartmentNum}
                modifierClass={`${
                  hasValidApartmentNumber ? "SweepstakesInput--isValid" : ""
                }`}
                isValid={hasValidApartmentNumber}
              />
              <p className="Sweepstakes-inputTitle">
                Any advice to other future tenants?
              </p>
              <SweepstakesInput
                name="body"
                isTextArea
                update={this.update}
                value={body}
                modifierClass={`${
                  hasValidBody
                    ? "SweepstakesInput--isValid"
                    : failedValidation
                    ? "SweepstakesInput--failedValidation"
                    : ""
                }`}
                isValid={hasValidBody}
                placeholder="What did you like about living here? What did you not like about living here?"
              />
              {bodyTouched && (
                <p className="Sweepstakes-inputLengthTracker">
                  {120 - body.length > 0
                    ? `${120 - body.length} more characters
                required`
                    : ""}
                </p>
              )}

              <div className="Sweepstakes-bottomSectionWrapper">
                <div
                  className={`Sweepstakes-starRating ${
                    hasValidStarRating
                      ? "SweepstakesInput--isValid"
                      : failedValidation
                      ? "SweepstakesInput--failedValidation"
                      : ""
                  }`}
                >
                  <p className="QuirkForm-ratingTitle">
                    How would you rate your overall experience?
                  </p>
                  <StarRatings
                    rating={this.state.star_rating}
                    starRatedColor={this.starRatingColor}
                    numberOfStars={5}
                    starDimension="40px"
                    starSpacing="8px"
                    name="Sweepstakes star rating"
                    changeRating={this.handleChangeStarRating}
                    starHoverColor={this.starRatingColor}
                  />
                  <ul className="Sweepstakes-starRatingText">
                    <li>Hated it</li>
                    <li>It was ok</li>
                    <li>Loved it</li>
                  </ul>
                </div>
                {failedValidation && !this.validateInputs() && (
                  <div className="Sweepstakes-errorDisplayWrapper">
                    <p className="Sweepstakes-errorsTitle">
                      Please fix the following errors and then submit again.
                    </p>
                    {!hasSelectedAddress && (
                      <p className="Sweepstakes-errorItem">
                        * Please select a rental address.
                      </p>
                    )}
                    {!this.validateLength(username, 6) && (
                      <p className="Sweepstakes-errorItem">
                        * Username must be at least 6 characters long.
                      </p>
                    )}
                    {!this.validateEmail(email) && (
                      <p className="Sweepstakes-errorItem">
                        * Please enter a valid email.
                      </p>
                    )}
                    {!this.validateLength(body, this.bodyLengthMinimum) && (
                      <p className="Sweepstakes-errorItem">
                        * Advice to other future tenants must be a minimum of
                        120 characters.
                      </p>
                    )}
                    {!this.state.star_rating && (
                      <p className="Sweepstakes-errorItem">
                        * Please select a star rating.
                      </p>
                    )}
                  </div>
                )}
                <button
                  className="Sweepstakes-button"
                  style={{
                    backgroundColor: `${
                      this.validateInputs() ? "steelblue" : "lightgrey"
                    }`,
                  }}
                  onClick={this.handleSubmitReview}
                >
                  Submit Review!
                </button>
                <div className="SessionForm-termsAndConditionsWrapper">
                  <p className="Sweepstakes-conditions">
                    By submitting I accept the
                    <a
                      target="_blank"
                      className="Sweepstakes-termsAndConditionsLink"
                      href="https://app.termly.io/document/terms-of-use-for-website/c1ad278a-901a-4f1b-9e14-54e318c56599"
                    >
                      {" "}
                      terms and conditions
                    </a>{" "}
                    the{" "}
                    <a
                      className="Sweepstakes-privacyPolicy"
                      target="_blank"
                      href="https://app.termly.io/document/privacy-policy/3a1d9dd9-cb57-4685-9708-1719215c6bec"
                    >
                      privacy policy
                    </a>{" "}
                    and the{" "}
                    <a
                      target="_blank"
                      href="https://res.cloudinary.com/aptquirks/image/upload/v1597334972/Apartment_Quirks_Giveawy_Rules_t4jxqc.pdf"
                      className="Sweepstakes-rules"
                    >
                      giveaway rules.
                    </a>
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Sweepstakes;
