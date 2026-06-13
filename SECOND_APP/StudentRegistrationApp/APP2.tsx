// Import React and state management hook
import React, { useState ,useEffect} from 'react';

// Import React Native UI components from the library
import {View,Text,StyleSheet,TextInput,TouchableOpacity,SafeAreaView, Image} from 'react-native';


// MAIN APP COMPONENT FUNCTION
export default function App() {

  // STATE: controls which screen is visible
  const [screen, setScreen] = useState('welcome');

  // STATE: login form fields
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // FUNCTION: move to login screen
  const goToLogin = () => {
    setScreen('login');
  };

  // FUNCTION: handle login validation
  const handleLogin = () => {

    // check username empty
    if (!username) {
      alert('Username is required');
      return;
    }

    // check password empty
    if (!password) {
      alert('Password is required');
      return;
    }

    // check password length
    if(password.length < 6) {
      alert('Password must be at least 6 characters long');
      return;
    }
    if(!password || !password.includes('!') && !password.includes('@') && !password.includes('#') && !password.includes('$') && !password.includes('%')) {
      alert('Password must contain at least one special character (!, @, #, $, %, etc.)');
      return;
    }

    //validate the email
    if(!email || !email.includes('@') || !email.includes('.')) {
      alert('Please enter a valid email address');
      return;
    }

    // if valid, go to profile screen
    setScreen('profile');
  };

  // FUNCTION: logout and return to welcome screen
  const logout = () => {
    setUsername('');
    setEmail('');
    setPassword('');
    setScreen('welcome');
  };

  useEffect (() => {
    console.log('Application');
  },[]);

  useEffect (() => {
    console.log('name');
  },[username]);



  // WELCOME SCREEN UI
  if (screen === 'welcome') {
    return (
      <View style={styles.main_container}>

        <View style = {styles.profile_container}>
         <Image   source={require('./assets/yaqub.png')}  style = {{width: 100,height: 100, borderRadius: 60,}}/>

        </View>
       
        <SafeAreaView style={styles.container}>

            {/* App Title */}
            <Text style={styles.title}>Welcome App</Text>

            {/* Subtitle */}
            <Text style={styles.subtitle}>
              Simple Multi-Screen App
            </Text>

            {/* Button to go to login screen */}
            <TouchableOpacity style={styles.button} onPress={goToLogin}>
              <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity> 

        </SafeAreaView>
      </View>
    );
  }

  // LOGIN SCREEN UI
  if (screen === 'login') {
    return (
      <View style={styles.main_container}>

        <SafeAreaView style={styles.container}>

            {/* Screen Title */}
            <Text style={styles.title}>Login Screen</Text>

            {/* Username Input */}
            <TextInput
              style={styles.input}
              placeholder="Enter Username"
              value={username}
              onChangeText={setUsername}
            />

            {/*Email*/}
            <TextInput style = {styles.input}
            placeholder='Enter your email'
              value={email}
              onChangeText={setEmail}
              />

            {/* Password Input */}
            <TextInput
              style={styles.input}
              placeholder="Enter Password"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
            />

            {/* Login Button */}
            <TouchableOpacity style={styles.button} onPress={handleLogin}>
              <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>

            {/* Back Button */}
            <TouchableOpacity onPress={() => setScreen('welcome')}>
              <Text style={styles.link}>Back to Welcome</Text>
            </TouchableOpacity>

        </SafeAreaView>
      </View>
    );
  }

  // PROFILE SCREEN UI
  if (screen === 'profile') {
    return (
      <View style={styles.main_container}>
      <SafeAreaView style={styles.container}>

        {/* Title */}
        <Text style={styles.title}>Profile Screen</Text>

        {/* Display user info */}
        <Text style={styles.text}>Username: {username}</Text>
        <Text style={styles.text}>email: {email}</Text>

        {/* Logout button */}
        <TouchableOpacity style={styles.button} onPress={logout}>
          <Text style={styles.buttonText}>Logout</Text>
        </TouchableOpacity>

      </SafeAreaView>
      </View>
    );
  }
  return null;
}

// STYLES SECTION
const styles = StyleSheet.create({
  'main_container': {
    flex: 1,
    backgroundColor: '#e0f7fa',
    borderStyle: 'solid',
    borderWidth: 2,
    borderColor: '#00796b',
    borderRadius: 20,
    margin: 12,
    padding: 20,
  },

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
    padding: 20,
  },

  // Main title style
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
  },

  // Subtitle style
  subtitle: {
    fontSize: 16,
    color: 'gray',
    marginBottom: 20,
    textAlign: 'center',
  },

  // Normal text
  text: {
    fontSize: 18,
    marginBottom: 10,
  },

  // Input fields
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 12,
    marginBottom: 15,
    backgroundColor: 'white',
  },

  // Button style
  button: {
    backgroundColor: '#007bff',
    padding: 12,
    borderRadius: 10,
    width: '100%',
    alignItems: 'center',
    marginBottom: 10,
  },

  // Button text
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },

  // Link text (back button)
  link: {
    color: '#007bff',
    marginTop: 10,
    fontSize: 14,
  },

  profile_container:{
   
    alignItems: 'center',
    margin: 10,
    padding: 10,
  }
});