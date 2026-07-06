// importing all necessary components and hooks from React and React Native
import React, { useEffect, useState } from 'react';
import {View,Text,Image,StyleSheet,TextInput,Button,Alert,ScrollView,} from 'react-native';

export default function App() {

  {/* State variables to hold the input values for full name, student ID, and department, */}
  const [fullName, setFullName] = useState('');
  const [studentID, setStudentID] = useState('');
  const [department, setDepartment] = useState('');
  {/*const [register, setRegister] = useState(false)*/}

  {/*to show the student profile after registration*/}
  const [register, setRegister] = useState(true)

  
  
 
  {/* Function to validate the form inputs. It checks if any of the fields are empty*/}
  const validationForm = () => {
    if (!fullName) return Alert.alert('Error', ' Name is required');
    if (!studentID) return Alert.alert('Error', 'Student ID is required');
    if (!department) return Alert.alert('Error', 'Department is required');
    
    
    Alert.alert('Success', 'Registration Successful!');
  };
  
  {/* Add UseEffect */}
  useEffect(() => {
    console.log('Application Loaded');
  }, []);

  useEffect(() => {
    console.log('Full Name Updated:', fullName);
  }, [fullName]);

  
  

  //logout function
  const logout = () =>{
    setFullName('');
    setDepartment('');
    setStudentID('');
  }

  return (
    <ScrollView contentContainerStyle={styles.container}> {/*main container*/}

      {/* Card Container */}
      <View style={styles.card}>

        <Image
          source={{ uri: 'https://picsum.photos/200' }}style={styles.logo}/> {/* logo of the application */}

        <Text style={styles.title}>Student Registration</Text>
        <Text>Welcome Students</Text>

        <Text style={styles.subtitle}>Fill in your details below</Text>

        {/* Input Fields Registration Form*/}
        <TextInput
          style={styles.input}
          placeholder="Full Name"
          value={fullName}
          onChangeText={setFullName}
        />

        <TextInput
          style={styles.input}
          placeholder="Student ID"
          value={studentID}
          onChangeText={setStudentID}
        />

        <TextInput
          style={styles.input}
          placeholder="Department"
          value={department}
          onChangeText={setDepartment}
        />

        {/*Display Entered Information*/}
        <View style ={styles.studentProfile}>

        <Text style={styles.studentProfileText}>Student Profile</Text>
        <Text style={styles.ProfileText}>Full Name: {fullName}</Text>
        <Text style={styles.ProfileText}>Student ID: {studentID}</Text>
        <Text style={styles.ProfileText}>Department: {department}</Text>
        </View>
        

        {/* Button To register after fill in the basic information */}
        <View style={styles.buttonContainer}>
          <Button title="Register" onPress={validationForm} />
        </View>

      </View>
      
    </ScrollView>
  );
}

{/* Stylesheet for the application, defining styles for the container, card, logo, title, subtitle, input fields and button container. */}
const styles = StyleSheet.create({

  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
    padding: 10,
    margin: 8,

    
   
    
  },

  card: {
    width: '100%',
    maxWidth: 400,
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 20,
    alignItems: 'center',
    margin:20,

    // shadow (for iOS)
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,

    // shadow (for Android)
    elevation: 5,
  },

  logo: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 15,
  },

  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 5,
  },

  subtitle: {
    fontSize: 14,
    color: 'gray',
    marginBottom: 20,
  },

  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 12,
    marginBottom: 12,
    backgroundColor: '#fff',
  },

  buttonContainer: {
    marginTop: 10,
    width: '100%',
    borderRadius: 30,
  },

  studentProfile:{
    margin:20,
    padding: 10,
    color: 'blue',
    backgroundColor: 'skyblue',
    width: '100%',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',   
  },
  studentProfileText:{
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'blue', 
  },
  ProfileText:{
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'black',
  },
});