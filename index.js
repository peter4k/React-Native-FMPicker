
'use strict';

var React = require('react-native');
var Parse = require('parse/react-native');
var FMAlert = require('../utils/FMAlert');
var baseStyle = require('../utils/baseStyle');

var {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Modal,
    PickerIOS,
    PickerItemIOS
} = React;

var SCREEN_WIDTH = require('Dimensions').get('window').width;

var Component = React.createClass({
    show: function(){
        this.setState({modalVisible: true});
    },
    getInitialState: function(){
        return {
            options: this.props.options,
            labels: this.props.labels || this.props.options,
            color: this.props.color || '#007AFF'
            modalVisible: false,
            selectedOption: this.props.options[0]
        };
    },
    render: function() {
        return (
            <Modal
                animated={true}
                transparent={true}
                visible={this.state.modalVisible}>
                <View style={baseStyle.basicContainer}>
                    <View style={baseStyle.IOSBottomPicker.modalContainer}>
                        <View style={baseStyle.IOSBottomPicker.buttonView}>
                            <TouchableOpacity onPress={() => {
                                    this.setState({modalVisible: false});
                                }}>
                                <Text style={{color:this.state.color}}>Cancel</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => {
                                    if(this.props.onSubmit) this.props.onSubmit();
                                    this.setState({modalVisible: false});
                                }}>
                                <Text style={{color:this.state.color}}>Confirm</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={baseStyle.IOSBottomPicker.mainBox}>
                            {/*Model body*/}
                            <PickerIOS
                                ref={'picker'}
                                style={baseStyle.IOSBottomPicker.bottomPicker}
                                selectedValue={this.state.selectedOption}
                                onValueChange={(option) => this.setState({selectedOption: option})}
                                >
                                {this.state.options.map((option, i) => {
                                    var label = this.state.labels[i] || option;
                                    return (
                                        <PickerItemIOS
                                            value={option}
                                            label={label}
                                            />
                                    )
                                })}
                            </PickerIOS>
                        </View>

                    </View>
                </View>
            </Modal>
        );
    }
});

module.exports = Component;
