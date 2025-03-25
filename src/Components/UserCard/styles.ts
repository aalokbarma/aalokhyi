import { StyleSheet } from "react-native";
import Colors from "../../Constants/Colors";

const Styles = StyleSheet.create({
    userCard: {
    },
    userCardMainContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 10,
        backgroundColor: Colors.white,
        borderWidth: 0.5,
        borderColor: Colors.grey9,
        marginVertical: 5,
        borderRadius: 3,
        paddingHorizontal: 15,
    },
    leftContainer: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'flex-start',
    },
    indexText: {
        fontSize: 18,
        color: Colors.black,
        fontWeight: '500'
    },
    nameText: {
        fontSize: 18,
        color: Colors.black,
        fontWeight: '500',
        marginLeft: 5,
    },
    userNameText: {
        fontSize: 14,
        color: Colors.black,
        fontWeight: '400',
        marginLeft: 5,
    },
    rightContainer: {
    },
    rightArrow: {
        fontSize: 24,
        color: Colors.black,
        fontWeight: '400'
    },
});

export default Styles;