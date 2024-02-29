import { createStore } from 'vuex';

const store = createStore({
    state:{
        userId:null,
        isLoggedIn:false,
    },
    mutations:{
        setUserInfo(state,userId){
            state.userId = userId;
        },
        setIsLoggedIn(state,isLoggedIn){
            state.isLoggedIn = isLoggedIn;
        }
    },
    actions:{
        setUserInfo({commit},userId){
            commit('setUserInfo',userId);
        },
        async setIsLoggedIn({commit},isLoggedIn){
            commit('setIsLoggedIn',isLoggedIn);
        }
    },
    getters:{
        userId: state => state.userId,
        isLoggedIn: state => state.isLoggedIn,
    }
});

export default store;