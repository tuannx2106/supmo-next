import Button from 'components/Button'
import Header from 'components/Header'
import Input from 'components/Input'
import TextArea from 'components/TextArea'
import React from 'react'
import EventSettings from './components/EventSettings'
import s from './HomePage.module.scss'

const HomePage = () => (
  <div className={s.root}>
    <div className="container">
      <Header />

      <div className={s.hero}>
        <div className={s.form}>
          <h1 className={s.eventTitle}>Untitled Event</h1>
          <div className={s.dateTime}>
            <Input
              wrapperClassName={s.date}
              variant="large"
              iconSrc="/img/ico_calendar.png"
              type="date"
              placeholder="Date"
            />
            <Input
              wrapperClassName={s.time}
              variant="large"
              iconSrc="/img/ico_clock.png"
              type="time"
              placeholder="Time"
            />
          </div>
          <Input
            iconSrc="/img/ico_location-marker.png"
            placeholder="Venue"
          />
          <div className={s.capacityCostArea}>
            <Input
              iconSrc="/img/ico_user-group.png"
              type="number"
              placeholder="Max capacity"
            />
            <Input
              iconSrc="/img/ico_currency-dollar.png"
              type="number"
              placeholder="Cost per person"
            />
          </div>
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

        <EventSettings />

        <Button className={s.btnCreate} variant="primary">CREATE SOCIAL</Button>
      </div>
    </div>
  </div>
)

export default HomePage
