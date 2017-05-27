import { connect } from 'react-redux';
import QuirkIndex from './quirk_index';
import { addQuirk, fetchQuirks } from '../../actions/quirk_actions';


const mapStateToProps = ({ quirksIndex, apartmentShow, session }) => {
return {
  quirks: quirksIndex,
  apartment_id: apartmentShow.id,
  user_id: session.currentUser.id
};

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
