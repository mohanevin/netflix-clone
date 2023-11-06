import { Provider } from 'react-redux';
import './App.css';
import Body from './components/Body';
import { store } from './redux/appStore';

function App() {
  return (
    <Provider store={store}>
      <Body />
    </Provider>
    
  );
}

export default App;
