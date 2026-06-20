import { useState, ChangeEvent } from 'react';
import { StatBlockData } from '../types';

interface StatBlockFormProps {
  data: StatBlockData;
  onSave: (updated: StatBlockData) => void;
}

const TRUTH_OPTIONS = ['Legible', 'Mislegible', 'Mute', 'Invisible', 'Read-through', 'Retro-legible'];

export default function StatBlockForm({ data, onSave }: StatBlockFormProps) {
  const [editing, setEditing] = useState(false);
  const [form, setForm] = useState<StatBlockData>(data);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    onSave(form);
    setEditing(false);
  };

  if (!editing) {
    return (
      <div className="border border-[#393960] rounded p-4 mb-3 bg-[#12121F]">
        <div className="flex items-start justify-between gap-2">
          <div>
            <h3 className="text-sm font-mono text-[#C7A063] mb-1">{data.scene}</h3>
            <p className="text-[10px] text-[#9D9DBC] font-mono">
              {data.scopeId} · {data.timeValue} × {data.timeUnit} · {data.charge}
            </p>
          </div>
          <button
            onClick={() => { setForm(data); setEditing(true); }}
            className="text-[10px] font-mono text-[#9D9DBC] border border-[#393960] hover:border-[#C7A063] hover:text-[#C7A063] px-2 py-1 rounded transition-colors"
          >
            Edit
          </button>
        </div>
        <div className="mt-2 text-[11px] text-[#7A7A9D] font-mono space-y-1">
          <p><span className="text-[#9D9DBC]">Truth:</span> {data.truth}</p>
          <p><span className="text-[#9D9DBC]">Effect:</span> {data.effect}</p>
          <p><span className="text-[#9D9DBC]">Vantage:</span> {data.vantage}</p>
          {data.signal && <p><span className="text-[#9D9DBC]">Signal:</span> {data.signal}</p>}
          {data.clock && <p><span className="text-[#9D9DBC]">Clock:</span> {data.clock}</p>}
        </div>
      </div>
    );
  }

  return (
    <div className="border border-[#C7A063] rounded p-4 mb-3 bg-[#1A1A2E]">
      <h3 className="text-sm font-mono text-[#C7A063] mb-3">Editing: {data.scene}</h3>
      <div className="space-y-2">
        <label className="block">
          <span className="text-[10px] font-mono text-[#9D9DBC] uppercase tracking-widest">Scene</span>
          <input name="scene" value={form.scene} onChange={handleChange}
            className="w-full mt-1 bg-[#12121F] border border-[#393960] rounded px-2 py-1 text-xs text-[#E0E0F0] font-mono" />
        </label>
        <label className="block">
          <span className="text-[10px] font-mono text-[#9D9DBC] uppercase tracking-widest">Vantage</span>
          <input name="vantage" value={form.vantage} onChange={handleChange}
            className="w-full mt-1 bg-[#12121F] border border-[#393960] rounded px-2 py-1 text-xs text-[#E0E0F0] font-mono" />
        </label>
        <label className="block">
          <span className="text-[10px] font-mono text-[#9D9DBC] uppercase tracking-widest">Truth</span>
          <select name="truth" value={form.truth} onChange={handleChange}
            className="w-full mt-1 bg-[#12121F] border border-[#393960] rounded px-2 py-1 text-xs text-[#E0E0F0] font-mono">
            {TRUTH_OPTIONS.map((t) => <option key={t} value={t}>{t}</option>)}
          </select>
        </label>
        <label className="block">
          <span className="text-[10px] font-mono text-[#9D9DBC] uppercase tracking-widest">Truth Notes</span>
          <textarea name="truthNotes" value={form.truthNotes} onChange={handleChange} rows={3}
            className="w-full mt-1 bg-[#12121F] border border-[#393960] rounded px-2 py-1 text-xs text-[#E0E0F0] font-mono" />
        </label>
        <label className="block">
          <span className="text-[10px] font-mono text-[#9D9DBC] uppercase tracking-widest">Effect</span>
          <input name="effect" value={form.effect} onChange={handleChange}
            className="w-full mt-1 bg-[#12121F] border border-[#393960] rounded px-2 py-1 text-xs text-[#E0E0F0] font-mono" />
        </label>
        <label className="block">
          <span className="text-[10px] font-mono text-[#9D9DBC] uppercase tracking-widest">Signal</span>
          <textarea name="signal" value={form.signal} onChange={handleChange} rows={2}
            className="w-full mt-1 bg-[#12121F] border border-[#393960] rounded px-2 py-1 text-xs text-[#E0E0F0] font-mono" />
        </label>
        <label className="block">
          <span className="text-[10px] font-mono text-[#9D9DBC] uppercase tracking-widest">Construction</span>
          <textarea name="construction" value={form.construction} onChange={handleChange} rows={2}
            className="w-full mt-1 bg-[#12121F] border border-[#393960] rounded px-2 py-1 text-xs text-[#E0E0F0] font-mono" />
        </label>
      </div>
      <div className="flex gap-2 mt-3">
        <button onClick={handleSubmit}
          className="text-[10px] font-mono text-[#C7A063] border border-[#C7A063] hover:bg-[#C7A063] hover:text-[#12121F] px-3 py-1.5 rounded uppercase tracking-widest transition-colors">
          Save
        </button>
        <button onClick={() => setEditing(false)}
          className="text-[10px] font-mono text-[#9D9DBC] border border-[#393960] hover:border-[#9D9DBC] px-3 py-1.5 rounded uppercase tracking-widest transition-colors">
          Cancel
        </button>
      </div>
    </div>
  );
}
