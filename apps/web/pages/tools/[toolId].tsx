// ✅ This is a frontend React page
import { useRouter } from 'next/router'
import { useState } from 'react'
import { FieldSelector } from '../../components/FieldSelector'
import { ResultViewer } from '../../components/ResultViewer'
import { ToolForm } from '../../components/ToolForm'

export default function ToolPage() {
  const router = useRouter()
  const { toolId } = router.query

  const [input, setInput] = useState({ query: '' })
  const [mode, setMode] = useState<'all' | 'manual' | 'ai'>('manual')
  const [selectedFields, setSelectedFields] = useState<string[]>(['subject', 'from'])
  const [result, setResult] = useState<any>(null)
  const [loading, setLoading] = useState(false)

  const runTool = async () => {
    if (!toolId || typeof toolId !== 'string') return
    setLoading(true)
    setResult(null)

    try {
      const res = await fetch(`/api/tools/${toolId}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ input, mode, fields: selectedFields }),
      })
      const json = await res.json()
      setResult(json)
    } catch (e) {
      setResult({ error: 'Failed to run tool.' })
    } finally {
      setLoading(false)
    }
  }

  if (!toolId || typeof toolId !== 'string') {
    return <div className="p-6 text-gray-600">Loading tool...</div>
  }

  return (
    <main className="p-6 space-y-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold capitalize">{toolId.replace('.', ' → ')}</h1>

      <ToolForm input={input} setInput={setInput} />
      <FieldSelector
        mode={mode}
        setMode={setMode}
        selectedFields={selectedFields}
        setSelectedFields={setSelectedFields}
      />
      <button
        onClick={runTool}
        disabled={loading}
        className={`px-4 py-2 rounded text-white ${
          loading ? 'bg-gray-500' : 'bg-black hover:bg-gray-900'
        }`}
      >
        {loading ? 'Running...' : 'Run Tool'}
      </button>
      <ResultViewer result={result} />
    </main>
  )
}
