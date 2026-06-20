import { useState } from 'react';
import { StatBlockData } from '../types';
import StatBlockForm from './StatBlockForm';

interface ScopeScaleProps {
  notes: StatBlockData[];
  onSave: (updated: StatBlockData) => void;
  onResetSpine?: () => void;
}

type SortField = 'scene' | 'scopeId' | 'truth' | 'charge';

export default function ScopeScale({ notes, onSave, onResetSpine }: ScopeScaleProps) {
  const [sortField, setSortField] = useState<SortField>('scene');
  const [sortAsc, setSortAsc] = useState(true);

  const sorted = [...notes].sort((a, b) => {
    const av = a[sortField] ?? '';
    const bv = b[sortField] ?? '';
    return sortAsc ? av.localeCompare(bv) : bv.localeCompare(av);
  });

  const toggleSort = (field: SortField) => {
    if (sortField === field) {
      setSortAsc(!sortAsc);
    } else {
      setSortField(field);
      setSortAsc(true);
    }
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-sm font-mono text-[#C7A063] uppercase tracking-widest">Scope Scale</h2>
        <div className="flex items-center gap-2">
          <div className="flex gap-1">
            {(['scene', 'scopeId', 'truth', 'charge'] as SortField[]).map((f) => (
              <button key={f} onClick={() => toggleSort(f)}
                className={`text-[10px] font-mono px-2 py-1 rounded border transition-colors ${
                  sortField === f
                    ? 'text-[#C7A063] border-[#C7A063]'
                    : 'text-[#9D9DBC] border-[#393960] hover:border-[#C7A063] hover:text-[#C7A063]'
                }`}>
                {f}{sortField === f ? (sortAsc ? ' ↑' : ' ↓') : ''}
              </button>
            ))}
          </div>
          {onResetSpine && (
            <button onClick={() => { if (confirm('Reload the Subject 003 spine? This replaces the current beats with the seeded prologue.')) onResetSpine(); }}
              className="text-[10px] font-mono text-[#9D9DBC] border border-[#393960] bg-[#1A1A2E] hover:border-[#C7A063] hover:text-[#C7A063] px-3 py-1.5 rounded uppercase tracking-widest transition-colors">
              Reload Spine
            </button>
          )}
        </div>
      </div>
      <div>
        {sorted.map((note) => (
          <StatBlockForm key={note.id} data={note} onSave={onSave} />
        ))}
      </div>
      {notes.length === 0 && (
        <p className="text-[11px] font-mono text-[#7A7A9D] text-center py-8">
          No beats loaded. Use Reload Spine to seed the Subject 003 prologue.
        </p>
      )}
    </div>
  );
}
