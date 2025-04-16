import { createError } from 'h3';
import type { User, AuthUser } from '~/types';
import users from '../../../users.json';

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { username, password } = body;

  const user = (users as User[]).find(u => 
    u.credentials.username === username &&
    // In a real application, we would hash the password and compare hashes
    u.credentials.passphrase === password
  );

  if (!user) {
    throw createError({
      statusCode: 401,
      message: 'Введены неверные данные авторизации. Попробуйте ещё раз'
    });
  }

  // Return only the necessary user data
  const authUser: AuthUser = {
    name: user.name,
    surname: user.surname,
    active: user.active,
    created: user.created
  };

  return {
    user: authUser
  };
}); 