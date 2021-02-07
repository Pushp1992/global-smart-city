const BASE_URL =
  "https://res.cloudinary.com/pushpcloud/image/upload/v1608458732/smart-city/MenuBar/Services/info-communication";

const InformationCommunication = {
  bannerImage: `${BASE_URL}/info-comm_xkaadx`,
  firstSection: {
    title: "Information Communication Technology (ICT)",
    description: `ICT ensures a long-term vision, focused on the future that looks
     into the horizon to try to predict what the organization's business needs will be based on the market and competition.`
  },
  secondSection: {
    title: "What we do?",
    description: `At SDP, our professionals help clients align their ICT resources 
    with their business objectives and structure them to minimise key business risks. 
    This can often mean assisting organisations to manage their technology as a business.
     We also help organisations to adopt leading practices in IT management, quality assurance and IT governance`
  },
  thirdSection: {
    title: "What we Offer?",
    description: [
      { id: 1, title: `ICT Strategy` },
      { id: 2, title: `Platform Services` },
      { id: 3, title: `Aligning IT to the business` },
      { id: 4, title: `Developing IT, e-Business, and e-Government strategy and roadmap` },
      { id: 5, title: `Strategy Building and Transformation roadmap` },
      { id: 6, title: `Customer Experience Journey mapping` },
      { id: 7, title: `Establishing and managing large-scale IT, e-Business.` },
      { id: 8, title: `e-Government implementation programs` },
      { id: 9, title: `Assessing and managing IT infrastructure and system security` },
      { id: 10, title: `Making IT projects perform` },
      { id: 11, title: `IT source, cost and service management` }
    ],
  },
};

export { InformationCommunication };
