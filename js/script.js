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
                let result = this.taskToDo.some((elemento) =>{
                    return elemento.toLowerCase() === this.newTask.trim().toLowerCase()
                })
                if (result){
                    return
                }
                this.taskToDo.push(this.newTask.toLowerCase())
            },

            deleteElement(indiceElementi){
                this.taskToDo.splice(indiceElementi, 1);

            }

        }

    })


})