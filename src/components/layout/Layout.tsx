import { Outlet } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';
import { CircuitBackground } from '../background/CircuitBackground';

export function Layout() {
  return (
    <div className="min-h-screen bg-gradient-space flex flex-col relative">
      <CircuitBackground />
      <Header />
      <main className="flex-1 relative z-10">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
