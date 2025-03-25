import { StyleSheet } from "react-native";
import Colors from "../../Constants/Colors";

const Styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0,0,0,0.5)",
      },
      modalContent: {
        width: "90%",
        backgroundColor: "#fff",
        padding: 20,
        borderRadius: 10,
      },
      title: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 10,
        textAlign: "center",
      },
      input: {
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 8,
        padding: 10,
        marginBottom: 10,
      },
      errorText: {
        color: "red",
        fontSize: 12,
        marginBottom: 10,
      },
      buttonRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 10,
      },
      button: {
        width: '45%',
        paddingVertical: 5,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5
      },
      buttonText: {
        color: Colors.background,
        fontWeight: '600',
        fontSize: 20
      },
});

export default Styles;