import {View, Text, TouchableOpacity, FlatList, Alert} from 'react-native';
import React, {useEffect, useState} from 'react';
import Styles from './styles';
import UserCard from '../../Components/UserCard';
import {useDispatch, useSelector} from 'react-redux';
import {
  fetchUsersStart,
  createUserSuccess,
} from '../../../redux/usersSlice';
import axios from 'axios';
import {API_URL} from '../../Constants/URLs';
import UserInputModal from '../../Components/UserInputModal';
import { ScrollView } from 'react-native-gesture-handler';

const HomeScreen = ({navigation}: any) => {
  const dispatch = useDispatch();
  const users = useSelector((state: any) => state?.users?.users);

  const [addUserModalVisible, setAddUserModalVisible] =
    useState<Boolean>(false);


  useEffect(() => {
    dispatch(fetchUsersStart());
  }, [dispatch]);

  const handleAddUser = async (user: any) => {
    try {
      const response = await axios.post(API_URL, user);
      dispatch(createUserSuccess(response.data));
      Alert.alert('User created successfully');
    } catch (err) {
      console.error(err);
    }
  };

  const onUserModalVisible = () => {
    setAddUserModalVisible(true);
  };

  const onUserModalClose = () => {
    setAddUserModalVisible(false);
  };

  return (
    <View style={Styles.homeScreen}>
      <Text style={Styles.headerText}>Users</Text>
      <View style={Styles.addUserButtonContainer}>
        <TouchableOpacity
          style={Styles.addUserButton}
          onPress={onUserModalVisible}>
          <Text style={Styles.addUserButtonText}>Add new user</Text>
        </TouchableOpacity>
      </View>
      <ScrollView style={Styles.mainContainer}>
        <FlatList
          data={users}
          keyExtractor={(item, index) =>
            item.id?.toString() || index.toString()
          }
          renderItem={({item, index}) => (
            <UserCard navigation={navigation} item={item} index={index} />
          )}
          ListFooterComponent={() => <View style = {Styles.flatlistFooterComponent} />}
        />
      </ScrollView>
      <UserInputModal
        visible={addUserModalVisible}
        onClose={onUserModalClose}
        onSave={handleAddUser}
        isEdit={false}
        userData={{}}
      />
    </View>
  );
};

export default HomeScreen;
