<template>
      
        <div class="root-div">
     
        <p>
        We provide top-notch car cleaning and detailing services to keep your vehicle looking spotless and running at its best. Whether it's a quick exterior wash or a complete interior and exterior detailing, our dedicated team uses high-quality products and modern equipment to give your car the care it deserves.
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
  text-align: center;
  background: rgb(238,174,202);
background: radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%);
width: 400px;
height: 200px;
border: 3px solid white;
border-radius:100px;

display: flex;
justify-content: center;
align-content: center;
align-items: center;
/* margin-left: 500px; */
/* padding-left: 500px; */
height: 250px;
width: 100%; 
font-size: x-large;
}
p {
  text-align: center;
  width: 700px;
  font-family:Verdana, Geneva, Tahoma, sans-serif;
  font-size: large;
}
</style>