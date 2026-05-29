import { MetadataRoute } from 'next'
import costumes from '../../data/costumes.json'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://disfracesvalencia.com'

  const costumeUrls = costumes.map((c) => ({
    url: `${baseUrl}/disfraz/${c.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  return [
    { url: baseUrl, lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
    { url: `${baseUrl}/catalogo`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/catalogo/todos`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/contacto`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/info`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/fotos`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/disfraces-divertidos-valencia`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/disfraces-infantiles-valencia`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/disfraces-especiales-valencia`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    ...costumeUrls,
  ]
}
