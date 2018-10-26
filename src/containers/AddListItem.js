import { connect } from 'react-redux';
import { addListItem } from '../actions';
import NewListItem from '../components/NewListItem';

const mapDispatchToProps = dispatch => {
    return {
        onAddListItem: item => {
            dispatch(addListItem(item));
        }
    }
}

export default connect(
    null, mapDispatchToProps)(NewListItem);