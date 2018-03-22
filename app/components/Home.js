// state
import React from "react";
import {Text, View, Button} from 'react-native';

export default class Home extends React.Component {
    constructor(props) {
        super(props);

        // state is keyword for react
        // mutable
        this.state = {
            counter: 1000
        }
    }

    increment() {
       this.setState({
           counter: this.state.counter + 1
       })

       console.log("***INCR***")
    }

    decrement = () => {
        //console.trace();
        //keyword setState
        //GOOD
        // async
        // calls render
        console.log("before ", this.state.counter);
        this.setState( {
            counter : this.state.counter - 1
        })
 
        console.log("after ", this.state.counter);
    }

    reset = () => {
        console.log("***RESET");
        this.setState({
            counter: 0
        })
    }

    render() {
        console.log("Home render", this.state.counter);

        return (
            <View>
                <Text>Home</Text>
                <Text> Counter: {this.state.counter} </Text>

                <Button title="+1"
                        ref= { (o) => this.btn = o }
                        onPress={ () => this.increment() }>
                   
                </Button>

                {/* <Button title="-1"
                        onPress={this.decrement }>
                
                </Button>

                  <Button title="Reset"
                        onPress={this.reset }>
                
                </Button> */}
            </View>
        )
    }
}