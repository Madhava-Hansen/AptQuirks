import { connect } from 'react-redux';
import QuirkIndex from './quirk_index';
import { addQuirk, fetchQuirks, deleteQuirk } from '../../actions/quirk_actions';


const mapStateToProps = ({ quirksIndex, apartmentShow, session }) => {
  if (session.currentUser) {
    return {
      quirks: quirksIndex,
      apartmentId: apartmentShow.id,
      userId: session.currentUser.id,
      currentUser: session.currentUser
    }
  } else {
    return {
      quirks: quirksIndex,
      apartmentId: apartmentShow.id,
      userId: "1",
    }
  }
};

const mapDispatchToProps = dispatch => ({
  addQuirk: quirk => dispatch(addQuirk(quirk)),
  fetchQuirks: apartment_id => dispatch(fetchQuirks(apartment_id)),
  deleteQuirk: quirk => dispatch(deleteQuirk(quirk))
});

const QuirkIndexContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(QuirkIndex);

export default QuirkIndexContainer;
