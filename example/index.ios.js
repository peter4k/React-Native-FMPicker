/**
* Sample React Native App
* https://github.com/facebook/react-native
*/
'use strict';

var React = require('react-native');
var {
    AppRegistry,
    StyleSheet,
    Text,
    View,
} = React;

var FMPicker = require('react-native-fm-picker');

var options = ['Option1', 'Option2', 'Option3'];
//Labels is optional
var labels = ['hello', 'world', 'Foodmate'];

var example = React.createClass({
    getInitialState: function(){
        return {
            selectedOption: 'Option1'
        }
    },
    render: function() {
        return (
            <View style={styles.container}>
                <Text>Current Option: {this.state.selectedOption}</Text>
                <Text
                    style={{color:'blue', marginTop: 20}}
                    onPress={()=>{
                        this.refs.picker.show();
                    }}>
                    Click here to select your option
                </Text>
                <Text
                    style={{color:'blue', marginTop: 20}}
                    onPress={()=>{
                        this.refs.picker2.show();
                    }}>
                    Click here to select your option with labels
                </Text>
                <FMPicker ref={'picker'} options={options}
                    onSubmit={(option)=>{
                        this.setState({selectedOption: option})
                    }}
                    />
                <FMPicker ref={'picker2'} options={options} labels={labels}
                    onSubmit={(option)=>{
                        this.setState({selectedOption: option})
                    }}
                    />
            </View>
        );
    }
});

var styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});

AppRegistry.registerComponent('example', () => example);
