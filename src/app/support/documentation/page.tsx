"use client"

import { useState } from "react"
import { Prism } from "react-syntax-highlighter"
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism"

export default function DocumentationPage() {
  const [copied, setCopied] = useState(false)

  const codeSnippet = `await fetch('https://app-signal.vercel.app/api/events', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    category: 'weekly',
    fields: {
      field1: 'value1', // for example: user id
      field2: 'value2' // for example: user email
    }
  })
})`

  const copyToClipboard = () => {
    navigator.clipboard.writeText(codeSnippet)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="min-h-screen bg-brand-950 text-white p-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-blue-400">
          AppSignal API Documentation
        </h1>
        <p className="text-gray-300 mb-4">
          AppSignal allows you to send event data to your monitoring system. Use
          the API to track important application events and receive Discord
          notifications.
        </p>

        {/* Authentication Section */}
        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-blue-300 mb-2">
            Authentication
          </h2>
          <p className="text-gray-400">
            Each request requires an API key in the{" "}
            <code className="bg-gray-900 px-2 py-1 rounded text-blue-300">
              Authorization
            </code>{" "}
            header.
          </p>
        </section>

        {/* Usage Example */}
        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-blue-300 mb-2">
            Usage Example
          </h2>
          <div className="bg-gray-800 p-4 rounded-md relative">
            <pre className="overflow-x-auto text-gray-300">
              <Prism
                language="javascript"
                style={{
                  ...atomDark,
                  'pre[class*="language-"]': {
                    ...atomDark['pre[class*="language-"]'],
                    background: "transparent",
                  },
                  'code[class*="language-"]': {
                    ...atomDark['code[class*="language-"]'],
                    background: "transparent",
                  },
                }}
                customStyle={{
                  borderRadius: "0px",
                  margin: 0,
                  fontSize: "1rem",
                  lineHeight: "1.5",
                }}
              >
                {codeSnippet}
              </Prism>
            </pre>
            <button
              onClick={copyToClipboard}
              className="absolute top-2 right-2 bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded text-sm"
            >
              {copied ? "Copied!" : "Copy"}
            </button>
          </div>
        </section>

        {/* Response Example */}
        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-blue-300 mb-2">
            Response
          </h2>
          <div className="bg-gray-800 p-4 rounded-md">
            <pre className="overflow-x-auto text-green-400">
              {`{
  "success": true,
  "message": "Event recorded successfully",
  "eventId": "abc123"
}`}
            </pre>
          </div>
        </section>

        {/* Error Handling */}
        <section>
          <h2 className="text-2xl font-semibold text-blue-300 mb-2">
            Error Handling
          </h2>
          <p className="text-gray-400 mb-2">
            If an error occurs, the API returns an error message:
          </p>
          <div className="bg-gray-800 p-4 rounded-md">
            <pre className="overflow-x-auto text-red-400">
              {`{
  "success": false,
  "error": "Invalid API key"
}`}
            </pre>
          </div>
        </section>
      </div>
    </div>
  )
}
