import Input from 'components/Input'
import dayjs from 'dayjs'
import React, { useEffect, useState } from 'react'
import { EventSocial } from 'types'
import s from './EventInfo.module.scss'

type Props = {
  onChange: (value: Partial<EventSocial>) => void
}

const EventInfo = React.memo(({ onChange }: Props) => {
  const [title, setTitle] = useState('')
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')
  const [location, setLocation] = useState('')
  const [capacity, setCapacity] = useState('')
  const [cost, setCost] = useState('')

  const [isEditingTitle, setIsEditingTitle] = useState(false)

  useEffect(() => {
    const _startAt = date && time ? dayjs(`${date} ${time}`).toISOString() : ''

    onChange({
      title,
      startAt: _startAt,
      venue: location,
      price: parseInt(cost, 10),
      capacity: parseInt(capacity, 10),
    })
  }, [date, time, location, capacity, cost, onChange, title])

  return (
    <>

      {!isEditingTitle ? (
        <h1
          role="presentation"
          onClick={() => setIsEditingTitle(true)}
          className={s.eventTitle}
        >
          {title || 'Untitled event'}
        </h1>
      ) : (
        <Input
          variant="large"
          placeholder="Event title"
          autoFocus={isEditingTitle}
          value={title}
          onBlur={() => setIsEditingTitle(false)}
          onChange={(e) => setTitle(e.target.value)}
        />
      )}
      <div className={s.dateTime}>
        <Input
          wrapperClassName={s.date}
          variant="large"
          iconSrc="/img/ico_calendar.png"
          type="date"
          placeholder="Date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <Input
          wrapperClassName={s.time}
          variant="large"
          iconSrc="/img/ico_clock.png"
          type="time"
          placeholder="Time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />
      </div>
      <Input
        iconSrc="/img/ico_location-marker.png"
        placeholder="Venue"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      <div className={s.capacityCostArea}>
        <Input
          iconSrc="/img/ico_user-group.png"
          type="number"
          placeholder="Max capacity"
          value={capacity}
          onChange={(e) => setCapacity(e.target.value)}
        />
        <Input
          iconSrc="/img/ico_currency-dollar.png"
          type="number"
          placeholder="Cost per person"
          value={cost}
          onChange={(e) => setCost(e.target.value)}
        />
      </div>
    </>
  )
})

export default EventInfo
