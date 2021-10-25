import React , {Component} from "react"
import { connect } from "react-redux";
import { buyLaptop } from "../../redux/actions/action.js";

export class Shop extends Component{

    // state = {
    //     noOfLaptop : 200
    // }

    // clickbuyLaptop = () => {
    //     this.setState({noOfLaptop: this.state.noOfLaptop - 1})
    // }
    render(){
        return(
            <div>
                <h1>
                    Welcome to shop
                </h1>
                <p>Laptop Shop</p>
                <p>Avaliable : {this.props.noOfLaptop}</p>
                <button onClick = {this.props.buyLaptop}>Buy</button>
            </div>
        )
    }
}

const mapStateProps = (state) =>{
    // console.log(this.noOfLaptop)
    return {
        noOfLaptop: state.noOfLaptop   
    }    
}

const mapdispatchtoprops = (dispatch) =>{
    return{
        buyLaptop : () => dispatch(buyLaptop())
    }
}
export default connect(mapStateProps , mapdispatchtoprops )(Shop);//mapdispatchtoprops //higherorder component