<template>
      
        <div class="root-div">
     <h2>About Us</h2>
        <p>
          At Shineville Auto Spa, we take pride in delivering top-notch car cleaning and detailing services to ensure your vehicle not only looks spotless but also remains in peak condition. Our skilled professionals are committed to excellence, offering everything from a swift exterior wash to comprehensive interior and exterior detailing that leaves no surface untouched.
</p>
<p>
Using only the finest, industry-leading products and the latest cutting-edge equipment, we go beyond just cleaning—we rejuvenate and protect your vehicle. From removing tough stains and grime to applying protective coatings that extend your car's lifespan, every service is designed to bring out the best in your vehicle.
</p>
<p>
Whether you need a quick refresh or a deep, meticulous detailing job, our dedicated team treats your car with the care and precision it deserves. Your satisfaction is our top priority, and we strive to exceed expectations by delivering outstanding results every time.
        </p>
      
    </div>
  
</template>
<script>
export default {
    name: "AboutUs",
    data() {
      return {
        // servicename: "Body wash",
        // description: "Medium sized cars whole body wash",
        // price: "200",
      };
    },
  };

</script>

<style scoped>
.root-div{
  display: flex;
  flex-direction: column;
  background: rgb(238,174,202);
background: radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%);
/* width: 400px; */
height: 500px;
border: 3px solid white;
border-radius:100px;
padding: 20px;
padding-left: 10px;
margin: 10px;
align-items: center;
/* text-align: center; */
width: 100%; 
font-size: x-large;
color: darkcyan;
width: 70%;
margin-left: 20%;
}
p {
  text-align: center;
  width: 700px;
  font-family:Verdana, Geneva, Tahoma, sans-serif;
  font-size: large;
}
h2 {
    color: white;
}

</style>