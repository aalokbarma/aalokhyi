import { View, Text, TouchableOpacity, ScrollView, Alert } from 'react-native';
import React from 'react';
import Styles from './styles';

const UserProfileScreen = ({navigation, route}: any) => {
    const {item} = route?.params;
    const onBackButtonPress = () => {
        navigation.goBack();
    }

    // console.warn("UserData from params => " + JSON.stringify(route?.params))

    const userData = {
        id: 1,
        name: "Leanne Graham",
        username: "Bret",
        email: "Sincere@april.biz",
        address: {
          street: "Kulas Light",
          suite: "Apt. 556",
          city: "Gwenborough",
          zipcode: "92998-3874",
          geo: {
            lat: "-37.3159",
            lng: "81.1496",
          },
        },
        phone: "1-770-736-8031 x56442",
        website: "hildegard.org",
        company: {
          name: "Romaguera-Crona",
          catchPhrase: "Multi-layered client-server neural-net",
          bs: "harness real-time e-markets",
        },
      };

      const onSuccessUserDeletion = () => {
        Alert.alert("User deleted succssfully.")
        onBackButtonPress();
      }

      const onDeleteUser = () => {
        Alert.alert('Warning!', 'Are you sure you want to delete the user?', [
            {
              text: 'Cancel',
              
            },
            {
                text: 'Delete', 
                onPress: () => { onSuccessUserDeletion() },
                style: 'cancel',
            },
          ]);
      }

  return (
    <View style = {Styles.userProfileScreen}>
        <View style = {Styles.headerContainer}>
            <TouchableOpacity style = {Styles.backButtonContainer} onPress={onBackButtonPress}>
                <Text style = {Styles.backButtonText}>{"<"}</Text>
            </TouchableOpacity>
            <Text style = {Styles.userNameText}>@{item.username}</Text>
        </View>
        <ScrollView contentContainerStyle={Styles.mainContainer}>
            <Text style={Styles.name}>{item.name}</Text>

            <View style={Styles.section}>
                <Text style={Styles.label}>Email:</Text>
                <Text style={Styles.value}>{item.email}</Text>
            </View>

            <View style={Styles.section}>
                <Text style={Styles.label}>Phone:</Text>
                <Text style={Styles.value}>{item.phone}</Text>
            </View>

            <View style={Styles.section}>
                <Text style={Styles.label}>Website:</Text>
                <Text style={Styles.value}>{item.website}</Text>
            </View>

            <View style={Styles.section}>
                <Text style={Styles.label}>Address:</Text>
                <Text style={Styles.value}>
                {userData.address.suite}, {item.address.street}, {item.address.city} - {item.address.zipcode}
                </Text>
            </View>

            <View style={Styles.section}>
                <Text style={Styles.label}>Company:</Text>
                <Text style={Styles.value}>{item.company.name}</Text>
                <Text style={Styles.companyTag}>{item.company.catchPhrase}</Text>
            </View>

            <View style = {Styles.editButtonContainer}>
                <TouchableOpacity style = {Styles.editButton}>
                    <Text style = {Styles.editButtonText}>Edit details</Text>
                </TouchableOpacity>
            </View>
            <View style = {Styles.deleteButtonContainer}>
                <TouchableOpacity style = {Styles.deleteButton} onPress={onDeleteUser}>
                    <Text style = {Styles.deleteButtonText}>Delete user</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    </View>
  )
}

export default UserProfileScreen;