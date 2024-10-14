<template>
    <div class="main-cont">
      <h2>Windows Tinting</h2>
        <img src="../assets/windows-tinting.jpg" alt="Exterior Detailing">
        <p>
            Window tinting services in Kenya is our specialty! We provide the professional glass tinting services that give you the finish that you will love. Our window glass tinting services include car window tints, residential window tinting, and commercial window tinting. Classic Tint provides professional services in Kenya and the larger East African Countries.

              Protect your vehicle’s paint with our premium ceramic coating service. This protective layer creates a hydrophobic barrier that repels water, dirt, and contaminants, making your car easier to clean and maintain.
    
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
h2 {
    color: white;
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
</style>