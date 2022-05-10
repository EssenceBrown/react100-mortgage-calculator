
 import React from 'react';
 

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      balance: 0,
      rate: 0,
      term: 0,
      output: '',

    };  

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);

  }

  handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({[name]:value});
    
  }

 

 handleClick(){
//console.log("click")
const n = this.state.term * 12;
const r = this.state.rate / 1200;
const principle = this.state.balance;
const m =  ((principle * (r * Math.pow(1 + r, n))) / (Math.pow(1 + r, n) - 1)).toFixed(2);

this.setState({output: m });
//console.log(n,r,m)
}




  render() {
    
    return (
      <div className="container">
        
        <h3>Mortgage Calculator</h3>
 
  
      <input 
      id="balance"
       name="balance"  
       type="number"
       placeholder="balance"
       onChange={this.handleChange}
       />
      <input 
      id="rate"
       name="rate" 
       type="number" step="0.01"
       placeholder="rate%"
       onChange={this.handleChange}
       />
    
    <select
      id="select"
      name="term"
      onChange={this.handleChange}
      >
        <option value="" disabled="disabled">Select Term</option>
        <option value={15}>15</option>
        <option value={30}>30</option>
    </select>

      <button 
      id="submit"
      name="submit"
      type="submit"
      onClick={this.handleClick}>Click to submit</button>

  <div
   id="output"
   >
     your monthly payment is{''} 
    { new Intl.NumberFormat('dollars', {
     style: 'currency',
    currency: 'USD'
   }).format(this.state.output)}
  </div>
      
      </div>
    );
  }
}
