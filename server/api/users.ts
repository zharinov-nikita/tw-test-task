import type { User } from '~/types';
import users from '../../users.json';

export default defineEventHandler(() => {
  return users as User[];
}); 