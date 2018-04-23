import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from '../../reducers';
import { AsyncStorage, StyleSheet, Text, View, TouchableHighlight, ScrollView, Image, Platform } from 'react-native';
import { Avatar, List, ListItem } from 'react-native-elements';
import { Icon, Container, Header, Content, Left, Title, Body, Right } from 'native-base'; 
import { CardSection, Input } from '../common';
import styles from './HomeStyles.js';
import { NavButtons, DrawerStack} from '../Navigation';
import { DrawerNavigator } from 'react-navigation';
import { Spinner } from '../common';
import { Font } from 'expo';
// import { User } from '../../server/models/User';


class Home extends React.Component {

    static navigationOptions = {
        drawerIcon: (
            <Image source={ require('../../assets/icons/home.png') }
                   style={{ height: 24, width: 24 }} />
        )
    }

    constructor() {
        super();
        this.state = {
            enabled:true,
            fontLoaded:false,
            user:{
                auth_id: '',
                name:'',
                email:'',
                avatar_url:'',
                points:9333
              }
        };
    }

    getUser = () => {
        console.log("in getUser()");
        
        AsyncStorage.getItem('auth_id').then(auth_id => {
            this.setState({user: { auth_id: auth_id } });
  
            console.log('auth_id: ' + this.state.user.auth_id);
            // const currUser = db.User.find({'auth_id': auth_id});
            // if(currUser){
            //     console.log(currUser);
            // }
        });
        AsyncStorage.getItem('name').then(name => {
            this.setState({user: { name: name } });
            console.log('name: ' + this.state.user.name);
        });

        AsyncStorage.getItem('email').then(email => {
            this.setState({user: { email: email } });
            console.log('email: ' + this.state.user.email);
        });

        AsyncStorage.getItem('avatar_url').then(avatar_url => {
            this.setState({user: { avatar_url: avatar_url } });
            console.log('avatar_url: ' + this.state.user.avatar_url);
        });
    }
    async componentWillMount() {
        this.getUser();
      }
    async componentDidMount() {
        await Font.loadAsync({
          'Roboto': require('native-base/Fonts/Roboto.ttf'),
          'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
        });
        this.setState({ fontLoaded: true });
      }

    render() {
        const list = [
            {
                title: 'User:',
                subtitle: 'adkahane'
            },
            {
                title: 'Level: ',
                subtitle: '3'
            },
            {
                title: 'Steps:',
                subtitle: '8,547'
            },
            {
                title: 'Distance:',
                subtitle: '4.23 miles'
            },
            {
                title: 'Time',
                subtitle: '1.5 hours'
            }

        ]
        if (this.state.fontLoaded){
        return (
        <Container>
                <Header style={{ paddingTop: Platform.OS === 'ios' ? 0 : Expo.Constants.statusBarHeight, backgroundColor: '#aa076b'}}> 
                <Left> 
                        <Icon name="ios-menu" style={{ color: '#fff' }} onPress={() => this.props.navigation.navigate('DrawerOpen')} />
                </Left>
                <Body>
                        <Title style={{ color: '#fff' }}>FitQuest</Title>
                </Body>
                <Right />
            </Header>
            <Content>
                <ScrollView contentContainerStyle={{
                    flexDirection: 'column', width: "100%",
                    flex: 1, backgroundColor: 'white',
                    borderColor: 'rgba(44, 244, 250, 1)', justifyContent: 'flex-start',
                    marginTop: '0%'
                }} scrollEnabled={this.state.enabled}>
                    <Avatar
                        xlarge
                        source={{
                            uri: this.state.user.avatar_url }}
                        onPress={() => console.log("Works! " + this.state.user)}
                        activeOpacity={0.7}
                        containerStyle={{ justifyContent: 'flex-start', alignSelf: 'flex-start', marginTop: '1%', marginBottom: "5%", marginLeft: '5%' }}
                    />
                    <View style={{justifyContent: 'flex-start', alignItems: 'flex-start', flexDirection: 'column', marginTop: -15, marginLeft: 0}}>
                            {
                                list.map((l, i) => (
                                    <ListItem
                                        key={i}
                                        title={l.title}
                                        subtitle={l.subtitle}
                                        titleStyle={{ fontSize: 22, fontWeight: 'bold', color: '#aa076b', width: 300}}
                                        subtitleStyle={{ fontSize: 22, fontWeight: 'bold', color: '#52c234', width: 300}}
                                    hideChevron={true}
                                    bottomDivider={false}
                                    />
                                ))
                            }
                    </View>
                </ScrollView>
            </Content>
        </Container>




        );
    }
    else {
        return <Spinner />;
    }
    }
}

export default Home;