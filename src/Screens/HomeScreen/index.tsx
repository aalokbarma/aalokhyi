import { View, Text, TouchableOpacity, FlatList, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import Styles from './styles';
import UserCard from '../../Components/UserCard';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchUsersStart,
  createUserSuccess,
  updateUserSuccess,
  deleteUserSuccess,
} from '../../../redux/usersSlice';
import axios from 'axios';
import { API_URL } from '../../Constants/URLs';
import UserInputModal from '../../Components/UserInputModal';

const HomeScreen = ({navigation}: any) => {

  const dispatch = useDispatch();
  const users = useSelector((state: any) => state?.users?.users);
  const loading = useSelector((state: any) => state.users.loading);
  const error = useSelector((state: any) => state.users.error);

  const [addUserModalVisible, setAddUserModalVisible] = useState<Boolean>(false);

  const [newUser, setNewUser] = useState(
    // { name: '', email: '' }
    {
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
    }
    );
  const [editingUser, setEditingUser] = useState<any>(null);

  useEffect(() => {
    dispatch(fetchUsersStart());
  }, [dispatch]);

  const handleAddUser = async (user: any) => {
    try {
      const response = await axios.post(API_URL, user);
      dispatch(createUserSuccess(response.data));
      Alert.alert("User created successfully");
      // setNewUser({ name: '', email: '' });
    } catch (err) {
      console.error(err);
    }
  };

  const handleEditUser = (user: any) => {
    setEditingUser(user);
    // setNewUser({ name: user.name, email: user.email });
  };

  const handleUpdateUser = async () => {
    if (editingUser) {
      try {
        const response = await axios.put(`${API_URL}/${editingUser.id}`, newUser);
        dispatch(updateUserSuccess(response.data));
        setEditingUser(null);
        // setNewUser({ name: '', email: '' });
      } catch (err) {
        console.error(err);
      }
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

  const onUserModalVisible = () => {
    setAddUserModalVisible(true);
  };

  const onUserModalClose = () => {
    setAddUserModalVisible(false);
  }

  return (
    <View style = {Styles.homeScreen}>
        <Text style = {Styles.headerText}>Users</Text>
        <View style = {Styles.addUserButtonContainer}>
            <TouchableOpacity style = {Styles.addUserButton} onPress={onUserModalVisible}>
                <Text style = {Styles.addUserButtonText}>Add new user</Text>
            </TouchableOpacity>
        </View>
        <View style = {Styles.mainContainer}>
          <FlatList
            data={users}
            keyExtractor={(item, index) => item.id?.toString() || index.toString()} 
            renderItem={({item, index}) => <UserCard navigation = {navigation} item = {item} index = {index}  />}
          />
            
        </View>
        <UserInputModal visible = {addUserModalVisible} onClose = {onUserModalClose} onSave = {handleAddUser} isEdit = {false} userData = {{}}  />
    </View>
  )
}

export default HomeScreen;