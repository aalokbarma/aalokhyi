import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import Styles from './styles';


const UserCard = ({navigation, item, index}: any) => {
    const onCardPress = () => {
        navigation.navigate("UserProfile", {item})
    }

    console.warn("ItemData => " + JSON.stringify(item))

  return (
    <View style = {Styles.userCard}>
        <TouchableOpacity style = {Styles.userCardMainContainer} onPress={onCardPress}>
            <View style = {Styles.leftContainer}>
                <Text style = {Styles.indexText}>{index+1}. </Text>
                <Text style = {Styles.nameText}>{item.username}</Text>
                <Text style = {Styles.userNameText}>{item.name}</Text>
            </View>
            <View style = {Styles.rightContainer}>
                <Text style = {Styles.rightArrow}>{'>'}</Text>
            </View>
        </TouchableOpacity>
    </View>
  )
}

export default UserCard;