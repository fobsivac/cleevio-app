module.exports = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/trips",
        permanent: true,
      },
    ];
  },
};
