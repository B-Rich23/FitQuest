import React from 'react';
import { StyleSheet, View, ScrollView, Component, Text } from 'react-native';
import EasyQuest from '../../components/EasyQuest';
import MediumQuest from '../../components/MediumQuest';
import HardQuest from '../../components/HardQuest';
import CreateQuest from '../../components/CreateQuest';
import styles from './NewQuestStyles.js';


class NewQuest extends React.Component {

    constructor() {
		super();
		this.state = {
			enabled:true
		};
	}
  
    render() {
        return (
    	    <ScrollView contentContainerStyle={{flex:0}} scrollEnabled={this.state.enabled}>
                <View style={{height:200,backgroundColor:'white'}}>
                    <EasyQuest />
                </View>
                <View style={{height:200,backgroundColor:'white'}}>
                    <MediumQuest />
                </View>
                <View style={{height:200,backgroundColor:'white'}}>
                    <HardQuest />
                </View>
                
            </ScrollView>
        );
    }
}

export default NewQuest;