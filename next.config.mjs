/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: ["fakestoreapi.com"], // ✅ Allow external images
    },
  };
  
  export default nextConfig; // ✅ Use "export default" instead of "module.exports"
  