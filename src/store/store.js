import { createStore } from 'vuex';

const store = createStore({
    state:{
        id:null,
        isLoggedIn:false,
    },
    mutations:{
        setUserInfo(state,userInfo){
            state.userInfo = userInfo;
        },
        setIsLoggedIn(state,isLoggedIn){
            state.isLoggedIn = isLoggedIn;
        }
    },
    actions:{
        setUserInfo({commit},userInfo){
            commit('setUserInfo',userInfo);
        },
        async setIsLoggedIn({commit},isLoggedIn){
            commit('setIsLoggedIn',isLoggedIn);
        }
    },
    getters:{
        userInfo: state => state.userInfo,
        isLoggedIn: state => state.isLoggedIn,
    }
});

export default store;