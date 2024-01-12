const app = Vue.createApp({
    data() {
        return {
            firstname: 'Miguel',
            lastname: 'Olivares',
            email: 'olivarezmig@gmail.com',
            gender: 'male',
            picture: 'qy9jtg8emz7a1.jpg'
        }
    },
    methods: {
        async getUser() {

            const res = await fetch('https://randomuser.me/api');

            const { results } = await res.json();

            console.log(results);

            this.firstnmae = results[0].name.first
            this.lastname = results[0].name.last
            this.email = results[0].email
            this.gender = results[0].gender
            this.picture = results[0].picture.large
        }
    }
});

app.mount("#app");