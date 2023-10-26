const { createApp } = Vue


createApp({
    data() {
        return {
            url:"https://randomuser.me/api/?results=4",
            error: false,
            datos:[]
                                  
        }
    },

    methods:{
        fetchData(url){
            fetch(url)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                this.datos=data.results


            });
        }


    },
    created(){
        this.fetchData(this.url)
    }
}).mount('#app')

