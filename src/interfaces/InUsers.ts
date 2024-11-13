interface Data {
  nombre: string;
  apellido?: string;
  edad?: string;
  estado?: string;
  estado_name?: string;
  iniciales?: string;
  documento_tipo?: string;
  documento_num?: string;  
}

interface Users {
  status?: string;
  data?: Array<Data>;
}

export default Users;
