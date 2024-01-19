const app = Vue.createApp({
    // we create our vue application 
    data() {
        // create data in this case set default information about me
        return {
            firstname: 'Miguel',
            lastname: 'Olivares',
            email: 'olivarezmig@gmail.com',
            gender: 'male',
            picture: 'qy9jtg8emz7a1.jpg'
        }
    },
    // method created to fetch new used data
    methods: {
        async getUser() {

            const res = await fetch('https://randomuser.me/api');
            // once information is received we deconstruct the arrow into a result value
            const { results } = await res.json();

            console.log(results);
            // we call result values and set our data with the new values which then updates on our index.html
            this.firstname = results[0].name.first
            this.lastname = results[0].name.last
            this.email = results[0].email
            this.gender = results[0].gender
            this.picture = results[0].picture.large
        }
    }
});

app.mount("#app");