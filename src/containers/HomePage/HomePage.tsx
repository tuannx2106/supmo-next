import Button from 'components/Button'
import Header from 'components/Header'
import TextArea from 'components/TextArea'
import React, { useState } from 'react'
import { EventSocial } from 'types'
import ModalEventBanner from './components/ModalEventBanner'
import EventInfo from './components/EventInfo'
import EventSettings from './components/EventSettings'
import s from './HomePage.module.scss'
import { createSocialEvent } from './helper'
import { useRouter } from 'next/router'

const HomePage = () => {
  const router = useRouter()
  const [isModalBannerOpen, setIsModalBannerOpen] = useState(false)
  const [isCreatingSocial, setIsCreatingSocial] = useState(false)

  const [eventInfoValue, setEventInfoValue] = useState<Partial<EventSocial>>({})
  const [eventSettingsValue, setEventSettingsValue] = useState<Partial<EventSocial>>({})
  const [eventDescription, setEventDescription] = useState('')
  const [banner, setBanner] = useState('')

  const onClickCreateEvent = async () => {
    if (typeof window === 'undefined') return undefined

    setIsCreatingSocial(true)
    const data = await createSocialEvent({
      ...eventInfoValue,
      ...eventSettingsValue,
      description: eventDescription,
      banner,
    } as EventSocial)
    setIsCreatingSocial(false)

    const { msg } = data as {msg: string}
    if (msg) {
      // eslint-disable-next-line no-alert
      return window.alert(msg)
    }

    window.localStorage.setItem('socialEvent', JSON.stringify(data))
    return router.push('/event')
  }

  return (
    <div className={s.root}>
      <div className="container">
        <Header />

        <div className={s.hero}>
          <div className={s.form}>
            <EventInfo onChange={setEventInfoValue} />
          </div>
          <div
            className={s.btnAddBanner}
            role="presentation"
            style={{
              backgroundImage: `url(${banner})`,
            }}
            onClick={() => setIsModalBannerOpen(true)}
          >
            {!banner && <><img src="img/ico_image.png" alt="add a banner" /> Add a banner</>}
          </div>
        </div>

        <div className={s.formLower}>
          <div className={s.descriptionFormField}>
            <p>Description</p>
            <TextArea
              placeholder="Description of your event.."
              rows={10}
              value={eventDescription}
              onChange={(e) => setEventDescription(e.target.value)}
            />
          </div>

          <EventSettings onChange={setEventSettingsValue} />

          <Button
            className={s.btnCreate}
            variant="primary"
            onClick={onClickCreateEvent}
            size="large"
            loading={isCreatingSocial}
          >
            {isCreatingSocial ? 'CREATING...' : 'CREATE SOCIAL'}
          </Button>
        </div>
      </div>

      <ModalEventBanner
        open={isModalBannerOpen}
        onCancel={() => setIsModalBannerOpen(false)}
        onChange={setBanner}
      />
    </div>
  )
}

export default HomePage
