<template>
  <div class="root-div">
    <section class="card1">
      <ul>
        <div class="lis-cont-card">
          <li>
            <router-link to="/serviceDetails">
            <h2>Exterior Detailing</h2>
          </router-link>
          
            <img src="../assets/engine.jpg" alt="Exterior Detailing">
          </li>
        </div>

        <div class="lis-cont-card">
          <li>
            <router-link to="/interiorDetails">
            <h2>Interior Cleaning</h2>
            </router-link>
          
            <img src="../assets/interior-detailing.jpg" alt="Interior Cleaning">
          </li>
        </div>

        <div class="lis-cont-card">
          <li>
            <router-link to="/fullCarWash">
            <h2>Full Car Wash</h2>
            </router-link>
           
            <img src="../assets/car-washing.jpg" alt="Full Car Wash">
          </li>
        </div>

        <div class="lis-cont-card">
          <li>
            <router-link to="/paintProtection">
            <h2>Paint Protection</h2>
            </router-link>
           
            <img src="../assets/Car-Paint-Protection.jpg" alt="Paint Protection">
          </li>
        </div>

        <div class="lis-cont-card">
          <li>
            <router-link to="/ceramicCoating">
            <h2>Ceramic Coating</h2>
            </router-link>
            
            <img src="../assets/ceramic-coating.jpg" alt="Ceramic Coating">
          </li>
        </div>
        <div class="lis-cont-card">
          <li>
            <router-link to="/windowTinting">
            <h2>Windows Tinting</h2>
            </router-link>
            
            <img src="../assets/windows-tinting.jpg" alt="Ceramic Coating">
          </li>
        </div>
      </ul>
    </section>
  </div>
</template>


<style scoped>
/* Root container */
.root-div {
  text-align: center;
  text-decoration: none;
  width: 70%;
  margin-left: 20%;
}

/* Services container */
.services-container {
  background-color: radial-gradient(circle, rgba(238, 174, 202, 1) 0%, rgba(148, 187, 233, 1) 100%);
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 10px;
  border-radius: 100px;
}

/* Styling for each card */
.card1 ul {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0;
}

.lis-cont-card {
  flex-basis: 30%;
  margin: 10px;
  list-style-type: none;
}

li {
  background: rgb(238,174,202);
  background: radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%);
  border: 3px solid lightcoral;
  border-radius: 30px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* Image styling */
img {
  width: 100%;
  max-width: 300px;
  height: auto;
  margin-bottom: 20px;
}
a {
  text-decoration: none;
}
h2 {
 color:white;
  font-size: large;
  font-family: cursive;
  font-weight: bold;
  margin-bottom: 10px;
}

p {
  color: darkblue;
  font-size: large;
  text-align: center;
}

/* Media Queries for responsiveness */
@media (max-width: 1200px) {
  .lis-cont-card {
    flex-basis: 45%; /* Two cards per row */
  }
}

@media (max-width: 768px) {
  .lis-cont-card {
    flex-basis: 100%; /* One card per row */
    margin: 20px 0;
  }

  img {
    max-width: 250px; /* Adjust image size for smaller screens */
  }
}

@media (max-width: 480px) {
  p {
    font-size: medium; /* Adjust text size for smaller screens */
  }

  h2 {
    font-size: medium;
  }

  img {
    max-width: 200px; /* Further reduce image size on small screens */
  }
}
</style>
