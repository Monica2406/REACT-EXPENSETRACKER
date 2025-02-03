import React,{Component} from 'react';

class Display extends Component{
    constructor(props){
        super(props)
    }

    render() {
        return(
            <div className="card">
            <div className="card-header text-center">
                <h3 className="card-title text-secondary">ExpenseTracker</h3>
            </div>
            <div className="card-body">
                    <div className="row p-2">
                        <div className="col-md-12">
                            <h6>Your Balance</h6>
                            <h3 className="text-info">&#8377; {this.props.balance}</h3>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-md-6">
                            <h6>Income</h6>
                            <h3 className="text-success">&#8377; {this.props.income}</h3>
                        </div>
                        <div className="col-md-6 text-end">
                            <h6>Expense</h6>
                            <h3 className="text-danger">&#8377; {this.props.expense}</h3>
                        </div>
                    </div>
            </div>
        </div>
        )
    }
}

export default Display

