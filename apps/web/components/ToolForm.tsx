// apps/web/components/ToolForm.tsx

import React from 'react'

interface ToolFormProps {
  input: { query: string }
  setInput: React.Dispatch<React.SetStateAction<{ query: string }>>
}

export const ToolForm: React.FC<ToolFormProps> = ({ input, setInput }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  return (
    <div className="space-y-4">
      <label className="block">
        <span className="text-sm font-medium text-gray-700">Query</span>
        <input
          type="text"
          name="query"
          value={input.query}
          onChange={handleChange}
          placeholder="Search Gmail for..."
          className="mt-1 w-full border rounded px-3 py-2"
        />
      </label>
    </div>
  )
}
