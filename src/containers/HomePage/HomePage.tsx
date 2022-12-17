import Button from 'components/Button'
import Header from 'components/Header'
import TextArea from 'components/TextArea'
import React from 'react'
import EventInfo from './components/EventInfo'
import EventSettings from './components/EventSettings'
import s from './HomePage.module.scss'

const HomePage = () => (
  <div className={s.root}>
    <div className="container">
      <Header />

      <div className={s.hero}>
        <div className={s.form}>
          <EventInfo onChange={console.log} />
        </div>
        <div className={s.btnAddBanner} role="presentation" onClick={console.log}>
          <img src="img/ico_image.png" alt="add a banner" />
          Add a banner
        </div>
      </div>

      <div className={s.formLower}>
        <div className={s.descriptionFormField}>
          <p>Description</p>
          <TextArea placeholder="Description of your event.." rows={10} />
        </div>

        <EventSettings onChange={console.log} />

        <Button className={s.btnCreate} variant="primary">CREATE SOCIAL</Button>
      </div>
    </div>
  </div>
)

export default HomePage
