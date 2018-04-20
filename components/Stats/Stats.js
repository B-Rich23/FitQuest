import React from 'react';
import { StyleSheet, View, Component, Text, ScrollView, Image, Platform } from 'react-native';
import { Icon, Container, Header, Content, Left, Body, Title, Right } from 'native-base';
import PureChart from 'react-native-pure-chart';
import styles from './StatsStyles.js';


class Stats extends React.Component {
    
    static navigationOptions = {
      drawerIcon: (
        <Image source={ require('../../assets/icons/stats.png') }
             style={{ height: 24, width: 24 }} />
      )
    }


    render() {
        let sampleData = [
          
                 {
              seriesName: 'series1',
              data: [
                {x: '2018-04-01', y: 500},
                {x: '2018-04-02', y: 2000},
                {x: '2018-04-03', y: 1700},
                {x: '2018-04-04', y: 2500},
                {x: '2018-04-05', y: 10000}
              ],
                  color: 'rgba(244, 49,229, 1)'
              
                },
            {
              seriesName: 'series2',
              data: [
                {x: '2018-04-01', y: 2000},
                {x: '2018-04-02', y: 10000},
                {x: '2018-04-03', y: 1400},
                {x: '2018-04-04', y: 5500},
                {x: '2018-04-05', y: 400}
              ],
              color: 'rgba(44, 244, 250, 1)'
            }
              ];

        let exampleData = [
          
                 {
              seriesName: 'series1',
              data: [
                {x: '2018-04-01', y: 3},
                {x: '2018-04-02', y: 20},
                {x: '2018-04-03', y: 17},
                {x: '2018-04-04', y: 25},
                {x: '2018-04-05', y: 10}
              ],
                  color: 'rgba(244, 49,229, 1)'
              
                },
            {
              seriesName: 'series2',
              data: [
                {x: '2018-04-01', y: 20},
                {x: '2018-04-02', y: 10},
                {x: '2018-04-03', y: 14},
                {x: '2018-04-04', y: 5},
                {x: '2018-04-05', y: 4}
              ],
              color: 'rgba(44, 244, 250, 1)'
            }
            ];

        let testData = [
            {
              seriesName: 'series1',
              data: [
                {x: '2018-04-01', y: 3},
                {x: '2018-04-02', y: 2},
                {x: '2018-04-03', y: 17},
                {x: '2018-04-04', y: 5},
                {x: '2018-04-05', y: 10}
              ],
              color: 'rgba(49, 111,244, 1)'
            },
            {
              seriesName: 'series2',
              data: [
                {x: '2018-04-01', y: 2},
                {x: '2018-04-02', y: 10},
                {x: '2018-04-03', y: 14},
                {x: '2018-04-04', y: 5},
                {x: '2018-04-05', y: 4}
              ],
              color: 'rgba(182, 44, 250, 1)'
            }
          ];

        return (
          <Container> 
            <Header style={{ paddingTop: Platform.OS === 'ios' ? 0 : Expo.Constants.statusBarHeight}}> 
              <Left> 
                <Icon name="ios-menu" onPress={() => this.props.navigation.navigate('DrawerOpen')} />
              </Left>
              <Body>
                <Title>FitQuest</Title>
              </Body>
              <Right />
            </Header>
            <Content>
              <ScrollView contentContainerStyle={styles.contentContainer}>
                <Text style={styles.text}>Steps Taken</Text>
                <PureChart style={styles.chart} data={sampleData} type='bar' />
                <Text style={styles.text}>{`Distance(mi)`}</Text>
                <PureChart style={styles.chart} data={testData} type='bar' />
                <Text style={styles.text}>{`Speed(mph)`}</Text>
                <PureChart style={styles.chart} data={exampleData} type='bar' />
              </ScrollView>
            </Content>
          </Container>
        );
    }
}

export default Stats;