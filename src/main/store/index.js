import { configureStore} from '@reduxjs/toolkit';


import questionReducer from '../../redux/reducers/question';
import surveyReducer from '../../redux/reducers/survey';
import surveysReducer from '../../redux/reducers/surveys';
import groupReducer from '../../redux/reducers/group-slice';
import groupsReducer from '../../redux/reducers/groups-slice';
import userReducer from '../../redux/reducers/user-slice';
import usersReducer from '../../redux/reducers/users-slice';
import postReducer from '../../redux/reducers/post-slice';
import postsReducer from '../../redux/reducers/posts-slice';
import usersSurveyReducer from '../../redux/reducers/addUsersOnSurvey';

const store = configureStore({
    reducer: {
        groupSlice: groupReducer.reducer,
        groupsSlice: groupsReducer.reducer,
        userSlice: userReducer.reducer,
        usersSlice: usersReducer.reducer,
        questionSlice: questionReducer.reducer,
        surveySlice: surveyReducer.reducer,
        surveysSlice: surveysReducer.reducer,
        postSlice: postReducer.reducer,
        postsSlice: postsReducer.reducer,
        usersSurveySlice: usersSurveyReducer.reducer,
    }
});


  
export default store;