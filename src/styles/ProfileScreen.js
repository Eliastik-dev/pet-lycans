import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    content: {
        padding: 20,
        marginTop: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 30,
        textAlign: 'center',
    },
    buttonContainer: {
        marginTop: 20,
        borderRadius: 8,
        overflow: 'hidden',
    },
    infoContainer: {
        marginTop: 30,
        padding: 15,
        backgroundColor: '#f5f7fa',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#e1e4e8',
    },
    infoText: {
        fontSize: 14,
        color: '#666',
        textAlign: 'center',
        lineHeight: 20,
    },
});

export default styles;
