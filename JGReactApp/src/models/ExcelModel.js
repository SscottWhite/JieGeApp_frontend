
// *和yield就像 await和async
// select 选择state数据, put请求reducers方法, call请求其他链接,比如services那种的
export default {
    namespace : "ExcelPage",
    state: {
        excelRange: 0,
        isLoad: true
    },
    effects:{
        *getInfo({payLoad},{select,call,put}){
            yield put({
                type:"add",
                payLoad:{
                    ifLoad: yield select(state => state.isLoad)
                }
            })
        }
    },
    reducers:{
        add(state,{ payLoad }){
            return {...state,...payLoad}
        }
    }
}
