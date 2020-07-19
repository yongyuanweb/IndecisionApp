
class Visibility extends React.Component{
  constructor(props){
    super(props);
    this.toggleVisibility=this.toggleVisibility.bind(this);
    this.state={
       visibility:false
    }
  }
  toggleVisibility(){
    this.setState((preState)=>{
      return{
      visibility:!preState.visibility
      }
    })
  }
  render(){
    return(
      <div>
        <h1>Visibility Toggle</h1>
        <button onClick={this.toggleVisibility}>{this.state.visibility?'Hidden details':'Show Details'}</button>
     
      {this.state.visibility &&(
        <div>
          <p>Hey,These are some details you can see!</p>
        </div>
      )}
      </div>
  )
}
}

ReactDOM.render(<Visibility/>,document.getElementById('app'))

// let visibility = false;

// const toggleVisibility = () => {
//   visibility = !visibility;
//   render();
// };

// const render = () => {
//   const jsx = (
//     <div>
//       <h1>Visibility Toggle</h1>
//       <button onClick={toggleVisibility}>
//         {visibility ? 'Hide details' : 'Show details'}
//       </button>
//       {visibility && (
//         <div>
//           <p>Hey. These are some details you can now see!</p>
//         </div>
//       )}
//     </div>
//   );

//   ReactDOM.render(jsx, document.getElementById('app'));
// };

// render();
