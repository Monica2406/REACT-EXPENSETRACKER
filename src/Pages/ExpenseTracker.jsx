import React, {Component} from "react";
import Display from "../Components/Display";
import ExpenseForm from "../Components/ExpenseForm";
import Transaction from "../Components/Transactions";

class ExpenseTracker extends Component{
    constructor(props){
        super(props)
        this.state = {
            balance: 0,
            income: 0,
            expense: 0,
            transactions: JSON.parse(localStorage.getItem("transactions"))  || []  //here if the we have items display it or else display empty array here json.parse means we are converting the json data to a string data
        }
        this.addTransaction = this.addTransaction.bind(this)
        this.storeTransactions = this.storeTransactions.bind(this)
    }

    // method to receive the title and amount of transaction
    addTransaction(title, amt) { //This is the function lifting state from parent we are passing this function as props to the child in the child we are passing argument(value) to the parent is called lifting state
        console.log('title =', title)
        console.log('val =', amt)

        let amount = Number(amt)
        if(amount === 0 || amount === -0) {
            alert("Amount can't be a 0, add proper amount...")
        } else{
            let data = { //here we are creating an object to store it in the local storage so that it stores it as complete object and not the individual as title and amount
                id: Math.round(Math.random() * 100000),
                title: title,
                amount: amount
            }
            this.storeTransactions(data)
        }
    }

    // storage transactions in local storage
    storeTransactions(val) {
        this.setState({
            transactions: this.state.transactions.unshift(val) //here we are updating the transactions and we are using unshift method to add the data at the beginning of the array of newly created
        })
        // store the data in local storage
        localStorage.setItem("transactions", JSON.stringify(this.state.transactions)) //here we are storing the data in the local storage with the key transactions and the value is the array of transactions
        alert("transaction added successfully")
        window.location.reload()
    } 

    // to update the income, expense and balance
    updateBalance() {
        let amounts = this.state.transactions?.map(val => Number(val.amount))
        console.log('all amounts =', amounts)

        // total balance
        let bal = amounts.reduce((ac,cu) => ac + cu, 0).toFixed(2)
        this.setState({
            balance: bal > -1 ? bal : Math.abs(bal)
        })

        // income
        let incm = amounts.filter(val => val > 0).reduce((ac, cu) => ac + cu, 0).toFixed(2)
        this.setState({
            income: incm
        })

        // expense
        let ne = amounts.filter(val => val < 0)
        let exp = ne.reduce((ac, cu) => ac + cu, 0)
        this.setState({
            expense: exp
        })
    }

    //react lifecycle method
    componentDidMount() {
        this.updateBalance()
    }

    render() {
        return(
            <div className="container mt-4">
                <div className="row">
                    <div className="col-md-6 offset-md-3">  
                        < Display balance={this.state.balance} income={this.state.income} expense={this.state.expense}/>  
                        < ExpenseForm addTransaction={this.addTransaction}/>   
                        < Transaction transactionData={this.state.transactions}/>            
                    </div>
                </div>
            </div>
        )
    }
}

export default ExpenseTracker