import { useState, useEffect } from 'react'

const UK_TAG = 'seoulfultea-21'
const US_TAG = 'jerseyreviews-20'

export function useAmazonLink() {
  const [isUS, setIsUS] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('https://ipapi.co/json/')
      .then(r => r.json())
      .then(data => { if (data.country_code === 'US') setIsUS(true) })
      .catch(() => {})
      .finally(() => setLoading(false))
  }, [])

  function buildLink(product) {
    if (isUS && product.usAsin) {
      return `https://www.amazon.com/dp/${product.usAsin}?tag=${US_TAG}&linkCode=ll1`
    }
    return `https://www.amazon.co.uk/dp/${product.ukAsin}?tag=${UK_TAG}&linkCode=ll1`
  }

  return { buildLink, isUS, loading }
}
