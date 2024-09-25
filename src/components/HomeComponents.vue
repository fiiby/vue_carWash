<template>
  <div class="demo">
    <header>
      <h1>Shineville Auto-spa</h1>
    </header>

    <section>
      <h2>Welcome to our homepage</h2>
      <p>We offer premium car detailing and spa services to make your vehicle shine.</p>
    </section>

    <section id="services">
      <h3>Our Services</h3>
      <ul>
        <li>Exterior Detailing</li>
        <li>Interior Cleaning</li>
        <li>Full Car Wash</li>
        <li>Paint Protection</li>
      </ul>
    </section>

    <section id="testimonials">
      <h3>Customer Testimonials</h3>
      <div class="root-div">
        <div class="testimon-container">
          <!-- Loop through testimonials using v-for -->
          <div class="card" v-for="(item, index) in testimons" :key="index">
            <h3>{{ item.name }}</h3>
            <p>{{ item.description }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "HomeComponents",
  data() {
    return {
      testimons: [
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
};
</script>

<style scoped>
.demo {
  background: radial-gradient(circle, rgba(238, 174, 202, 1) 0%, rgba(148, 187, 233, 1) 100%);
  padding: 30px;
  border-radius: 100px;
  margin: 10px;
}

h1 {
  color: white;
}

h2 {
  color: darkorchid;
}

h3 {
  color: darkblue;
}

section {
  margin-bottom: 20px;
}

.root-div {
  text-align: center;
}

.testimon-container {
  background: rgb(238, 174, 202);
  background: radial-gradient(circle, rgba(238, 174, 202, 1) 0%, rgba(148, 187, 233, 1) 100%);
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 10px;

}

.card {
  background-color: white;
  text-align: center;
  padding: 30px;
  margin: 10px;
  width: 400px;
  height: 300px;
  color: orchid;
  font-size: x-small;
  border: 3px solid orchid;
  border-radius: 50px;
  font-size: medium;
}
</style>
