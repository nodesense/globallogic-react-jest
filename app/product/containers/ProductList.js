import {connect} from "react-redux";

import {bindActionCreators} from "redux";

import ProductList 
        from "../components/ProductList";

import * as actions from "../Actions";
        
import {addItemToCart} from "../../cart/Actions";

//state = store.getState()

function mapReduxStateToReactProps (state) {
    return {
     //propName [react props]: value [from state]   
     products: state.productState.products,
     loading: state.productState.loading,
     cartSize: state.cartState.length
    }
}

function mapReduxDispatchToReactProps (dispatch) {
    return {
        //prop name
        //dispatch: dispatch,

        //aternative option 2

        //initProducts: (products) => dispatch(actions.initProducts(products)),
        //loading: (status) => dispatch(actions.loading(status))

        //alternative options 3

        //map all the actions with dispatch functionalities
        //create wrappers method for actions
        //automatically dispatch
        actions: bindActionCreators(actions, dispatch),
        addItemToCart: bindActionCreators(addItemToCart, dispatch)
    }
}


//create container component
//get store from provider using context
//subscribe from store
//unsubscribe
let ProductListContainerComponent 
        = connect(mapReduxStateToReactProps,
                  mapReduxDispatchToReactProps) (ProductList);


export default ProductListContainerComponent;