// apps/web/components/FieldSelector.tsx

import React from 'react'

interface FieldSelectorProps {
  mode: 'all' | 'manual' | 'ai'
  setMode: (mode: 'all' | 'manual' | 'ai') => void
  selectedFields: string[]
  setSelectedFields: (fields: string[]) => void
}

const AVAILABLE_FIELDS = ['subject', 'from', 'to', 'date', 'snippet']

export const FieldSelector: React.FC<FieldSelectorProps> = ({
  mode,
  setMode,
  selectedFields,
  setSelectedFields,
}) => {
  const toggleField = (field: string) => {
    if (selectedFields.includes(field)) {
      setSelectedFields(selectedFields.filter((f) => f !== field))
    } else {
      setSelectedFields([...selectedFields, field])
    }
  }

  return (
    <div className="space-y-2">
      <div className="flex gap-2">
        {['all', 'manual', 'ai'].map((option) => (
          <button
            key={option}
            onClick={() => setMode(option as 'all' | 'manual' | 'ai')}
            className={`px-3 py-1 rounded border ${
              mode === option
                ? 'bg-black text-white'
                : 'bg-white text-gray-800'
            }`}
          >
            {option === 'all'
              ? 'All Fields'
              : option === 'manual'
              ? 'Manual Selection'
              : 'AI Suggested'}
          </button>
        ))}
      </div>

      {mode === 'manual' && (
        <div className="flex flex-wrap gap-2 mt-2">
          {AVAILABLE_FIELDS.map((field) => (
            <button
              key={field}
              onClick={() => toggleField(field)}
              className={`px-3 py-1 rounded border ${
                selectedFields.includes(field)
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700'
              }`}
            >
              {field}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
