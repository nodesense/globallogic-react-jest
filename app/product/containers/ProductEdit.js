import {connect} from "react-redux";

import {bindActionCreators} from "redux";

import ProductEdit 
        from "../components/ProductEdit";

import * as actions from "../Actions";
        
 
//state = store.getState()

function mapReduxStateToReactProps (state) {
    return {
     //propName [react props]: value [from state]   
     product: state.productState.product,
     brands: state.productState.brands,
     brand: state.productState.brand,
     loading: state.productState.loading
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
        actions: bindActionCreators(actions, dispatch)
    }
}


//create container component
//get store from provider using context
//subscribe from store
//unsubscribe
let ProductEditContainerComponent 
        = connect(mapReduxStateToReactProps,
                  mapReduxDispatchToReactProps) (ProductEdit);


export default ProductEditContainerComponent;