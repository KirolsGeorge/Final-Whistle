import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginForm from '../components/LoginForm';
import { useAuth } from '../context/auth-context';

export default function AccountPage() {
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate('/rank');
    }
  }, [user]);

  return (
    <main className='p-2 flex flex-col gap-3 flex-1 size-full max-w-7xl overflow-auto'>
      <section className='flex-1 flex items-center justify-center'>
        <div className='tabs tabs-border'>
          <input type='radio' name='my_tabs_2' className='tab' aria-label='Login' defaultChecked />
          <div className='tab-content bg-base-100 pt-2'>
            <LoginForm />
          </div>

          <input type='radio' name='my_tabs_2' className='tab' aria-label='Register' />
          <div className='tab-content bg-base-100 pt-2'>
            <fieldset className='fieldset bg-base-200 border-base-300 rounded-xl border p-4 '>
              <label className='label'>Email</label>
              <input type='email' className='input rounded-xl w-full' placeholder='Email' required />

              <label className='label'>Password</label>
              <input type='password' className='input rounded-xl w-full' placeholder='Password' required />

              <button className='btn btn-neutral mt-4 rounded-xl'>Register</button>
            </fieldset>
          </div>
        </div>
      </section>
    </main>
  );
}
