
// import testService from '../service/testService'

export default {
    namespace: 'TestModel',

    state: {
        name: '',
        age: 0,
        sex: '',
        isCN: true
    },

    effects: {
        // *getInfo({payLoad},{call,put,select}){
        //     yield put({
        //         type: 'save',
        //         payLoad: {
        //             isTeen: yield select(state => state.age) > 20 ? true : false
        //         }
        //     })
        //     const reponseBody = yield call(testService,payLoad)

        //     yield put({
        //         type: 'change',
        //         payLoad: {
        //             info : reponseBody
        //         }
        //     })
        // },

        *changeInfo({payLoad},{put}){
            yield put({
                type: 'change',
                payLoad: {
                    ...payLoad
                }
            })
        }
    },

    reducers: {
        change(state, {payLoad}){
            return {
                ...state,
                ...payLoad
            }
        }
    }
}
