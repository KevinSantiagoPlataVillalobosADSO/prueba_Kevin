import { ref, Ref } from "vue";
import Users from '@/interfaces/InUsers'
interface User {
    nombre: string;
    edad: number;
}

class GetUser{
    private users:Ref<Object<Users>>;
    
    constructor(){
        this.users = ref({});
    }

    getUsers(){
        return this.users
    }

    async fetchAll(){
        try {
            const response = await fetch('http://127.0.0.1:8001/api/informix');
            const user = await response.json();
            this.users.value = await user
        } catch (error) {
            console.log(error);
        }
    }
}

export default GetUser;