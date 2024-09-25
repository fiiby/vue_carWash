
*/
   <template>
  <div class="root-div">
    <section class="card1">
          
      <h3>Services</h3>
      <ul>
        <li>Exterior Detailing</li>
        <p>
          Our exterior detailing service focuses on making your vehicle look brand new. This includes a thorough wash, clay bar treatment to remove contaminants, polishing to restore the shine, and waxing to protect your paint. We also pay close attention to the wheels, tires, and trim, ensuring that every part of your car's exterior is spotless and gleaming.
        </p>
        <li>Interior Cleaning</li>
        <p>
          The interior of your car deserves just as much attention as the exterior. Our interior detailing service includes deep cleaning of all surfaces, from the dashboard and center console to the upholstery and carpets. We use specialized equipment to clean air vents, remove stubborn stains, and eliminate unpleasant odors. Leather seats are conditioned, and all materials are treated to ensure a refreshed, factory-new feel.
        </p>
        <li>Full Car Wash</li>
        <p>
          For those looking for a quick yet thorough clean, our full car wash service is ideal. It includes a hand wash of the exterior, tire and wheel cleaning, and an interior vacuuming. We also clean windows and mirrors to ensure your car shines both inside and out, all in minimal time.
        </p>
        <li>Paint Protection</li>
        <p>
          Over time, your car’s paint can become dull, scratched, or swirled. Our paint correction service uses advanced techniques to remove surface imperfections and restore the original luster of your car’s paint. This multi-stage process involves careful polishing to reveal a flawless, mirror-like finish that will make your car look like it just rolled off the showroom floor
        </p>
        <li>Ceramic Coating</li>
        <p>
          Protect your vehicle’s paint with our premium ceramic coating service. This protective layer creates a hydrophobic barrier that repels water, dirt, and contaminants, making your car easier to clean and maintain. Ceramic coatings offer long-term protection against UV rays, oxidation, and minor scratches, keeping your car looking pristine for years to come.
        </p>
      </ul>
    </section>
  <section>
    <p>

    </p>
  </section>
    <button @click="fetchData()"> Get Data</button>
    <div class="services-container">
      <!-- Loop through services using v-for -->
      <div class="card" v-for="(service) in services" :key="service">
    
        <h3>{{ service.name }}</h3>
        <h2>{{ service.email}}</h2>
        <h3>{{ service.body}}</h3>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "ServicesComponent",
  // name:"app",
  data() {
    return  {
      data() {
    return {
      items: [
        {
          name: "M Kim Wandia",
          description:
            "Auto Spa is the best. Had a spa day for my car and they transformed it from dirty and messy to squeaky clean. It's looking and feeling fresh and brand new. Thank you so much. Will definitely recommend to everyone!",
        },
        {
          name: "Jamess Gatereh",
          description:
            "Good work, I was there yesterday & the work done was beyond my expectations especially interior upholstery. Keep up the good work guys. It's like magic happened & still is dry, no taking out the interior main carpet & seats.",
        },
        {
          name: "M Kim Wandia",
          description:
            "Had a spa day for my car and they transformed it from dirty and messy to squeaky clean. It's looking and feeling fresh and brand new. Thank you so much. Will definitely recommend to everyone!",
        },
        {
          name: "Kelly Hendersone",
          description:
            "The best car detailing service I have ever experienced. Great attention to detail, and very professional. Shineville Auto Spa made my car look brand new again. Fantastic service!",
        },
      ],
    };
  },
    },
    {
      services:null,
    
    }

  },
    methods: {
      async fetchData() {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await response.json(); // Wait for the data to be resolved
        this.services = data; // Assign the resolved data to services
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    },
  },
};
</script>

<style scoped>
.root-div {
  text-align: center;
  text-decoration: none;
  /* width: 100%; */

}
/* .serv-cont {
  background: rgb(238,174,202);
  background: radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%);
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 10px;
  border-radius:50px;
  text-decoration: none;
} */

.services-container {
  background: rgb(238,174,202);
  background: radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%);
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 10px;
  border-radius:100px;
  text-decoration: none;

  
}
.card1 {
 
  /* text-decoration: none; */
  background: rgb(238,174,202);
  background: radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%);
  text-align: center;
  padding: 30px;
  margin: 10px;
  /* width: 100%; */
  height: 100%;
  color: orchid;
  font-size: x-small;
  /* border: 3px solid  white; */
  border-radius: 100px;

}
ul {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  text-decoration: none;
}
.card {
  display: flex;
  flex-direction: row;
  justify-content: space-around;

  background-color: lightcyan;
 
  text-align: center;
  padding: 30px;
  margin: 10px;
  width: 300px;
  height: 300px;
  color: orchid;
  font-size: small;
  border: 3px solid white;
  border-radius: 70px;
  margin-bottom: 20px;
}
h3 {
  color: rgb(28, 199, 133);;
  font-size: large;
  font-family:cursive;
}
li {
  background-color: white;
  display: flex;
  flex-direction: column;
  text-decoration: none;
  color: rgb(28, 199, 133);
  text-decoration: none;
  font-size: large;
  border: 3px solid lightcoral ;
  border-radius: 30%;
 width:10%;
 height: 20%;
 align-content: center;
 margin-left: 45%;
}
p {
text-align: center;
  color: darkblue;
font-size: large;
align-content: center;
width: 60%;
margin-left:20%;
}
</style>
