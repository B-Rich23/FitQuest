import React from 'react';
import { StyleSheet, View, ScrollView, Component, Text, Image } from 'react-native';
import EasyQuest from '../../components/EasyQuest';
import MediumQuest from '../../components/MediumQuest';
import HardQuest from '../../components/HardQuest';
import CreateQuest from '../../components/CreateQuest';
import styles from './NewQuestStyles.js';


class NewQuest extends React.Component {

    static navigationOptions = {
		drawerIcon: (
			<Image source={ require('../../assets/icons/newQuest.png') }
				   style={{ height: 24, width: 24 }} />
		)
    }
    
    constructor() {
		super();
		this.state = {
			enabled:true
		};
	}
  
    render() {
        return (
    	    <ScrollView contentContainerStyle={{alignItems: 'center'}} scrollEnabled={this.state.enabled}>
                <View style={{height:330, width: '90%', backgroundColor:'white'}}>
                   <EasyQuest />
                </View>
                <View style={{ height: 330, width: '90%', backgroundColor:'white'}}>
                    <MediumQuest />
                </View>
                <View style={{ height: 330, width: '90%', backgroundColor:'white'}}>
                    <HardQuest />
                </View>
                
            </ScrollView>
        );
    }
}

export default NewQuest;