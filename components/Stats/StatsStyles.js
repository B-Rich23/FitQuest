import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    contentContainer: {
        flex:0,
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: 'white',
        paddingVertical: 20
    },
    chart: {
        width: '85%',
        height: '100%',
        marginTop: '0%',
        marginBottom: '0%'
    },
    text: {
        fontWeight: 'bold',
        fontSize: 20,
        color: 'rgba(74, 145, 48, 1)',
        marginTop: '2%'
    }
});

export default styles;