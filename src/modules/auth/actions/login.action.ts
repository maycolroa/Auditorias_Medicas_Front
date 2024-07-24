import { reserApi } from "@/api/reserApi"
import type { AuthResponse, User } from "../interface";
import { isAxiosError } from "axios";


interface LoginError {
  ok: false;
  message: string;
}

interface LoginSuccess {
  ok: true;
  user: User;
  token: string;
}

export const LoginActions = async( email:string, password:string ): Promise<LoginError|LoginSuccess>  => {

  try {
    
    const { data } = await reserApi.post<AuthResponse>('/auth/login', {
      email,
      password,
    });

    return {
      ok: true,
      user: data.user,
      token: data.token,
    };


  } catch (error) {

    if ( isAxiosError(error) && error.response?.status === 401 ) {

      return {
        ok: false,
        message: 'usuario o contraseña incorrecta'
      };
    }
    console.log(error);
    throw new Error('No se realizar la peticion') 
  }
}