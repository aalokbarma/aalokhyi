import React from "react";
import { View, Text, TextInput, Modal, Button, ScrollView } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import Colors from "../../Constants/Colors";
import Styles from "./styles";

const UserInputModal = ({ visible, onClose, onSave }: any) => {
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    username: Yup.string().required("Username is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    phone: Yup.string().matches(/^\d{10,}$/, "Phone number must be at least 10 digits").required("Phone is required"),
    website: Yup.string().required("Website is required"),
    companyName: Yup.string().required("Company Name is required"),
    street: Yup.string().required("Street is required"),
    city: Yup.string().required("City is required"),
    zipcode: Yup.string().matches(/^\d+$/, "Zipcode must be a number").required("Zipcode is required"),
  });

  return (
    <Modal visible={visible} animationType="slide" transparent>
      <View style={Styles.modalContainer}>
        <View style={Styles.modalContent}>
          <ScrollView>
            <Text style={Styles.title}>Create User</Text>

            <Formik
              initialValues={{
                name: "",
                username: "",
                email: "",
                phone: "",
                website: "",
                companyName: "",
                street: "",
                suite: "",
                city: "",
                zipcode: "",
                catchPhrase: "",
              }}
              validationSchema={validationSchema}
              onSubmit={(values) => {
                const newUser = {
                  name: values.name,
                  username: values.username,
                  email: values.email,
                  address: {
                    street: values.street,
                    suite: values.suite,
                    city: values.city,
                    zipcode: values.zipcode,
                    geo: { lat: "0.0000", lng: "0.0000" }, // I am keeping these values static as I need to integrate location to get these values
                  },
                  phone: values.phone,
                  website: values.website,
                  company: {
                    name: values.companyName,
                    catchPhrase: values.catchPhrase,
                    bs: "N/A", // We are not using it, So I kept it static.
                  },
                };
                onSave(newUser);
                onClose();
              }}
            >
              {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
                <>
                  <TextInput
                    placeholder="Enter Name"
                    style={Styles.input}
                    onChangeText={handleChange("name")}
                    onBlur={handleBlur("name")}
                    value={values.name}
                    placeholderTextColor={Colors.gray}
                  />
                  {touched.name && errors.name && <Text style={Styles.errorText}>{errors.name}</Text>}

                  <TextInput
                    placeholder="Enter Username"
                    style={Styles.input}
                    onChangeText={handleChange("username")}
                    onBlur={handleBlur("username")}
                    value={values.username}
                    placeholderTextColor={Colors.gray}
                  />
                  {touched.username && errors.username && <Text style={Styles.errorText}>{errors.username}</Text>}

                  <TextInput
                    placeholder="Enter Email"
                    style={Styles.input}
                    keyboardType="email-address"
                    onChangeText={handleChange("email")}
                    onBlur={handleBlur("email")}
                    value={values.email}
                    placeholderTextColor={Colors.gray}
                  />
                  {touched.email && errors.email && <Text style={Styles.errorText}>{errors.email}</Text>}

                  <TextInput
                    placeholder="Enter Phone"
                    style={Styles.input}
                    keyboardType="phone-pad"
                    onChangeText={handleChange("phone")}
                    onBlur={handleBlur("phone")}
                    value={values.phone}
                    placeholderTextColor={Colors.gray}
                  />
                  {touched.phone && errors.phone && <Text style={Styles.errorText}>{errors.phone}</Text>}

                  <TextInput
                    placeholder="Enter Website"
                    style={Styles.input}
                    onChangeText={handleChange("website")}
                    onBlur={handleBlur("website")}
                    value={values.website}
                    placeholderTextColor={Colors.gray}
                  />
                  {touched.website && errors.website && <Text style={Styles.errorText}>{errors.website}</Text>}

                  <TextInput
                    placeholder="Enter Street"
                    style={Styles.input}
                    onChangeText={handleChange("street")}
                    onBlur={handleBlur("street")}
                    value={values.street}
                    placeholderTextColor={Colors.gray}
                  />
                  {touched.street && errors.street && <Text style={Styles.errorText}>{errors.street}</Text>}

                  <TextInput
                    placeholder="Enter Suite"
                    style={Styles.input}
                    onChangeText={handleChange("suite")}
                    onBlur={handleBlur("suite")}
                    value={values.suite}
                    placeholderTextColor={Colors.gray}
                  />

                  <TextInput
                    placeholder="Enter City"
                    style={Styles.input}
                    onChangeText={handleChange("city")}
                    onBlur={handleBlur("city")}
                    value={values.city}
                    placeholderTextColor={Colors.gray}
                  />
                  {touched.city && errors.city && <Text style={Styles.errorText}>{errors.city}</Text>}

                  <TextInput
                    placeholder="Enter Zipcode"
                    style={Styles.input}
                    keyboardType="numeric"
                    onChangeText={handleChange("zipcode")}
                    onBlur={handleBlur("zipcode")}
                    value={values.zipcode}
                    placeholderTextColor={Colors.gray}
                  />
                  {touched.zipcode && errors.zipcode && <Text style={Styles.errorText}>{errors.zipcode}</Text>}

                  <TextInput
                    placeholder="Enter Company Name"
                    style={Styles.input}
                    onChangeText={handleChange("companyName")}
                    onBlur={handleBlur("companyName")}
                    value={values.companyName}
                    placeholderTextColor={Colors.gray}
                  />
                  {touched.companyName && errors.companyName && <Text style={Styles.errorText}>{errors.companyName}</Text>}

                  <TextInput
                    placeholder="Enter Catch Phrase"
                    style={Styles.input}
                    onChangeText={handleChange("catchPhrase")}
                    onBlur={handleBlur("catchPhrase")}
                    value={values.catchPhrase}
                    placeholderTextColor={Colors.gray}
                  />

                  <View style={Styles.buttonRow}>
                    <Button title="Cancel" onPress={onClose} color="red" />
                    <Button title="Save" onPress={handleSubmit} />
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
