import {connect} from 'react-redux';
import App from '../components/app.js';
import {fetchUsers} from '../action/index.js';

const mapStateToProps = (state) => {
  console.log(state);

  return {
    usersList: state.reducer.usersList,
    error: state.reducer.error
  }
}

//Будут храниться функции dispatch , через него проходят экшены

const mapDispatchToProps = dispatch => ({
  //будем вызывать внутри компонента, хран
  fetchUsersPending: () => dispatch(fetchUsers.fetchUsersPending())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
