import {connect} from "react-redux";
import Cart from "../components/Cart";

import {bindActionCreators} from "redux";


import * as actions from "../Actions";
 
//called by container
//when? on every subscribe
//state => store.getState()
function mapStateToProps(state) {
    return {
        //propname: value
        items: state.cartItems
    }
}

//dispatch ==> store.dispatch
function mapDispatchToProps(dispatch) {
    return {
        //propName: function(){}
        // addItemToCart : function(item) {
        //                  let action = actions.addItemToCart(item);
        //                  dispatch(action);
        //                }

        addItemToCart : bindActionCreators(actions.addItemToCart, dispatch),

        //group of actions
        //in comp => this.props.actions.updateItemInCart, removeItem..
        actions: bindActionCreators(actions, dispatch)
    }
}

let connectFn = connect(mapStateToProps,
                        mapDispatchToProps);

//Pure component
let CartContainerComponent = connectFn(Cart);

export default CartContainerComponent;