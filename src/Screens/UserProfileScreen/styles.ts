import { StyleSheet } from "react-native";
import Colors from "../../Constants/Colors";

const Styles = StyleSheet.create({
    userProfileScreen: {
        flex: 1,
        backgroundColor: Colors.background,
    },
    headerContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingHorizontal: 10,
        paddingVertical: 5,
        marginBottom: 10,
        borderBottomColor: Colors.headerText,
        borderBottomWidth: 1,
    },
    backButtonContainer: {
        padding: 5,
        borderRightWidth: 1,
        borderRightColor: Colors.headerText,
        paddingRight: 15,
        marginRight: 10,
    },
    backButtonText: {
        fontSize: 24,
        color: Colors.headerText,
    },
    userNameText: {
        fontSize: 18,
        color: Colors.headerText,
        fontWeight: '500'
    },
    mainContainer: {
        flexGrow: 1,
        padding: 20,
        backgroundColor: Colors.profileBackground,
      },
      name: {
        fontSize: 26,
        fontWeight: "bold",
        color: "#333",
        textAlign: "center",
        marginBottom: 20,
      },
      section: {
        backgroundColor: "#fff",
        padding: 15,
        marginBottom: 10,
        borderRadius: 8,
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 3,
      },
      label: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#444",
      },
      value: {
        fontSize: 16,
        color: "#666",
      },
      companyTag: {
        fontSize: 14,
        fontStyle: "italic",
        color: "#888",
        marginTop: 5,
      },
      editButtonContainer: {
        width: '100%',
        paddingHorizontal: 15,
        paddingVertical: 7,
      },
      editButton: {
        backgroundColor: Colors.lightBlueButton,
        paddingVertical: 5,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
      },
      editButtonText: {
        color: Colors.background,
        fontSize: 18,
        fontWeight: '500',
      },
      deleteButtonContainer: {
        width: '100%',
        paddingHorizontal: 15,
        paddingVertical: 7,
      },
      deleteButton: {
        backgroundColor: Colors.redButton,
        paddingVertical: 5,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
      },
      deleteButtonText: {
        color: Colors.background,
        fontSize: 18,
        fontWeight: '500',
      },
});

export default Styles;