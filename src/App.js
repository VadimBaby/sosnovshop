import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainScreen from './screens/MainScreen';
import GameScreen from './screens/GameScreen';
import ProductScreen from './screens/ProductScreen';
import { Provider } from 'react-redux';
import BasketScreen from './screens/BasketScreen';
import { PersistGate } from 'redux-persist/integration/react';

import { persistorStore, store } from './stores/store';
import ProfileScreen from './screens/ProfileScreen';
import FeedbackScreen from './screens/FeedbackScreen';
import EditFeedbackScreen from './screens/EditFeedbackScreen'
import EnterScreen from './screens/EnterScreen';


function App() {
  return (
    <Provider store={store} >
      <PersistGate loading={null} persistor={persistorStore}>
        <BrowserRouter>
        <Routes>
            <Route path='/game' element={<GameScreen />} />
            <Route path="/" element={<MainScreen />} />
            <Route path='/product/:id' element={<ProductScreen />} />
            <Route path='/basket' element={<BasketScreen />} />
            <Route path='/profile' element={<ProfileScreen />} />
            <Route path='/feedback' element={<FeedbackScreen />} />
            <Route path='/edit/:id' element={<EditFeedbackScreen />} />
            <Route path='/enter' element={<EnterScreen />} />
        </Routes>
      </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}

export default App;
