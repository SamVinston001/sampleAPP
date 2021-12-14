import { connect } from 'react-redux';
import MovieComponent from '../EXForReduxSaga/MovieComponent';

import { addMovieAction, fetchMoviesAction, fetchSuccessAction, fetchFailedAction } from './Index';

const mapStateToProps = () => {        
    return {        
        // xwmovies: movieReducers
    }
};

const mapDispatchToProps = (dispatch) => {
    return {    
        onFetchMovies: () => {                        
            dispatch(fetchMoviesAction());
        }, 
        onAddMovie: (newMovie) => {                        
            dispatch(addMovieAction(newMovie));
        }
    };
}
const MovieContainer = connect(mapStateToProps, mapDispatchToProps)(MovieComponent);
export default MovieContainer;