import './App.css';
import Navigation from './components/Navigation/Navigation';
import SaladMaker from './components/SaladMaker/SaladMaker';

// The next step is to apply the context to a set of elements.
// To do that, you will use a component called a Provider.
// The Provider is a component that sets the data and then wraps some child components.
// Any wrapped child components will have access to data from the Provider
// with the useContext Hook.

import UserContext from './components/User/User';

const user = {
  name: 'Kwame',
  favorites: [
    'avocado',
    'carrot'
  ]
}

function App() {
  return (
    <>
    <UserContext.Provider value={user}>
      <Navigation />
      <SaladMaker />
    </UserContext.Provider>
    </>
  );
}

export default App;
