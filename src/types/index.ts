export type EventSocial = {
  title: string
  startAt: string
  venue: string
  capacity: number
  price: number
  description: string
  isManualApprove: boolean
  privacy: string
  banner: string
  tags: string[]
}

export const testData: EventSocial = {
  title: 'Web3 Founders & Designers Mixer + fireside chat with Coinbase Senior Designer & Airfoil founder',
  startAt: '2022-10-11T19:00:00+00:00',
  venue: 'Chelsea Market (163 W 20nd Street). Manhattan, NYC',
  capacity: 50,
  price: 30,
  description: 'Calling all web3 founders and designers for an exciting night of exchanging ideas and making new friends! Come make friends with fellow designers and founders in web3. There will also be lots of insights to be gained through an intimate chat +Q&A with two giants in the industry: \n\nPhil Hedayatnia, Founder & CEO of Airfoil, a growth design studio that has designed and built products in web3, the creator economy, the future of work, and much more for 80+ startups since 2018 \n\nJihoon Suh, Senior Product Designer at Coinbase, who was previously Senior Product Designer for Messenger for Meta. \n\nThis will be a curated group with limited spots, so do sign up early!\n\nAbout Airfoil: \n\nAirfoil Studio is the design, branding, and engineering team helping web3 take flight. As one of crypto’s first large-scale design firms, our mission is to design a friendlier financial layer for the internet. We’re a team of 85+ creatives, working from Airfoil’s hubs in Toronto, Singapore, and Seoul, who’ve worked on 100+ projects since 2018, including Solana Pay, Drift Protocol, Bonfida Solana Name Service, Utopia Labs, Planetarium, Layer3.xyz, MarginFi, Hyperspace, VBA Game, and more.\n\nLearn more about Airfoil and our work at airfoil.studio.',
  isManualApprove: true,
  privacy: 'Public',
  banner: 'https://supermomos-app-resources-us.s3.amazonaws.com/Images/SocialBanner/banner_1.jpg',
  tags: ['Product', 'Design'],
}
