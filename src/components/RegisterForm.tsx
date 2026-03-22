import { useState } from 'react';
import { useAuth } from '../context/auth-context';

export default function RegisterForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { register, loading } = useAuth();

  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    await register(email, password);
  };

  return (
    <form onSubmit={handleRegister}>
      <fieldset className='fieldset bg-base-200 border-base-300 rounded-xl border p-4 '>
        <label className='label'>Email</label>
        <input type='email' className='input rounded-xl w-full' placeholder='Email' required value={email.trim()} onChange={(e) => setEmail(e.target.value.trim())} />

        <label className='label'>Password</label>
        <input
          type='password'
          className='input rounded-xl w-full'
          placeholder='Password'
          required
          value={password.trim()}
          onChange={(e) => setPassword(e.target.value)}
        />

        {!loading && (
          <button type='submit' className='btn btn-neutral my-1 rounded-xl'>
            Register
          </button>
        )}
        {loading && (
          <button disabled className='btn btn-neutral my-1 rounded-xl'>
            <span className='loading loading-spinner'></span>
            Loading....
          </button>
        )}
      </fieldset>
    </form>
  );
}
