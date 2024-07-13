import AppHeader from '@/components/AppHeader';
import { Outlet } from '@umijs/max';
export default function Layout() {
  return (
    <div className="w-full h-screen">
      <AppHeader />
      <Outlet />
    </div>
  );
}
