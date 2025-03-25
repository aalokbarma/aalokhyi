import React from 'react';
import {
  View,
  Text,
  TextInput,
  Modal,
  Button,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {Formik} from 'formik';
import * as Yup from 'yup';
import Colors from '../../Constants/Colors';
import Styles from './styles';

const UserInputModal = ({visible, onClose, onSave, isEdit, userData}: any) => {
  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    username: Yup.string().required('Username is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    phone: Yup.string()
      .matches(/^\d{10,}$/, 'Phone number must be at least 10 digits')
      .required('Phone is required'),
    website: Yup.string().required('Website is required'),
    companyName: Yup.string().required('Company Name is required'),
    street: Yup.string().required('Street is required'),
    city: Yup.string().required('City is required'),
    zipcode: Yup.string()
      .matches(/^\d+$/, 'Zipcode must be a number')
      .required('Zipcode is required'),
  });

  return (
    <Modal visible={visible} animationType="slide" transparent>
      <View style={Styles.modalContainer}>
        <View style={Styles.modalContent}>
          <ScrollView>
            <Text style={Styles.title}>
              {isEdit ? 'Edit User' : 'Create User'}
            </Text>

            <Formik
              initialValues={{
                name: userData?.name || '',
                username: userData?.username || '',
                email: userData?.email || '',
                phone: userData?.phone || '',
                website: userData?.website || '',
                companyName: userData?.company?.name || '',
                street: userData?.address?.street || '',
                suite: userData?.address?.suite || '',
                city: userData?.address?.city || '',
                zipcode: userData?.address?.zipcode || '',
                catchPhrase: userData?.company?.catchPhrase || '',
              }}
              validationSchema={validationSchema}
              onSubmit={values => {
                const newUser = {
                  name: values.name,
                  username: values.username,
                  email: values.email,
                  address: {
                    street: values.street,
                    suite: values.suite,
                    city: values.city,
                    zipcode: values.zipcode,
                    geo: {lat: '0.0000', lng: '0.0000'}, // I am keeping these values static as I need to integrate location to get these values
                  },
                  phone: values.phone,
                  website: values.website,
                  company: {
                    name: values.companyName,
                    catchPhrase: values.catchPhrase,
                    bs: 'N/A', // We are not using it, So I kept it static.
                  },
                };
                onSave(newUser);
                onClose();
              }}>
              {({
                handleChange,
                handleBlur,
                handleSubmit,
                values,
                errors,
                touched,
              }) => (
                <>
                  <TextInput
                    placeholder="Enter Name"
                    style={Styles.input}
                    onChangeText={handleChange('name')}
                    onBlur={handleBlur('name')}
                    value={values.name}
                    placeholderTextColor={Colors.placeholder1}
                  />
                  {touched.name && errors.name && (
                    <Text style={Styles.errorText}>{errors.name}</Text>
                  )}

                  <TextInput
                    placeholder="Enter Username"
                    style={Styles.input}
                    onChangeText={handleChange('username')}
                    onBlur={handleBlur('username')}
                    value={values.username}
                    placeholderTextColor={Colors.placeholder1}
                  />
                  {touched.username && errors.username && (
                    <Text style={Styles.errorText}>{errors.username}</Text>
                  )}

                  <TextInput
                    placeholder="Enter Email"
                    style={Styles.input}
                    keyboardType="email-address"
                    onChangeText={handleChange('email')}
                    onBlur={handleBlur('email')}
                    value={values.email}
                    placeholderTextColor={Colors.placeholder1}
                  />
                  {touched.email && errors.email && (
                    <Text style={Styles.errorText}>{errors.email}</Text>
                  )}

                  <TextInput
                    placeholder="Enter Phone"
                    style={Styles.input}
                    keyboardType="phone-pad"
                    onChangeText={handleChange('phone')}
                    onBlur={handleBlur('phone')}
                    value={values.phone}
                    placeholderTextColor={Colors.placeholder1}
                  />
                  {touched.phone && errors.phone && (
                    <Text style={Styles.errorText}>{errors.phone}</Text>
                  )}

                  <TextInput
                    placeholder="Enter Website"
                    style={Styles.input}
                    onChangeText={handleChange('website')}
                    onBlur={handleBlur('website')}
                    value={values.website}
                    placeholderTextColor={Colors.placeholder1}
                  />
                  {touched.website && errors.website && (
                    <Text style={Styles.errorText}>{errors.website}</Text>
                  )}

                  <TextInput
                    placeholder="Enter Street"
                    style={Styles.input}
                    onChangeText={handleChange('street')}
                    onBlur={handleBlur('street')}
                    value={values.street}
                    placeholderTextColor={Colors.placeholder1}
                  />
                  {touched.street && errors.street && (
                    <Text style={Styles.errorText}>{errors.street}</Text>
                  )}

                  <TextInput
                    placeholder="Enter Suite"
                    style={Styles.input}
                    onChangeText={handleChange('suite')}
                    onBlur={handleBlur('suite')}
                    value={values.suite}
                    placeholderTextColor={Colors.placeholder1}
                  />

                  <TextInput
                    placeholder="Enter City"
                    style={Styles.input}
                    onChangeText={handleChange('city')}
                    onBlur={handleBlur('city')}
                    value={values.city}
                    placeholderTextColor={Colors.placeholder1}
                  />
                  {touched.city && errors.city && (
                    <Text style={Styles.errorText}>{errors.city}</Text>
                  )}

                  <TextInput
                    placeholder="Enter Zipcode"
                    style={Styles.input}
                    keyboardType="numeric"
                    onChangeText={handleChange('zipcode')}
                    onBlur={handleBlur('zipcode')}
                    value={values.zipcode}
                    placeholderTextColor={Colors.placeholder1}
                  />
                  {touched.zipcode && errors.zipcode && (
                    <Text style={Styles.errorText}>{errors.zipcode}</Text>
                  )}

                  <TextInput
                    placeholder="Enter Company Name"
                    style={Styles.input}
                    onChangeText={handleChange('companyName')}
                    onBlur={handleBlur('companyName')}
                    value={values.companyName}
                    placeholderTextColor={Colors.placeholder1}
                  />
                  {touched.companyName && errors.companyName && (
                    <Text style={Styles.errorText}>{errors.companyName}</Text>
                  )}

                  <TextInput
                    placeholder="Enter Catch Phrase"
                    style={Styles.input}
                    onChangeText={handleChange('catchPhrase')}
                    onBlur={handleBlur('catchPhrase')}
                    value={values.catchPhrase}
                    placeholderTextColor={Colors.placeholder1}
                  />

                  <View style={Styles.buttonRow}>
                    <TouchableOpacity
                      style={[
                        Styles.button,
                        {backgroundColor: Colors.redButton},
                      ]}
                      onPress={onClose}>
                      <Text style={Styles.buttonText}>Cancel</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={[
                        Styles.button,
                        {backgroundColor: Colors.lightBlueButton},
                      ]}
                      onPress={handleSubmit}>
                      <Text style={Styles.buttonText}>Save</Text>
                    </TouchableOpacity>
                  </View>
                </>
              )}
            </Formik>
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
};

export default UserInputModal;
