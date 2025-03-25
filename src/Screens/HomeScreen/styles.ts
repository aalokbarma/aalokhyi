import {StyleSheet} from 'react-native';
import Colors from '../../Constants/Colors';

const Styles = StyleSheet.create({
  homeScreen: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  headerText: {
    fontSize: 24,
    width: '100%',
    fontWeight: '800',
    textAlign: 'center',
    padding: 5,
    color: Colors.headerText,
    borderBottomColor: Colors.headerText,
    borderBottomWidth: 1,
    marginBottom: 10,
  },
  mainContainer: {
    padding: 10,
  },
  addUserButtonContainer: {
    width: '100%',
    paddingVertical: 3,
    paddingHorizontal: 10,
    alignItems: 'flex-end',
  },
  addUserButton: {
    paddingHorizontal: 15,
    paddingVertical: 5,
    backgroundColor: Colors.lightBlueButton,
    borderRadius: 5,
  },
  addUserButtonText: {
    fontSize: 16,
    fontWeight: '500',
    color: Colors.background,
  },
});

export default Styles;
