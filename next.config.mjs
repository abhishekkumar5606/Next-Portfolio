// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   // Add the following configuration
//   export: 'static', // Set export mode to static
//   // You can add other configurations here
// };

// module.exports = nextConfig;
const basePath = process.env.NODE_ENV === 'production' ? '/Next-Portfolio' : '';

export default {
  basePath,
  output: 'export', // Change this line
  reactStrictMode: true,
};
