import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { NeoCard } from '../../components/NeoCard';
import { NeoInput } from '../../components/NeoInput';
import { NeoButton } from '../../components/NeoButton';
import { useAdminAuth } from '../hooks/useAdminAuth';

export function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useAdminAuth();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (login(password)) {
      navigate('/admin/dashboard');
    } else {
      setError('Invalid credentials');
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4">
      <div className="mb-8 text-center">
        <h1 className="font-heading text-4xl md:text-5xl font-black mb-2 uppercase">AWS Community Day</h1>
        <p className="font-bold text-xl tracking-widest">CMS</p>
      </div>

      <NeoCard className="w-full max-w-md bg-white p-6 md:p-8">
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <NeoInput
            label="Email Address"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="admin@example.com"
            required
          />
          
          <NeoInput
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
          />

          {error && (
            <p className="text-red-500 font-bold -mt-2">{error}</p>
          )}

          <NeoButton type="submit" variant="primary" className="w-full justify-center">
            SIGN IN
          </NeoButton>

          <div className="text-center mt-2">
            <a href="#" className="text-teal-600 font-bold hover:underline">
              Forgot password?
            </a>
          </div>
        </form>
      </NeoCard>
    </div>
  );
}
