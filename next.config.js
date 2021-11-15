/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['https://media.kitsu.io', 'media.kitsu.io'],
  },
  env: {
    KITSU_URL:
      "https://private-anon-d507aa85f8-kitsu.apiary-proxy.com/api/edge/",
  },
};
