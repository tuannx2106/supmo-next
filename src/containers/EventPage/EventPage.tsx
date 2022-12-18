/* eslint-disable react/no-danger */
import Header from 'components/Header'
import dayjs from 'dayjs'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { EventSocial } from 'types'
import s from './EventPage.module.scss'

const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

const EventPage = () => {
  const router = useRouter()
  const [eventSocial, setEventSocial] = useState<EventSocial | undefined>()

  useEffect(() => {
    if (typeof window === 'undefined') return

    const data = window.localStorage.getItem('socialEvent')
    if (data) setEventSocial(JSON.parse(data))
    else router.replace('/')
  }, [router])

  return (
    <div className={s.root}>
      <div className="container">
        <Header />

        <div className={s.main}>
          <div className={s.eventInfo}>
            {/* eslint-disable-next-line max-len */}
            <h1 className={s.eventTitle}>{eventSocial?.title}</h1>

            <div className={s.dateTime}>
              <div className={s.infoItemLg}>
                <img src="/img/ico_calendar.png" alt="calendar" />
                <span>
                  {dayjs(eventSocial?.startAt).format('MMMM DD, ')}{weekdays[dayjs(eventSocial?.startAt).day()]}
                </span>
              </div>
              <div className={s.infoItemLg}>
                <img src="/img/ico_clock.png" alt="clock" />
                <span>{dayjs(eventSocial?.startAt).format('hh:mm A')}</span>
              </div>
            </div>

            <div className={s.infoItem}>
              <img src="/img/ico_location-marker.png" alt="marker" />
              <span>{eventSocial?.venue}</span>
            </div>

            <div className={s.capacityCostArea}>
              <div className={s.infoItem}>
                <img src="/img/ico_user-group.png" alt="user group" />
                <span>{eventSocial?.capacity} people</span>
              </div>
              <div className={s.infoItem}>
                <img src="/img/ico_currency-dollar.png" alt="dollar" />
                <span>${eventSocial?.price}</span>
              </div>
            </div>
          </div>
          <div className={s.eventImg}>
            <img src={eventSocial?.banner} alt="banner" />
          </div>
        </div>

        {eventSocial?.description && (
          <p className={s.description} dangerouslySetInnerHTML={{ __html: eventSocial.description }} />
        )}
      </div>
    </div>
  )
}

export default EventPage
