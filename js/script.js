Vue.config.devtools = true;

window.addEventListener("DOMContentLoaded", function (){
    const app = new Vue ({
        el :"#vueapp",
        data:{
            taskToDo:["Prendi il pane" , "Prendi l'aereo", "Comprare le mele"],
            newTask:""
        },

        methods:{

            generateNewElement(){
                this.taskToDo.push(this.newTask)
            }

        }

    })


})