export interface User {
    firstname?: string;
    lastname?: string;
    email: string;
    password: string;
    confirmPassword: string;
  }
  
  export interface UserState {
    loading: boolean;
    error: string | null;
    registeredUser: any;
  }

  export interface AuthState {
    token: string | null;
    isLoading: boolean;
    error: string | null;
    auth: any;
  }

  export interface Login {
    email: string;
    password: string;
  }
  