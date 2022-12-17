import Input from 'components/Input'
import dayjs from 'dayjs'
import React, { useEffect, useState } from 'react'
import { EventSocial } from 'types'
import s from './EventInfo.module.scss'

type Props = {
  onChange: (value: Partial<EventSocial>) => void
}

const EventInfo = ({ onChange }: Props) => {
  const [date, setDate] = useState<string>('')
  const [time, setTime] = useState<string>('')
  const [location, setLocation] = useState<string>('')
  const [capacity, setCapacity] = useState<string>('')
  const [cost, setCost] = useState<string>('')

  useEffect(() => {
    // all field a required
    if (!date || !time || !location || !capacity || !cost) return
    const _startAt = dayjs(`${date} ${time}`).toISOString()

    onChange({
      startAt: _startAt,
      venue: location,
      price: parseInt(cost, 10),
      capacity: parseInt(capacity, 10),
    })
  }, [date, time, location, capacity, cost, onChange])

  return (
    <>
      <h1 className={s.eventTitle}>Untitled Event</h1>
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
}

export default EventInfo
