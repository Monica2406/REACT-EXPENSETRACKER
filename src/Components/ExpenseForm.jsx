import React, {Component} from "react";

class ExpenseForm extends Component{
    constructor(props){
        super(props)
        this.state = {
            title: "",
            amount: 0
        }
    }

    // submit handler method to receive the form data on submit event
    submitHandler(event) {
        event.preventDefault();
        console.log(`title = ${this.state.title} and amount = ${this.state.amount}`)
        this.props.addTransaction(this.state.title, this.state.amount)
    }

    render() {
        return(
            <div className="card mt-2">
            <div className="card-body">
                <div className="row">
                    <div className="col-md-5">
                        <div className="form-group mb-2">
                            <input type="text" name="title" id="title" className="form-control" placeholder="Enter title" value={this.state.title} onChange={(e) => this.setState({
                                title: e.target.value
                            })} required />
                        </div>
                    </div>
                    <div className="col-md-5">
                        <div className="form-group mb-5">
                            <input type="number" name="amount" id="amount" className="form-control" placeholder="Enter Amount" value={this.state.amount} onChange={(e) => this.setState({
                                amount: e.target.value
                            })} required/>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <button onClick={this.submitHandler.bind(this)} className="btn btn-outline-success btn-sm"> <i className="bi bi-plus-circle"></i>Add </button>
                    </div>
                </div>
            </div>
            </div> 
        )
    }
}

export default ExpenseForm