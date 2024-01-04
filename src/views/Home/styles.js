import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        marginTop: 5,
        marginBottom: 5,
        height: '7%',
        width: '70%',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        backgroundColor: 'gray',
    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
    },
    modal: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    box: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10
    },
    textInput: {
        height: 20,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10
    },
    buttonWrap: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: 20,
    }
});
export default styles;