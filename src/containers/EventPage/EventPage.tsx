/* eslint-disable react/no-danger */
import Header from 'components/Header'
import React from 'react'
import s from './EventPage.module.scss'

const EventPage = () => (
  <div className={s.root}>
    <div className="container">
      <Header />

      <div className={s.main}>
        <div className={s.eventInfo}>
          {/* eslint-disable-next-line max-len */}
          <h1 className={s.eventTitle}>Web3 Founders & Designers Mixer + fireside chat with Coinbase Senior Designer & Airfoil founder</h1>

          <div className={s.dateTime}>
            <div className={s.infoItemLg}>
              <img src="/img/ico_calendar.png" alt="calendar" />
              <span>October 11, Wed</span>
            </div>
            <div className={s.infoItemLg}>
              <img src="/img/ico_clock.png" alt="clock" />
              <span>7 PM</span>
            </div>
          </div>

          <div className={s.infoItem}>
            <img src="/img/ico_location-marker.png" alt="marker" />
            <span>Chelsea Market (163 W 20nd Street). Manhattan, NYC</span>
          </div>

          <div className={s.capacityCostArea}>
            <div className={s.infoItem}>
              <img src="/img/ico_user-group.png" alt="user group" />
              <span>50 people</span>
            </div>
            <div className={s.infoItem}>
              <img src="/img/ico_currency-dollar.png" alt="dollar" />
              <span>$30</span>
            </div>
          </div>
        </div>
        <div className={s.eventImg}>
          <img src="https://supermomos-app-resources-us.s3.amazonaws.com/Images/SocialBanner/banner_1.jpg" alt="banner" />
        </div>
      </div>

      <p className={s.description} dangerouslySetInnerHTML={{ __html: 'Calling all web3 founders and designers for an exciting night of exchanging ideas and making new friends! Come make friends with fellow designers and founders in web3. There will also be lots of insights to be gained through an intimate chat +Q&A with two giants in the industry: \n\nPhil Hedayatnia, Founder & CEO of Airfoil, a growth design studio that has designed and built products in web3, the creator economy, the future of work, and much more for 80+ startups since 2018 \n\nJihoon Suh, Senior Product Designer at Coinbase, who was previously Senior Product Designer for Messenger for Meta. \n\nThis will be a curated group with limited spots, so do sign up early!\n\nAbout Airfoil: \n\nAirfoil Studio is the design, branding, and engineering team helping web3 take flight. As one of crypto’s first large-scale design firms, our mission is to design a friendlier financial layer for the internet. We’re a team of 85+ creatives, working from Airfoil’s hubs in Toronto, Singapore, and Seoul, who’ve worked on 100+ projects since 2018, including Solana Pay, Drift Protocol, Bonfida Solana Name Service, Utopia Labs, Planetarium, Layer3.xyz, MarginFi, Hyperspace, VBA Game, and more.\n\nLearn more about Airfoil and our work at airfoil.studio."' }} />
    </div>
  </div>
)

export default EventPage
