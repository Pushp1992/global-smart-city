const BASE_URL =
  "https://res.cloudinary.com/pushpcloud/image/upload/v1608458732/smart-city/MenuBar/Services/smart-city-masterplan";

const MasterPlan = {
  bannerImage: `${BASE_URL}/masterplan_ocotcu`,
  firstSection: {
    title: "Smart Cities master Planning",
    description: `Smart cities management models must integrate a new ecosystem of value
     creators and innovators. They must plan, support and monetize new business models,
      processes and services. They must upgrade their existing infrastructure and management 
      processes to support “smart” services.`
  },
  secondSection: {
    title: "What we do?",
    description: `What we do?
    At SDP, Master planning services helps organizations and partners explore smart cities strategy approaches and gain expert knowledge on urban transformation.`
  },
  thirdSection: {
    title: "What we Offer?",
    description: [
      { id: 1, title: `Delivering insightful, value-added smart city master plan` },
      { id: 2, title: `Urban & Rural Revitalization Plan` },
      { id: 3, title: `Area Based Development (ABD) Strategy` },
      { id: 4, title: `Pan City Development Strategy` },
      { id: 5, title: `Retrofitting & Redevelopment Strategy` },
      { id: 6, title: `Greenfield Development Strategy` },
      { id: 7, title: `Smart cities strategies potential Review` },
      { id: 8, title: `Smart cities comparison  & feasibility study ` },
      { id: 9, title: `Master plan Re – Structuring services` },
      { id: 10, title: `Master plan finance analysis` }
    ],
  },
};

export { MasterPlan };
