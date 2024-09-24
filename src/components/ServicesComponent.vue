
*/
   <template>
  <div class="root-div">
    <button @click="fetchData()"> Get Data</button>
    <div class="services-container">
      <!-- Loop through services using v-for -->
      <div class="card" v-for="(service) in services" :key="service">
      
        <h3>{{ service.id }}</h3>
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
      services:null,
      // services: [
      //   {
      //     clientname: "M Kim Wandia",
      //     description:
      //       "Auto Spa is the best. Had a spa day for my car and they transformed it from dirty and messy to squeaky clean. It's looking and feeling fresh and brand new. Thank you so much. Will definitely recommend to everyone!",
          
      //   },
      //   {
      //     description:
      //       "Amazing service! My car feels brand new. Highly recommended for anyone who wants their vehicle cleaned thoroughly.",
      //       clientname: "Adam smith",
      //   },
      //   {
      //     description:
      //       "Good work, I was there yesterday & the work done was beyond my expectations especially interior upholstery. Keep up the good work guys. It's like magic happened & still is dry, no taking out the interior main carpet & seats.",
      //       clientname: "Jamess Gatere",
          
      //   },
   
      //   {
      //     description:
      //       "The best car detailing service I have ever experienced. Great attention to detail, and very professional.",
      //       clientname: "lilly hunter",
      //   },
      //   {
      //     description:
      //       "The best car detailing service I have ever experienced. Great attention to detail, and very professional.",
      //       clientname: "abdallha issa",
      //   },
      //   {
      //     description:
      //       "The best car detailing service I have ever experienced. Great attention to detail, and very professional.",
      //       clientname: "raj kumar",
      //   },
      //   {
      //     description:
      //       "The best car detailing service I have ever experienced. Great attention to detail, and very professional.",
      //       clientname: "dana khatiib",
      //   },
      //   {
      //     description:
      //       "The best car detailing service I have ever experienced. Great attention to detail, and very professional.",
      //       clientname: "kellly henderson",
      //   },
      //   {
      //     description:
      //       "The best car detailing service I have ever experienced. Great attention to detail, and very professional.",
      //       clientname: "rodolfo adam",
      //   },
      //   {
      //     description:
      //       "The best car detailing service I have ever experienced. Great attention to detail, and very professional.",
      //       clientname: "shishita ralf",
      //   },
      //   {
      //     description:
      //       "The best car detailing service I have ever experienced. Great attention to detail, and very professional.",
      //       clientname: "salman ali",
      //   },
      //   {
      //     description:
      //       "The best car detailing service I have ever experienced. Great attention to detail, and very professional.",
      //       clientname: "ezz samuel",
      //   },
      //   {
      //     description:
      //       "The best car detailing service I have ever experienced. Great attention to detail, and very professional.",
      //       clientname: "antoni fillip",
      //   },
      //   {
      //     description:
      //       "The best car detailing service I have ever experienced. Great attention to detail, and very professional.",
      //       clientname: "janet jezee",
      //   },
      //   {
      //     description:
      //       "The best car detailing service I have ever experienced. Great attention to detail, and very professional.",
      //       clientname: "allan fudin",
      //   },
      //   {
      //     description:
      //       "The best car detailing service I have ever experienced. Great attention to detail, and very professional.",
      //       clientname: "juma chadan",
      //   },
      // ],
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

}

.services-container {
  background: rgb(238,174,202);
  background: radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%);
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 10px;
  border-radius:50px;

  
}

.card {
  /* background-color: lightcyan; */
  background-color:white;
  text-align: center;
  padding: 30px;
  margin: 10px;
  width: 300px;
  height: 200px;
  color: orchid;
  font-size: x-small;
  border: 3px solid  orchid;
  border-radius: 50px;
}
h3 {
  color: rgb(28, 199, 133);
  font-size: medium;
}
</style>
