
import React from 'react';




export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      balance: 0,
      rate: 0,
      term: 0,
      output: '',
      showMP: true,

    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);

  }

  handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value });

  }



  handleClick() {
    const n = this.state.term * 12;
    const r = this.state.rate / 1200;
    const principle = this.state.balance;
    const m = ((principle * (r * Math.pow(1 + r, n))) / (Math.pow(1 + r, n) - 1)).toFixed(2);

    this.setState({ output: m, showMP: false });
  }



  render() {

    return (
      <div className="container">


        <img src="/images/house-heart.svg" className="home" />

        <h1 className="card-title">Mortgage Calculator</h1>

        <h2>Simply enter the loan amount, interest rate and term in the fields below and click submit. </h2>


        <div className="card" >


          <div className="card-body" id="cardStyle">

            <div className="row">
              <div className="col-6">
                <div className="input-group mb-31" >
                  <span className="input-group-text" id="inputGroup-sizing-default">Loan Amount</span>
                  <input
                    className="form-control"
                    aria-label="Sizing example input"
                    aria-describedby="inputGroup-sizing-default"
                    id="balance"
                    name="balance"
                    type="number"
                    placeholder="Enter Amount"
                    onChange={this.handleChange}
                  />
                </div>

                <div className="input-group mb-32" >
                  <span className="input-group-text" id="inputGroup-sizing-default">Interest Rate</span>
                  <input
                    className="form-control"
                    aria-label="Sizing example input"
                    aria-describedby="inputGroup-sizing-default"
                    id="rate"
                    name="rate"
                    type="number"
                    step="0.01"
                    placeholder=" Enter %"
                    onChange={this.handleChange}
                  />
                </div>

                <div className="input-group mb-33" >
                  <span className="input-group-text" id="inputGroup-sizing-default">Loan Term</span>
                  <select type="select"
                    className="form-control"
                    aria-label="Sizing example input"
                    aria-describedby="inputGroup-sizing-default"
                    id="select"
                    name="term"
                    onChange={this.handleChange}
                  >
                    <option value="">Select Term</option>
                    <option value={15}>15</option>
                    <option value={30}>30</option>
                  </select>
                </div>

              </div>
              <div className="col-6">

                <div>

                  {this.state.showMP ? <img src="/images/BFlogo.png" /> : <div
                    id="output"
                  >
                    {''}
                    {new Intl.NumberFormat('dollars', {
                      style: 'currency',
                      currency: 'USD'
                    }).format(this.state.output)}
                  </div>}


                </div>


                <button onClick={this.handleClick}>Submit</button>


              </div>
            </div>




          </div>
        </div>



      </div>
    );
  }
}
