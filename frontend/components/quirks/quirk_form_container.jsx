import { connect } from "react-redux";
import { addQuirk } from "../../actions/quirk_actions";
import QuirkForm from "./quirk_form";

const mapStateToProps = ({ session, apartmentShow }) => {
  return {
    apartmentId: apartmentShow.id,
    username: session.currentUser.username,
    userId: session.currentUser.id,
    currentUser: session.currentUser,
    currentApartment: apartmentShow,
  };
};

const mapDispatchToProps = (dispatch) => ({
  addQuirk: (quirk) => dispatch(addQuirk(quirk)),
});

const QuirkFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(QuirkForm);

export default QuirkFormContainer;
