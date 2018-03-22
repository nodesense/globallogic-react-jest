import React, {Component} from "react";

import {View, FlatList, 
            Text, Button,
             StyleSheet,
            ActivityIndicator
            } from "react-native";

//import {getProducts} from "../Service";

import ProductWidget from "./ProductWidget";
import Icon from 'react-native-vector-icons/MaterialIcons';



export default class ProductList extends Component {

    static navigationOptions = {
        title: "Product List 2"
    }

    constructor(props) {
        super(props);

        this._renderItem = this._renderItem.bind(this);
    }

    componentDidMount() {
        console.log(" product list mounted")
        
        //dispatch a function to reducers, thunk
        //this.props.actions.fetchProducts();

        //dispatch for saga, normal action
        this.props.actions.fetchProductsRequested();
         
    }

    _renderItem2({item}) {
        return (<View >
                    <Text>{item.name}</Text>
                    <Button title="+Cart" 
                            onPress= {() => this.props.addItemToCart(item)}
                    >
                    </Button>
             </View>)
    }

    editProduct(id) {
        let navigation = this.props.navigation;
        navigation.navigate('ProductEdit',  {id: id});
    }   

    _renderItem({item}) {
        return (<ProductWidget item={item} 
                               addItemToCart={this.props.addItemToCart}

                               gotoEdit={(id) => this.editProduct(id)}
                  >

                </ProductWidget>
                )
    }

    
    _keyExtractor(item, index) {
        return item.id;
    }

    componentWillUnmount() {
        console.log("Product list unmount")
    }

    render() {
        console.log( "Products to render", this.props.products.length);
        
        if (this.props.loading) {
            return (
                <View>
                    <Text >Loading..</Text>
                    <ActivityIndicator >
                    </ActivityIndicator>
                </View>
            )
        }


        return (

            <View style={styles.mainContainer}>
            <View style={styles.headerContainer}>
             <View style={styles.leftHeaderContainer}>
                 <Text style={styles.logoText}>Products</Text>
             </View>
             <View style={styles.rightHeaderContainer}>
                 <Button onPress={()=> this.props.navigation.navigate("Cart", {title: 'Cart Page'})} title="Cart">
                 </Button>

                 


                 <Icon name="shopping-cart" 
                       color='#fff' 
                       size={23} 
                       onPress={()=> this.props.navigation.navigate("Cart", {title: 'Cart Page'})} 
                       style={{padding:5}} />

                 <Icon name="search" color='#fff' size={23} style={{padding:5}} />
                  <Icon name="more-vert" color='#fff' size={23} style={{padding:5}}/>
             </View>
            </View>
            <View style={styles.contentContainer}>
                <FlatList 
                    data={this.props.products}
                    renderItem={this._renderItem}
                    keyExtractor={this._keyExtractor}
                    >

                </FlatList>
            </View>
           </View>

  

           
                )
    }
}

const styles = StyleSheet.create({
    mainContainer: {
       flex: 1,
       backgroundColor: '#F5FCFF',
       height: 24
    },
    headerContainer: {
       flex: 1,
       flexDirection: "row",
       justifyContent: "space-between",
       backgroundColor: "#075e54",
       alignItems:"center",
       paddingRight: 5
    },
    leftHeaderContainer: {
       alignItems: "flex-start",
       flexDirection: "row"
    },
    rightHeaderContainer: {
       alignItems: "flex-end",
       flexDirection: "row"
    },
    contentContainer: {
       flex: 6,
    },
    logoText: {
       color: "white",
       fontWeight: "bold",
       fontSize: 16,
       alignItems: "flex-start",
       marginLeft: 10
    },
   });