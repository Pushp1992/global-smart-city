const BASE_URL =
  "https://res.cloudinary.com/pushpcloud/image/upload/v1608458732/smart-city/MenuBar/Services/city-benchmarking";

const BenchMarking = {
  bannerImage: `${BASE_URL}/banner-image_mjig8b`,
  firstSection: {
    title: "Smart Cities-Villages Benchmarking",
    description: `Benchmarking service makes reference to other international standards and is 
    designed to make these standards accessible for people running smart cities, smart villages, 
    smart Mobility, smart society, smart infrastructures development and other necessary projects.`,
  },
  secondSection: {
    title: "What we do?",
    description: `At SDP LLC, we help you to view the performance and processes of your support
    organization objectively as a client would see you. Quantifying the gap between where you 
    are now and the industry's best, market trend analysis enables you to set more meaningful
    goals and provides best practices for any smart solutions or strategy.`,
  },
  thirdSection: {
    title: "What we Offer?",
    description: [
      { id: 1, title: `Innovation Management Benchmark` },
      { id: 2, title: `Smart Solutions and strategy  best practices` },
      { id: 3, title: `Use-case development & Business Intelligence` },
      { id: 4, title: `Information Technology(IT) Benchmarking` },
      { id: 5, title: `Procurement and Sourcing Benchmarking` },
      { id: 6, title: `Finance Effectiveness Benchmarking` },
      { id: 7, title: `Customized Benchmarking` },
    ],
  },
};

export { BenchMarking };
