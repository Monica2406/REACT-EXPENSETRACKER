import React, {Component} from "react";

class TransactionItem extends Component{
    constructor(props){
        super(props)
    }

    render() {
        return(
            <div className={this.props.amount > 0 ? "card border-success mt-2" : "card border-danger mt-2"}>
            <div className="card-body d-flex justify-content-between align-items-center">
                <div className={this.props.amount > 0 ? "text-success" : "text-danger"}>
                    <p><strong>{this.props.title}</strong></p>
                    <p>&#8377; {this.props.amount}</p>
                </div>
                    <div>
                    <button onClick={() => this.props.edit(this.props.id, this.props.title, this.props.amount)} data-bs-toggle="modal" data-bs-target="#expenseForm" className="btn btn-sm btn-info me-2">
                    <i className="bi bi-pencil text-light"></i>
                </button>
                <button onClick={() => this.props.deleteTransaction(this.props.id)} className="btn btn-sm btn-danger ms-2">
                    <i className="bi bi-trash"></i>
                </button>
                    </div>
            </div>
            </div>
        )
    }
}

export default TransactionItem

