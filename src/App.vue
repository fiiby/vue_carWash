<script>
import HomeComponents from './components/HomeComponents.vue';
import About from './components/About.vue';
import ServicesComponent from './components/ServicesComponent.vue'
import Login from './components/Login.vue';
import Signup from './components/Signup.vue';
import ContactUs from './components/ContactUs.vue'
import FooterComponent from './components/FooterComponent.vue';




export default {
  name: "App",
  components:{
    HomeComponents,
    About,
    ServicesComponent,
    Login,
    Signup,
    ContactUs,
    FooterComponent
  },

  data() {
    return {
      logo: "Shineville Auto-spa",
  
    };
  }
};
</script>


 <template>
  <div class="nav-cont">
    <nav class="my-nav">
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/about">About</router-link></li>
        <li><router-link to="/services">Services</router-link></li>
        <li><router-link to="/login">Login</router-link></li>
        <li><router-link to="/signup">Signup</router-link></li>
        <li><router-link to="/contactUs">Contact</router-link></li>
      </ul>
    </nav>
    <h2>{{ logo }}</h2>
    
  </div>

  <!-- The router-view is where the routed component will be displayed -->
  
  <router-view />
  
  <!-- Footer is static and not affected by routing -->
  <FooterComponent />

</template>



<style scoped>
.nav-cont {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background: rgb(238,174,202);
    background: radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%);
    padding: 30px;
    border-radius:300px;
    /* width: 100%;   */
    align-items: center;
    text-decoration: none;
    
}
.my-nav {
  text-decoration: none;
  display: flexbox;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  border:  4px solid lightcoral;
  width: 50%;
  border-radius:35%;
  color: orchid;
  background-color: white; 
  font-size: 100%;
  padding: 30px;
  align-items: center;

  
}
ul {
   display: flex;
  flex-direction: row;
  /* flex-wrap: wrap; */
  justify-content: space-between;
  cursor: pointer;
  text-decoration: none;
 
}
li {
  text-decoration: none;
   display: flex;
  flex-wrap: wrap; 
  color: orchid;
  font-size: 150%;
  width: 20%;
  height: 5%;

}

h2 {
  background-color: white;
  text-align: center;
  color: orchid;
  border: 4px solid lightcoral;
  border-radius: 35%;
  width: 20%;
  padding: 40px;
  font-size:150%;
font-family:'Courier New', Courier, monospace;
}

.body-container {
  background-color:white;
  text-decoration: none;
}

</style>