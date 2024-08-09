import { ReactComponent as AppIcon } from '@/assets/icon.svg';

export default function AppHeader() {
  return (
    <div className="h-16 border-solid border-b-2">
      <AppIcon className="h-16 mt-2 scale-[1.5] ml-12 relative bottom-2" />
    </div>
  );
}
