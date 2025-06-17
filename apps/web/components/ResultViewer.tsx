// apps/web/components/ResultViewer.tsx

import React from 'react'

interface ResultViewerProps {
  result: any
}

export const ResultViewer: React.FC<ResultViewerProps> = ({ result }) => {
  if (!result) return null

  const isError = result?.error

  return (
    <div className="mt-6 p-4 border rounded bg-gray-50">
      <h2 className="text-lg font-semibold mb-2">Result</h2>
      {isError ? (
        <p className="text-red-600 font-medium">{result.error}</p>
      ) : (
        <pre className="text-sm bg-gray-100 rounded p-3 overflow-auto">
          {JSON.stringify(result, null, 2)}
        </pre>
      )}
    </div>
  )
}
