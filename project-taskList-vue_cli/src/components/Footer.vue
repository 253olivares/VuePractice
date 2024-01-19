<template>
    <footer>
        <p>Copyright &copy; 2021</p>
        <router-link to="/about">About</router-link>
    </footer>
</template>

<!-- footer component nothing special here just a router link that routes us to /about to display app version -->

<style scoped>
    a{
        color: #333;
    }
    footer{
        margin-top:30px ;
        text-align: center;
    }
</style>