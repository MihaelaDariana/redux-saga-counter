


export default function redfunc(state = 0, action) {
  switch (action.type) {
    case "Increment":
      return state + 1;
    case "Decrement":
      return state - 1;
    case "DecrementAsync":
      return (state > 5) ? state - 1 : state;
    default:
      return state;
  }
}
