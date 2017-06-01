import { connect } from 'react-redux';
import QuirkIndex from './quirk_index';
import { addQuirk, fetchQuirks, deleteQuirk } from '../../actions/quirk_actions';


const mapStateToProps = ({ quirksIndex, apartmentShow, session }) => {
  if (session.currentUser) {
    return {
      quirks: quirksIndex,
      apartmentId: apartmentShow.id,
      userId: session.currentUser.id,
      username: session.currentUser.username
    }
  } else {
    return {
      quirks: quirksIndex,
      apartmentId: apartmentShow.id,
      userId: "1",
      username: session.currentUser.username
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
