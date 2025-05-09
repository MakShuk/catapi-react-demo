import React, { useState } from 'react';
import './App.css';
import Card from './components/card/Card';
import { CatViewerControls as CatControls } from './components/cat-viewer/CatViewerControls';
import { CatViewerImage as CatImage } from './components/cat-viewer/CatViewerImage';

const App: React.FC = () => {
  // Состояния для контролов кота
  const [enabled, setEnabled] = useState(true);
  const [autoRefresh, setAutoRefresh] = useState(false);

  const handleEnabledChange = (value: boolean) => setEnabled(value);
  const handleAutoRefreshChange = (value: boolean) => setAutoRefresh(value);
  const handleGetCat = () => {
    // Здесь могла бы быть логика получения кота
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600">
      <Card>
        <CatControls
          enabled={enabled}
          autoRefresh={autoRefresh}
          onEnabledChange={handleEnabledChange}
          onAutoRefreshChange={handleAutoRefreshChange}
          onGetCat={handleGetCat}
        />
        <CatImage />
      </Card>
    </div>
  );
};

export default App;
