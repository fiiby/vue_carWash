<script>
import ServicesComponent from './components/ServicesComponent.vue'
import ContactUs from './components/ContactUs.vue'
import FooterComponent from './components/FooterComponent.vue';
import About from './components/About.vue';

export default {
  name: "App",
  components:{
    About,
    ServicesComponent,
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
      <!-- <div class="icon">Icon</div> -->
     
      <!-- <div class="links"></div> -->

      <ul>
            <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/about">About</router-link></li>
          <li><router-link to="/servixes">Services</router-link></li>
          <li><router-link to="/contactUs">Contact</router-link></li>


      </ul>
      
    </nav>
    <h2>{{ logo }}</h2>
    
    
    </div>
    <!-- <h1>{{ heading }}</h1> -->
    <!-- <p>{{ description }}</p> -->
      <!-- <button @click="learnMore">Learn more</button> -->

  <!-- </div> -->
  <div class="body-container">


        <About/>
      <ServicesComponent />
     
      <ContactUs/>

    </div>
    <FooterComponent/>
<router-view></router-view>
 
 
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
     height: 100px;
    /* width: 100%;   */
    align-items: center;
}
.my-nav {
  display: flexbox;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  border:  4px solid lightcoral;
  min-width: 30%;
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
  flex-wrap: wrap;
  justify-content: space-between;
  justify-content: space-between;
  cursor: pointer;
 
}
li {
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
font-family:'Courier New', Courier, monospace
}

.body-container {
  background-color:white;
}

</style>