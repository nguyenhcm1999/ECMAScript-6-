import {TYPE_LOG} from '../constants.js';
// còn lại có thể export được nhiều lần

function logger11(log,type = TYPE_LOG){
    console[type](log)
}
// 1 module chỉ export default được 1 cái
export default logger11;

