import React from "react";
import {View, 
        Button, 
        Text,
        StyleSheet
    } from "react-native";
 
import Icon from 'react-native-vector-icons/MaterialIcons';


function getRandomProductIcon() {
    let list = ['phone-android', 'phone-iphone', 
                 'smartphone', 'tablet',
                'tablet-android', 'tablet-mac'
                ]
    
    return list[ Math.floor(list.length * Math.random() )];
}
    
function ProductWidget(props, context) {
    let {item} = props;
    item.iconName = getRandomProductIcon();

    return (
        <View style = {styles.listItemContainer}>
        <View style = {styles.callerDetailsContainer}>
         <View style={styles.callerDetailsContainerWrap}>
          <View style={styles.nameContainer}>
            <Text>{item.name}</Text>
            <View style={styles.dataContainer}>
              <Text style={{ fontWeight:'400', color:'#666', fontSize:12 }}>{item.year} {item.weight}</Text>
            </View>
           </View>
         <View style={styles.cartIconContainer}>
          <Icon name="add-shopping-cart" color='#075e54' size={30} style={{ padding:5 }} />

          <Icon name="mode-edit" color='#075e54' 
                size={30} 
                style={{ padding:5 }}
                
                onPress={() => props.gotoEdit(item.id)}

                 />

         </View>
        </View>
       </View>
      </View>
    
     
        )
}

export default ProductWidget;


const styles = StyleSheet.create({
    
     logoText: {
       color: "white",
       fontWeight: "bold",
       fontSize: 16,
       alignItems: "flex-start",
       marginLeft: 10
     },
     listItemContainer: {
       flex: 1,
       flexDirection: "row",
       alignItems: "center",
       padding: 10
     },
     iconContainer: {
       flex: 1,
       alignItems: "flex-start"
     },
     callerDetailsContainer: {
       flex: 4,
       justifyContent: "center",
       borderBottomColor: "rgba(92,94,94,0.5)",
       borderBottomWidth: 0.25
     },
     callerDetailsContainerWrap: {
       flex: 1,
       alignItems: "center",
       flexDirection: "row"
     },
     nameContainer: {
       alignItems: "flex-start",
       flex: 1
     },
     dataContainer: {
       flexDirection: "row",
       justifyContent: "space-between",
       alignItems: "center"
     },
     cartIconContainer: {
       flex: 1,
       alignItems: "flex-end"
     },
     initStyle: {
       borderRadius: 30,
       width: 60,
       height: 60
     }
   });