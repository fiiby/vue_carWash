<!-- <!-- <script setup>
import { ref } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';

const router = useRouter();
const username = ref('');
const email = ref('');
const password = ref('');

const signup = async () => {
  console.log(`${username.value} ${email.value} ${password.value}`);
  try {
    // const response = await axios.post('http://localhost:3000/api/user/register', {
      username: username.value,
      email: email.value,
      password: password.value
    });
    console.log('Signup successful:', response.data);

    //Clear input fields after successful signup
    username.value = '',
    email.value = '',
    password.value= '';

    // Redirect to login page after successful signup
    router.push('/login');
  } catch (error) {
    console.error('Error signing up:', error);
    // can handle the error (e.g., display a message to the user)
  }
};
</script> -->



<<template>
    <div class="cntr">
        <header>
        <h1>Signup Form</h1>
        </header>

        <main>
        <div>
          <form @submit.prevent="Signup">
            <input type="text" placeholder="Enter username" v-model="username">
            <input type="email" placeholder="Enter email" v-model="email">
            <input type="password" placeholder="Enter password" v-model="password">
            <input type="submit" value="Sign Up">
            <p>{{ username }}</p>
          </form>
         
        </div>
       
        </main>
  
      <footer>
        <p>Already have an account? <a href="Login">Login</a></p>
      </footer>
    </div>
  </template>
  
 
  <style scoped>
  /* General Styles */
  body {
    display: flex;
    flex-direction: column;
    margin: 5px;
    font-family: Arial, sans-serif;
  }
  
  .cntr {
    display: flex;
    flex-direction: column;
    justify-items: center;
    padding-top: 100px;
    margin-right: 700px;  /* this was 400 */
    min-height: 200vh;
    min-width: 50vh;
    } 
  
  header, footer {
  background-color:grey;
    /* background-color:rgba(141, 21, 145, 0.911); */
    color: white;
    padding: 20px;
  }
  
  main {
    /* flex-grow: 1; */
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  form {
    width: 400px;
    padding: 20px;
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
  }
  
  footer a {
    color: #007bff;
    text-decoration: none;
     font-weight: bold;
  }
 
  footer a:hover {
    text-decoration: underline;
  }
  </style>
