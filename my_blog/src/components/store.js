import { createStore } from 'redux';
import rootReducer from './reducers'; // Assurez-vous que le chemin vers votre réducteur racine est correct

const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
