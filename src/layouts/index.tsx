import AppHeader from '@/components/AppHeader';
import { Outlet } from '@umijs/max';
export default function Layout() {
  return (
    <div className="w-screen h-screen flex flex-col">
      <AppHeader />
      <div className="w-screen flex-1">
        <Outlet />
      </div>
    </div>
  );
}
