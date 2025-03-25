import { View, Text, TouchableOpacity, FlatList } from 'react-native'
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

const API_URL = 'https://jsonplaceholder.typicode.com/users';

const HomeScreen = ({navigation}: any) => {

  const dispatch = useDispatch();
  const users = useSelector((state: any) => state?.users?.users);
  const loading = useSelector((state: any) => state.users.loading);
  const error = useSelector((state: any) => state.users.error);

  const [newUser, setNewUser] = useState({ name: '', email: '' });
  const [editingUser, setEditingUser] = useState<any>(null);

  useEffect(() => {
    dispatch(fetchUsersStart());
    // console.warn("UsersData => " + JSON.stringify(users))
  }, [dispatch]);

  const handleAddUser = async () => {
    try {
      const response = await axios.post(API_URL, newUser);
      dispatch(createUserSuccess(response.data));
      setNewUser({ name: '', email: '' });
    } catch (err) {
      console.error(err);
    }
  };

  const handleEditUser = (user: any) => {
    setEditingUser(user);
    setNewUser({ name: user.name, email: user.email });
  };

  const handleUpdateUser = async () => {
    if (editingUser) {
      try {
        const response = await axios.put(`${API_URL}/${editingUser.id}`, newUser);
        dispatch(updateUserSuccess(response.data));
        setEditingUser(null);
        setNewUser({ name: '', email: '' });
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

  return (
    <View style = {Styles.homeScreen}>
        <Text style = {Styles.headerText}>Users</Text>
        <View style = {Styles.addUserButtonContainer}>
            <TouchableOpacity style = {Styles.addUserButton}>
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
    </View>
  )
}

export default HomeScreen;