<script>
import HomeComponents from './components/HomeComponents.vue';
import About from './components/About.vue';
import ServicesComponent from './components/ServicesComponent.vue'
import ContactUs from './components/ContactUs.vue'



export default {
  name: "App",
  components:{
    HomeComponents,
    About,
    ServicesComponent,
    ContactUs,
  
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
        <li><router-link to="/contactUs">Contact</router-link></li>
      </ul>
    </nav>
    <h2>{{ logo }}</h2>
  </div>

  <!-- The router-view is where the routed component will be displayed -->
  <router-view />
</template>

<style scoped>
/* Navigation container */
.nav-cont {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background: rgb(238, 174, 202);
  background: radial-gradient(circle, rgba(238, 174, 202, 1) 0%, rgba(148, 187, 233, 1) 100%);
  padding: 30px;
  border-radius: 200px;
  align-items: center;
  text-decoration: none;
  width: 70%;
  margin-left: 20%;
}

/* Navigation styling */
.my-nav {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  border: 4px solid lightcoral;
  /* width: 70%; */
  border-radius: 35%;
  background-color: white;
  font-size: 100%;
  padding: 30px;
  align-items: center;
}

/* Unordered list for the navigation items */
ul {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  list-style-type: none;
  margin: 0;
  padding: 0;
  cursor: pointer;
}

/* List items */
li {
  color: orchid;
  font-size: 150%;
  text-align: center;
  width: auto;
  margin-right: 15px;
}

li:last-child {
  margin-right: 0;
}

/* Anchor links */
a {
  text-decoration: none;
  color: orchid;
  transition: color 0.3s ease;
}

a:hover {
  color: darkorchid;
}

/* Logo styling */
h2 {
  background-color: white;
  text-align: center;
  color: orchid;
  border: 4px solid lightcoral;
  border-radius: 35%;
  width: 20%;
  padding: 20px;
  font-size: 120%;
  font-weight: bold;
  font-family: 'Courier New', Courier, monospace;
}

/* Responsive Design */

/* Medium screens (tablets) */
@media (max-width: 768px) {
  .nav-cont {
    flex-direction: column;
    padding: 20px;
  }

  .my-nav {
    width: 80%;
    margin-bottom: 20px;
    border-radius: 50px;
  }

  ul {
    flex-direction: column;
    align-items: center;
  }

  li {
    font-size: 120%;
    margin: 10px 0;
  }

  h2 {
    width: 50%;
    padding: 20px;
    font-size: 120%;
  }
}

/* Small screens (mobile) */
@media (max-width: 480px) {
  .nav-cont {
    padding: 10px;
  }

  .my-nav {
    width: 100%;
    padding: 15px;
    border-radius: 20px;
  }

  ul {
    flex-direction: column;
    align-items: center;
  }

  li {
    font-size: 100%;
    width: 100%;
    margin: 8px 0;
  }

  h2 {
    width: 70%;
    padding: 15px;
    font-size: 100%;
  }
}
</style>

