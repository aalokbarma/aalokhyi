import { View, Text, TouchableOpacity, ScrollView, Alert } from 'react-native';
import React, { useState } from 'react';
import Styles from './styles';
import { 
    useSelector 
} from 'react-redux';
import { useDispatch } from 'react-redux';
import {
    fetchUsersStart,
    createUserSuccess,
    updateUserSuccess,
    deleteUserSuccess,
  } from '../../../redux/usersSlice';
import axios from 'axios';
import { API_URL } from '../../Constants/URLs';
import UserInputModal from '../../Components/UserInputModal';

const UserProfileScreen = ({navigation}: any) => {

    const dispatch = useDispatch();
    const currentUser = useSelector((state: any) => state?.users?.currUser);

    const [editUserModalVisible, setEditUserModalVisible] = useState<Boolean>(false);

    const onBackButtonPress = () => {
        navigation.goBack();
    }

    const handleUpdateUser = async (user: any) => {
          try {
            const response = await axios.put(`${API_URL}/${currentUser?.id}`, user);
            dispatch(updateUserSuccess(response.data));
            Alert.alert("Userdata edited successfully");
          } catch (err) {
            console.error(err);
          }
      };

    const handleDeleteUser = async (id: any) => {
        try {
          await axios.delete(`${API_URL}/${id}`);
          dispatch(deleteUserSuccess(id));
        } catch (err) {
          console.error(err);
        }
      };



    console.warn("UserData from params => " + JSON.stringify(currentUser))


      const onSuccessUserDeletion = () => {
        handleDeleteUser(currentUser?.id);
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

      const onEditUserModalVisible = () => {
        setEditUserModalVisible(true);
      }
      const onEditUserModalClose = () => {
        setEditUserModalVisible(false);
      }

  return (
    <View style = {Styles.userProfileScreen}>
        <View style = {Styles.headerContainer}>
            <TouchableOpacity style = {Styles.backButtonContainer} onPress={onBackButtonPress}>
                <Text style = {Styles.backButtonText}>{"<"}</Text>
            </TouchableOpacity>
            <Text style = {Styles.userNameText}>@{currentUser.username}</Text>
        </View>
        <ScrollView contentContainerStyle={Styles.mainContainer}>
            <Text style={Styles.name}>{currentUser.name}</Text>

            <View style={Styles.section}>
                <Text style={Styles.label}>Email:</Text>
                <Text style={Styles.value}>{currentUser.email}</Text>
            </View>

            <View style={Styles.section}>
                <Text style={Styles.label}>Phone:</Text>
                <Text style={Styles.value}>{currentUser.phone}</Text>
            </View>

            <View style={Styles.section}>
                <Text style={Styles.label}>Website:</Text>
                <Text style={Styles.value}>{currentUser.website}</Text>
            </View>

            <View style={Styles.section}>
                <Text style={Styles.label}>Address:</Text>
                <Text style={Styles.value}>
                {currentUser.address.suite}, {currentUser.address.street}, {currentUser.address.city} - {currentUser.address.zipcode}
                </Text>
            </View>

            <View style={Styles.section}>
                <Text style={Styles.label}>Company:</Text>
                <Text style={Styles.value}>{currentUser.company.name}</Text>
                <Text style={Styles.companyTag}>{currentUser.company.catchPhrase}</Text>
            </View>

            <View style = {Styles.editButtonContainer}>
                <TouchableOpacity style = {Styles.editButton} onPress={onEditUserModalVisible}>
                    <Text style = {Styles.editButtonText}>Edit details</Text>
                </TouchableOpacity>
            </View>
            <View style = {Styles.deleteButtonContainer}>
                <TouchableOpacity style = {Styles.deleteButton} onPress={onDeleteUser}>
                    <Text style = {Styles.deleteButtonText}>Delete user</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
        <UserInputModal visible = {editUserModalVisible} onClose = {onEditUserModalClose} onSave = {handleUpdateUser} isEdit = {true} userData = {currentUser}  />
    </View>
  )
}

export default UserProfileScreen;