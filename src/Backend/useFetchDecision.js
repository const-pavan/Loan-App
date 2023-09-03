import { useState, useEffect } from 'react'

const useFetchDecision = (url) => {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  const [isPending, setIsPending] = useState(true)

  useEffect(() => {
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw Error('Could not fetch the data')
        }
        return res.json()
      })
      .then((data) => {
        setData(data)
        setIsPending(false)
        setError(null)
      })
      .catch((err) => {
        setError(err.message)
        setIsPending(false)
      })
  }, [url])

  return { data, error, isPending }
}

export default useFetchDecision
