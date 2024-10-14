<template>
    <div class="main-cont">
      <h2>Full Car Wash</h2>
        <img src="../assets/car-washing.jpg" alt="Exterior Detailing">
        <p>
              For those looking for a quick yet thorough clean, our full car wash service is ideal. It includes a hand wash of the exterior, tire and wheel cleaning, and an interior vacuuming. We also clean windows and mirrors to ensure your car shines both inside and out.
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