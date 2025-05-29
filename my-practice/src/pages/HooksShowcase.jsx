// src/pages/HooksShowcase.jsx
import React from 'react';
import UseLocalStorageDemo from '../hooks/demos/UseLocalStorageDemo';
import UseWindowSizeDemo from '../hooks/demos/UseWindowSizeDemo';
import UsePreviousDemo from '../hooks/demos/UsePreviousDemo';
import UseDebounceDemo from '../hooks/demos/UseDebounceDemo';
import UseThrottleDemo from '../hooks/demos/UseThrottleDemo';
import UseOnClickOutsideDemo from '../hooks/demos/UseOnClickOutsideDemo';
import UseCopyToClipboardDemo from '../hooks/demos/UseCopyToClipboardDemo';

export default function HooksShowcase() {
  return (
    <div className="min-h-screen bg-slate-50 p-6">
      <h1 className="text-3xl font-bold mb-8 text-center">🧠 Custom Hooks Showcase</h1>
      <div className="grid grid-cols-1 sm:grid-col-2 md:grid-cols-3 gap-6">
        <UseLocalStorageDemo />
        <UseWindowSizeDemo />
        <UseOnClickOutsideDemo />
        <UsePreviousDemo />
        <UseCopyToClipboardDemo />
        <UseDebounceDemo />
        <UseThrottleDemo />
      </div>
    </div>
  );
}
