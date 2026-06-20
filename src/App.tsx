import { useState, useEffect } from 'react';
import { StatBlockData } from './types';
import { SUBJECT_003_SPINE } from './spine';
import ScopeScale from './components/ScopeScale';
import './App.css';

const STORAGE_KEY = 'aec-scope-notes-v1';

function loadInitialNotes(): StatBlockData[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) { const parsed = JSON.parse(raw); if (Array.isArray(parsed)) return parsed as StatBlockData[]; }
  } catch { /* fall through to the seeded spine */ }
  return SUBJECT_003_SPINE;
}

function App() {
  const [scopeNotes, setScopeNotes] = useState<StatBlockData[]>(loadInitialNotes);
  const [activeTab, setActiveTab] = useState<'scale' | 'about'>('scale');

  useEffect(() => {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(scopeNotes)); } catch { /* non-fatal */ }
  }, [scopeNotes]);

  const handleSaveNote = (updated: StatBlockData) => {
    setScopeNotes((prev) =>
      prev.map((n) => (n.id === updated.id ? updated : n))
    );
  };

  const handleResetSpine = () => { setScopeNotes(SUBJECT_003_SPINE); };

  return (
    <div className="min-h-screen bg-[#0D0D1A] text-[#E0E0F0] font-mono">
      <div className="max-w-5xl mx-auto px-4 py-8">
        <header className="mb-8">
          <h1 className="text-lg font-mono text-[#C7A063] uppercase tracking-[0.3em]">
            AEC Scope Notes
          </h1>
          <p className="text-[11px] text-[#7A7A9D] mt-1">
            Spine loaded: <span className="text-[#C7A063]">Subject 003 — The Failing Warden Hunt</span>.
            See the <span className="text-[#C7A063]">Scope Scale</span> tab for the 9-part beat sequence.
          </p>
        </header>

        <nav className="flex gap-4 mb-6 border-b border-[#393960] pb-2">
          <button
            onClick={() => setActiveTab('scale')}
            className={`text-[10px] font-mono uppercase tracking-widest pb-1 border-b-2 transition-colors ${
              activeTab === 'scale'
                ? 'text-[#C7A063] border-[#C7A063]'
                : 'text-[#9D9DBC] border-transparent hover:text-[#C7A063]'
            }`}
          >
            Scope Scale
          </button>
          <button
            onClick={() => setActiveTab('about')}
            className={`text-[10px] font-mono uppercase tracking-widest pb-1 border-b-2 transition-colors ${
              activeTab === 'about'
                ? 'text-[#C7A063] border-[#C7A063]'
                : 'text-[#9D9DBC] border-transparent hover:text-[#C7A063]'
            }`}
          >
            About
          </button>
        </nav>

        {activeTab === 'scale' && (
          <ScopeScale notes={scopeNotes} onSave={handleSaveNote} onResetSpine={handleResetSpine} />
        )}

        {activeTab === 'about' && (
          <div className="text-[11px] text-[#7A7A9D] font-mono space-y-2 max-w-prose">
            <p>AEC Scope Notes — a stat-block editor for narrative architecture.</p>
            <p>Beats are persisted in localStorage and can be edited individually.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
