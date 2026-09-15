import { useState } from 'react';
import { AppProvider } from '@/context/AppContext';
import { Sidebar } from '@/components/layout/Sidebar';
import { TopBar } from '@/components/layout/TopBar';
import { Dashboard } from '@/pages/Dashboard';
import { StudyPlanner } from '@/pages/StudyPlanner';
import { FocusTimer } from '@/pages/FocusTimer';
import { Relaxation } from '@/pages/Relaxation';
import { MoodCheckIn } from '@/pages/MoodCheckIn';
import { StudyLifeBalance } from '@/pages/StudyLifeBalance';
import { Progress } from '@/pages/Progress';
import { WellnessTips } from '@/pages/WellnessTips';
import { Settings } from '@/pages/Settings';
import type { PageId } from '@/types';

const pageTitles: Record<PageId, string> = {
  dashboard: 'Dashboard',
  planner: 'Study Planner',
  timer: 'Focus Timer',
  relaxation: 'Relaxation Zone',
  mood: 'Mood Check-In',
  balance: 'Study-Life Balance',
  progress: 'Progress',
  tips: 'Wellness Tips',
  settings: 'Settings',
};

function AppContent() {
  const [currentPage, setCurrentPage] = useState<PageId>('dashboard');
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const renderPage = () => {
    switch (currentPage) {
      case 'dashboard':
        return <Dashboard onNavigate={setCurrentPage} />;
      case 'planner':
        return <StudyPlanner />;
      case 'timer':
        return <FocusTimer />;
      case 'relaxation':
        return <Relaxation />;
      case 'mood':
        return <MoodCheckIn />;
      case 'balance':
        return <StudyLifeBalance />;
      case 'progress':
        return <Progress />;
      case 'tips':
        return <WellnessTips />;
      case 'settings':
        return <Settings />;
      default:
        return <Dashboard onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 flex">
      <Sidebar
        current={currentPage}
        onNavigate={setCurrentPage}
        mobileOpen={mobileNavOpen}
        onCloseMobile={() => setMobileNavOpen(false)}
      />
      <div className="flex-1 flex flex-col min-w-0">
        <TopBar onMenuClick={() => setMobileNavOpen(true)} title={pageTitles[currentPage]} />
        <main className="flex-1 p-4 sm:p-6 lg:p-8 overflow-x-hidden">
          <div className="max-w-7xl mx-auto">{renderPage()}</div>
        </main>
      </div>
    </div>
  );
}

function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
}

export default App;
