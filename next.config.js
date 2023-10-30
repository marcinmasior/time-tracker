/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/dashboard/timesheets',
        permanent: true,
      },
      {
        source: '/dashboard',
        destination: '/dashboard/timesheets',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
