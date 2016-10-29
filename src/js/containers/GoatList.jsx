import { connect } from 'react-redux'
import GoatListComponent from '../components/GoatList'

const mapStateToProps = (state) => {
    console.info('container GoatList mapStateToProps', state);
    return {
        goats: state.goats
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    console.info('container GoatList mapDispatchToProps', ownProps);
    return {};
}

const GoatList = connect(
  mapStateToProps,
  mapDispatchToProps
)(GoatListComponent)

export default GoatList

