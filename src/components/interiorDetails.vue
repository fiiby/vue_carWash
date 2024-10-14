<template>
    <div class="main-cont">
      <h2>Interior Cleaning</h2>
        <img src="../assets/interior-detailing.jpg" alt="Exterior Detailing">
        <p>
              The interior of your car deserves just as much attention as the exterior. Our interior detailing service includes deep cleaning of all surfaces, from the dashboard and center console to the upholstery and carpets. We use specialized equipment to clean air vents, remove stubborn stains, and eliminate unpleasant odors.
            </p>
      
    </div>
    
</template>

<script>
export default {
    name: "serviceDetails",
    data() {
      return {};
    },
  };

</script>

<style scoped>
.main-cont {
  display: flex;
  flex-direction: column;
  background: rgb(238,174,202);
background: radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%);
/* width: 400px; */
height: auto;
border: 3px solid white;
border-radius:100px;
padding: 20px;
padding-left: 10px;
margin-left: 20%;
align-items: center;
/* text-align: center; */
width: 70%; 
font-size: x-large;
color: darkcyan;
}
img {
  /* width: 100%; */
  max-width: 500px;
  height: auto;
  margin-bottom: 20px;
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