import { StyleSheet } from 'react-native';


const filmCardStyles = new StyleSheet.create({
    card: {
        width: 110,
        height: 173,
        backgroundColor: '#1c003f',
        borderRadius: 10,
        marginRight: 8,
        marginBottom: 8,
    },
    cardImage: {
        height: '70%',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    cardText: {
        color: '#ffffff',
        paddingTop: 8,
        paddingLeft: 5,
        paddingRight: 5,
    }
});

export default filmCardStyles