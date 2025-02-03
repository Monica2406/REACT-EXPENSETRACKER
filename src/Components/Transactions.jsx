import React, {Component} from "react";
import TransactionItem from "./TransactionItem";

class Transaction extends Component{
    constructor(props){
        super(props)
        this.state = {
            id: "",
            title: "",
            amount: 0
        }
        this.edit = this.edit.bind(this)
    }

    // edit handler to read transaction id
    edit(id, title, amount) {
        // let transactions = JSON.parse(localStorage.getItem("transactions")) || []
        // let tr = transactions.find(item => item.id == id)
        // console.log(`tr =`, tr)
        this.setState({
            id: id,
            title: title,
            amount: amount
        })
    }

     //edit(update) transaction
     updateTransaction() {
        // read all transactions from local storage
        let transactions = JSON.parse(localStorage.getItem("transactions")) || []
        // finding the index of current updating transaction item
        let trIndex = transactions.findIndex(item => item.id == this.state.id)
        // update the data 
        transactions.splice(trIndex, 1, this.state)
        // storing the updated transactions
        localStorage.setItem("transactions", JSON.stringify(transactions))
        alert("transaction updated successfully")
        window.location.reload()
    }

    // delete transaction
    deleteTransaction(id) {
        if(window.confirm(`Are you sure to delete transaction id = ${id}?`)){
            let transactions = JSON.parse(localStorage.getItem("transactions")) || []
            let trIndex = transactions.findIndex(item => item.id == id)
            transactions.splice(trIndex, 1)
            localStorage.setItem("transactions", JSON.stringify(transactions))
            alert("transaction deleted successfully")
            window.location.reload()
        }
    }

    render() {
        return(
            <div className="card mt-2">
            <div className="card-body">
                <h6 className="text-dark">Transactions</h6>
                <section>
                   {
                    this.props.transactionData?.map((item) => {
                        return < TransactionItem key={item.id} {...item} edit={this.edit} deleteTransaction={this.deleteTransaction}/>
                    })
                   }
                </section>

             {/* modal */}
             <div className="modal" id="expenseForm" tabIndex={-1}>
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Update Transactions</h5>
                            <button className="btn-close" data-bs-dismiss="modal"></button>
                        </div>
                        <div className="modal-body">
                            <div className="form-group mt-2">
                                <label htmlFor="title">Title</label>
                                <input type="text" name="title" id="title" value={this.state.title} onChange={(e) => this.setState({
                                    title: e.target.value
                                })} className="form-control" required/>
                            </div>
                            <div className="form-group mt-2">
                                <label htmlFor="amount">Amount</label>
                                <input type="number" name="amount" id="amount" value={this.state.amount}  onChange={(e) => this.setState({
                                    amount: e.target.value
                                })} className="form-control" required/>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button onClick={this.updateTransaction.bind(this)} className="btn btn-success">Update</button>
                        </div>
                    </div>
                </div>
            </div>   
                {/*end modal*/}
            </div>
            </div>
        )
    }
}

export default Transaction