import { connect } from 'react-redux';
import QuirkIndex from './quirk_index';
import { addQuirk, fetchQuirks } from '../../actions/quirk_actions';


const mapStateToProps = ({ quirksIndex, apartmentShow, session }) => {
  if (session.currentUser) {
    return {
      quirks: quirksIndex,
      apartment_id: apartmentShow.id,
      user_id: session.currentUser.id,
    }
  } else {
    return {
      quirks: quirksIndex,
      apartment_id: apartmentShow.id,
      user_id: "1",
    }
  }
};

const mapDispatchToProps = dispatch => ({
  addQuirk: quirk => dispatch(addQuirk(quirk)),
  fetchQuirks: apartment_id => dispatch(fetchQuirks(apartment_id))
});

const QuirkIndexContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(QuirkIndex);

export default QuirkIndexContainer;
