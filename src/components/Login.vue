<!-- <script setup>
import { ref } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';

const router = useRouter();

const email = ref('');
const password = ref('');

const login = async () => {
  try {
    const response = await axios.post('http://localhost:3000/api/user/login', {
      email: email.value,
      password: password.value
    });
    console.log('Login successful:', response.data);
    // Optionally, you can perform some action after successful login
    // For example, navigate to the home page
    router.push('/home');
  } catch (error) {
    console.error('Error logging in:', error);
    // Optionally, you can handle the error (e.g., display a message to the user)
  }

// const forgot = () => {
//   // Logic for handling forgot password functionality (e.g., redirecting to a password reset page)
//   console.log("forgot Password");
//}

};
</script> -->



<template>
    <div class="login">
        <header>
        <h1>Login Form</h1>
        </header>

        <main>
        <div >
          <form @submit.prevent="login">
            <input type="email" placeholder="Enter email" v-model="email">
            <input type="password" placeholder="Enter password" v-model="password">
            <input type="submit" value="Login">
          </form>
        </div>
        </main>
  
      <footer>
        <p>Not have an account?Regisetr here <a href="Signup">Signup</a></p>
        <p><a  href="Forgot"  class="dot"  @click.prevent="forgot">Forgot Password?</a></p>

      </footer>
    </div>

</template>

<style scoped>
/* General Styles */
/* body {
  /* display: flex; */
  /* flex-direction: row; 
  margin: 5px;
  font-family: Arial, sans-serif;
} */

.login {
  display: flex;
  flex-direction: column;
  /* min-height: 100vh; */
  justify-items: center;
    padding-top: 100px;
    margin-right: 700px;   /* this was 400 */
    /* min-height: 200vh; */
    /* min-width: 50vh; */
  } 

header, footer {
  background: rgb(238,174,202);
  background: radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%);
  color: white;
  padding: 20px;
  margin-left: 300px;
  border:2px solid white;
  border-radius: 100px;

}

main {
  /* flex-grow: 1; */
  display: flex;
  justify-content: center;
  align-items: center;
}

form {
  width: 700px;
  padding: 30px;
  margin-left:300px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

input {
  display: block;
  width: 100%;
  margin-bottom: 10px;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 3px;
}

input[type="submit"] {
  background-color: #007bff;
  color: white;
  cursor: pointer;
}

input[type="submit"]:hover {
  background-color: #0056b3;
}

footer p {
  text-align: center;
  font-size: medium;

}

footer a {
    color: #007bff;
  text-decoration: none;
  font-weight: bold;
}
 .dot{
    color: red;
  }
footer a:hover {
  text-decoration: underline;
}
</style>