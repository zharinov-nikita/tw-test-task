export interface User {
  name: string;
  surname: string;
  credentials: {
    username: string;
    passphrase: string;
  };
  active: boolean;
  created: string;
  _comment?: string;
}

export interface AuthUser {
  name: string;
  surname: string;
  active: boolean;
  created: string;
}

export interface AuthState {
  user: AuthUser | null;
  isAuthenticated: boolean;
}

export interface UsersState {
  users: User[];
  filteredUsers: User[];
  dateFilter: string;
  nameFilter: string;
} 