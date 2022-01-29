const reducer = (state, action) => {

    switch (action) {
      case 'increment':
        return state + 1
      case 'decrement':
        return state - 1
    }
  }
  
  function App() {
    const [count, dispatch] = React.useReducer(reducer, 0)
  
    return (
      <div>
        Count: {count}
        <button onClick={() => dispatch('increment')}>Increment</button>
        <button onClick={() => dispatch('decrement')}>Decrement</button>
      </div>
    )
  }