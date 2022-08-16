
import testService from '../service/testService'

export default {
    namespace: 'TestModel',

    state: {
        name: 'Jack',
        age: 24,
        sex: 'boy',
        isCN: true
    },

    effects: {
        *getInfo({payLoad},{call,put,select}){
            yield put({
                type: 'save',
                payLoad: {
                    isTeen: yield select(state => state.age) > 20 ? true : false
                }
            })
            const reponseBody = yield call(testService,payLoad)

            yield put({
                type: 'change',
                payLoad: {
                    info : reponseBody
                }
            })
        },

        *changeInfo({payLoad},{put}){
            yield put({
                type: 'remove',
                payLoad: {
                    id: 1
                }
            })
        }
    },

    reducers: {
        save(state, {payLoad: something}){
            const saveThing = state.concat(something);
            return {
                ...saveThing
            }
        },
        remove(state,{payLoad: id}){
            const removeThing = state.filter(something => something.id !== id)
            return {
                ...removeThing
            }
        },
        change(state, {payLoad}){
            return {
                ...state,
                ...payLoad
            }
        }
    }
}
