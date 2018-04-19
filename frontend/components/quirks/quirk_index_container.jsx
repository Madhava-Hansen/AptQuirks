import { connect } from 'react-redux';
import QuirkIndex from './quirk_index';
import { addQuirk, fetchQuirks, deleteQuirk } from '../../actions/quirk_actions';


const mapStateToProps = ({ quirksIndex, apartmentShow, session }) => {
  if (session.currentUser) {
    return {
      quirksIndex: quirksIndex,
      apartmentId: apartmentShow.id,
      userId: session.currentUser.id,
      currentUser: session.currentUser,
      dispatch: store.dispatch,
      apartmentShow: apartmentShow
    }
  } else {
    return {
      quirksIndex: quirksIndex,
      apartmentId: apartmentShow.id,
      userId: "1",
      dispatch: store.dispatch,
      apartmentShow: apartmentShow
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
