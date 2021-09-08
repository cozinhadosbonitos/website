import * as React from 'react'
import { useEffect, useState } from 'react'
import { useDebounce } from 'use-debounce'

export function SearchBox() {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState([])
  const [debouncedQuery] = useDebounce(query, 300)

  useEffect(() => {
    if (debouncedQuery === undefined || window === undefined) {
      return
    }
    window
      .fetch(`/.netlify/functions/search?q=${debouncedQuery}`)
      .then((response) => response.json())
      .then((searchResults) => setResults(searchResults))
  }, [debouncedQuery])
  return (
    <div>
      <input
        type="text"
        onChange={(event) => setQuery(event.target.value)}
        value={query}
      />
      {!!results &&
        results.map((result, index) => (
          <div key={index}>
            Result {index}: {JSON.stringify(result)}
          </div>
        ))}
      {results.length === 0 && !!debouncedQuery && (
        <div>Sorry, no Results found :(</div>
      )}
    </div>
  )
}
