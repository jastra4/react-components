// TODO
class GroceryItem extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      done: false,
      hover: false
    };
  }
  
  onListItemClick() {
    this.setState({
      done: !this.state.done
    });
  }

  onListItemMouseOver() {
    this.setState({
      hover: !this.state.hover
    });
  }
  
  render() {
    var style = {
      textDecoration: this.state.done ? 'line-through' : 'none',
      fontWeight: this.state.hover ? 'bold' : 'none'
    };
    return (
      <li style={style} onClick={this.onListItemClick.bind(this)} onMouseOver={this.onListItemMouseOver.bind(this)}>{this.props.groceries}</li>
    );
  }
  
}

var GroceryList = (props) => (
  <ul>
    {props.groceries.map((grocery, index) => 
      <GroceryItem key={index} groceries={grocery} />
    )} 
  </ul>
);
  


var App = () => (

  <div> 
    <h2> My Grocery List </h2> 
    <GroceryList groceries={['apple', 'orange', 'cheese']}/>
  </div>
  
);

ReactDOM.render(<App />, document.getElementById("app"));
