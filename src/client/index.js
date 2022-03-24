import {handleSubmit, updateUI} from './js/formHandler';
import {dateProcess, dateControl} from './js/date';

import './styles/main.scss';

//API only forecast 16 days, so make date picker to have a range of 16 days
dateControl();

export {
    handleSubmit,
    updateUI,
    dateProcess
}
