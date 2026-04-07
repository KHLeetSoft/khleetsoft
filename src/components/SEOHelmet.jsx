import { Helmet } from 'react-helmet';

const SEOHelmet = ({ title, description, keywords, canonicalUrl, language = 'en' }) => {
  const baseUrl = 'https://khleetsoft.com';
  const defaultTitle = 'KH LeetSoft Innovation Pvt Ltd';
  const defaultDescription = {
    en: 'KH LeetSoft Innovation Pvt Ltd — custom software, web, and mobile development in India. Structured delivery, clear communication, and support for businesses and teams.',
    hi: 'KH LeetSoft Innovation Pvt Ltd — भारत में कस्टम सॉफ्टवेयर, वेब और मोबाइल विकास। संरचित डिलीवरी, स्पष्ट संवाद और व्यवसायों के लिए सहायता।',
  };
  const defaultKeywords = {
    en: 'KH LeetSoft, software development India, custom software, web development, mobile apps, Chhattisgarh, IT company, private limited',
    hi: 'KH LeetSoft, सॉफ्टवेयर डेवलपमेंट भारत, कस्टम सॉफ्टवेयर, वेब डेवलपमेंट, मोबाइल ऐप्स, छत्तीसगढ़, आईटी कंपनी',
  };

  return (
    <Helmet>
      <title>{title ? `${title} | ${defaultTitle}` : defaultTitle}</title>
      <meta name="description" content={description || defaultDescription[language]} />
      <meta name="keywords" content={keywords || defaultKeywords[language]} />
      <link rel="canonical" href={canonicalUrl ? `${baseUrl}${canonicalUrl}` : baseUrl} />
      <link rel="alternate" href={`${baseUrl}/hi${canonicalUrl || ''}`} hreflang="hi-IN" />
      <link rel="alternate" href={`${baseUrl}${canonicalUrl || ''}`} hreflang="en" />
      <link rel="alternate" href={`${baseUrl}${canonicalUrl || ''}`} hreflang="x-default" />
      <meta name="geo.region" content="IN-CG" />
      <meta name="geo.position" content="21.2787;81.8661" />
      <meta name="ICBM" content="21.2787, 81.8661" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl ? `${baseUrl}${canonicalUrl}` : baseUrl} />
      <meta property="og:title" content={title ? `${title} | ${defaultTitle}` : defaultTitle} />
      <meta property="og:description" content={description || defaultDescription[language]} />
      <meta property="og:locale" content={language === 'hi' ? 'hi_IN' : 'en_US'} />
      <meta property="og:locale:alternate" content={language === 'hi' ? 'en_US' : 'hi_IN'} />

      {/* Twitter */}
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={canonicalUrl ? `${baseUrl}${canonicalUrl}` : baseUrl} />
      <meta property="twitter:title" content={title ? `${title} | ${defaultTitle}` : defaultTitle} />
      <meta property="twitter:description" content={description || defaultDescription[language]} />
      <meta property="twitter:site" content="@khleetsoft" />
      <meta property="twitter:creator" content="@khleetsoft" />

      {/* Schema.org Local Business Markup */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "SoftwareCompany",
          "name": defaultTitle,
          "description": description || defaultDescription[language],
          "url": baseUrl,
          "sameAs": [
            "https://twitter.com/khleetsoft",
            "https://www.linkedin.com/company/khleetsoft",
            "https://github.com/khleetsoft"
          ],
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "IN",
            "addressRegion": "Chhattisgarh"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": "21.2787",
            "longitude": "81.8661"
          },
          "areaServed": ["IN", "Global"],
          "availableLanguage": ["en", "hi"],
          "contactPoint": [
            {
              "@type": "ContactPoint",
              "telephone": "+91-6266966397",
              "contactType": "customer service",
              "email": "innovationleetsoft@gmail.com"
            },
            {
              "@type": "ContactPoint",
              "telephone": "+91-7400743938",
              "contactType": "customer service",
              "email": "innovationleetsoft@gmail.com"
            }
          ]
        })}
      </script>
    </Helmet>
  );
};

export default SEOHelmet;