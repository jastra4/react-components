// TODO
var App = () => (
  <div>Some cliche salutation</div>
  <GroceryList />
);

var GroceryList = () => (
  <ul>
    <li>Apple</li>
    <li>Orange</li>
  </ul>
);

ReactDOM.render(<App />, document.getElementById("app"));