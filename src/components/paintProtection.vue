<template>
    <div class="main-cont">
      <h2>Paint Protection</h2>
        <img src="../assets/Car-Paint-Protection.jpg" alt="Exterior Detailing">
        <p>
              Over time, your car’s paint can become dull, scratched, or swirled. Our paint correction service uses advanced techniques to remove surface imperfections and restore the original luster of your car’s paint.
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