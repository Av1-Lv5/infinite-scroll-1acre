/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
        pathname: "/dy530bex0/image/upload/w_500,f_auto/v1/media/images/**",
      },
    ],
  },
};

export default nextConfig;
