import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginForm from '../components/LoginForm';
import { useAuth } from '../context/auth-context';
import RegisterForm from '../components/RegisterForm';

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
            <RegisterForm />
          </div>
        </div>
      </section>
    </main>
  );
}
