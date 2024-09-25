<template>
    <div class="container">
        <h4> 
        © 2024 Shineville Auto-spa, All Rights Reserved
        </h4>

    </div>
</template>

<script>
  export default {
    name: "footerComponent",
    data() {
      return {
        servicename: "Body wash",
        description: "Medium sized cars whole body wash",
        price: "200",
      };
    },
  };

</script>

 <style scoped>
.container {
  display: flex;
flex-direction: row;
justify-content: center;
  background: rgb(238,174,202);
background: radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%);
padding-top: 10px;
height: 100px;
width: 100%;
align-items: center;
font-weight: bold;
border: 3px soild white;
border-radius:100px;
margin: 0px;
/* padding-left: 900px; */
color: blue;
}
</style>