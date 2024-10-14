<template>
    <div class="container">
    <h1>contact us</h1>
    <h3>Schedule Your Appointment Today
Book now and we'll give your car a professional detail job


</h3>
    
    <form action="">
        <label for="username">Username:</label>
        <input type="text" v-model="username" />
        <br />
        <br />
        <label for="useremail">E-mail : </label>
        <input type="text" v-model="useremail" />
        <br />
        <br/>
        <label for="Message">Message:</label>
        <input type="text" v-model="usermessage" />
        <br />
        <br />
 
    
        <button type="submit">Send Message</button>
    </form>
    
  <!-- <h1>results</h1> -->
  <h2>{{ username }}</h2>
  <h2>{{ useremail }}</h2>
  <h2>{{ usermessage }}</h2>
</div>

</template>

<script>
export default {
    name: "contactUs",
    data() {
        return {
            username: "",
            useremail:"",
            usermessage:"",
        };
    },
    methods: {
        greetUser() {
            alert(`Hello ${this.username} with the email ${this.useremail} your message has been sent successfully`);
        },
    },

};

</script>

<style scoped>
.container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-radius:100px;
    background: rgb(238,174,202);
    background: radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%);
      padding-left: 50px;
      text-align: center;
      align-items: center;
      padding: 20px;
      width: 70%;
      margin-left: 20%;
      margin-top: 20px;


}

h1 {
    font-family:Georgia, 'Times New Roman', Times, serif;
    text-align: center;
    color: orchid;
    align-content: center;
    width: 20%;
    /* margin-left: 10%; */
    border-radius: 20px;
    background-color:white;
}
 input {
    width: 100%;
    padding: 10px;
    border-radius: 7px;
    /* width: 30%; */
 }
 label {
 
    font-size: medium;
    font-weight:400;
    margin: 10px;
    
 }
 button {
    padding: 20px;
    border-radius: 20px;
    background-color: white;
    cursor: pointer;
 }
 h3 {
    font-size: large;
    color: blue;
 }
</style>