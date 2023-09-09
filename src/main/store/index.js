import { configureStore} from '@reduxjs/toolkit';


import groupReducer from './group-slice';
import groupsReducer from './groups-slice';
import userReducer from './user-slice';
import usersReducer from './users-slice';
import questionReducer from '../../redux/reducers/question';
import surveyReducer from '../../redux/reducers/survey';
import surveysReducer from '../../redux/reducers/surveys';
import postReducer from './post-slice';
import postsReducer from './posts-slice';

const store = configureStore({
    reducer: {
        group: groupReducer.reducer,
        groups: groupsReducer.reducer,
        user: userReducer.reducer,
        users: usersReducer.reducer,
        question: questionReducer.reducer,
        survey: surveyReducer.reducer,
        surveys: surveysReducer.reducer,
        post: postReducer.reducer,
        posts: postsReducer.reducer,
    }
});


  
export default store;