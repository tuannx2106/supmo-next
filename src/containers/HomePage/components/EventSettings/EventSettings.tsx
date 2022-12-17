import Checkbox from 'components/Checkbox'
import Radio, { RadioGroup } from 'components/Radio'
import Tag from 'components/Tag'
import React, { useEffect, useMemo, useState } from 'react'
import { EventSocial } from 'types'
import s from './EventSettings.module.scss'

const tags = ['Engineering', 'Product', 'Marketing', 'Design']

type Props = {
  onChange: (value: Partial<EventSocial>) => void
}

const EventSetting = ({ onChange }: Props) => {
  const [isManualApprove, setIsManualApprove] = useState<boolean>(false)
  const [privacy, setPrivacy] = useState<string>('')
  const [activeTags, setActiveTags] = useState<string[]>(['Engineering'])

  const inactiveTags = useMemo(() => tags.filter((tag) => !activeTags.includes(tag)), [activeTags])

  useEffect(() => {
    onChange({
      tags: activeTags,
      isManualApprove,
      privacy,
    })
  }, [isManualApprove, privacy, activeTags, onChange])

  return (
    <div className={s.settings}>
      <h2 className={s.headlineSetting}>Settings</h2>
      <Checkbox
        value={isManualApprove}
        onChange={() => setIsManualApprove((prevState) => !prevState)}
      >
        I want to approve attendees
      </Checkbox>

      <div>
        <p className={s.privacyLabel}>Privacy</p>
        <RadioGroup name="privacy" value={privacy} onChange={setPrivacy}>
          <Radio value="Public">Public</Radio>
          <Radio value="Curated Audience">Curated Audience</Radio>
          <Radio value="Community Only">Community Only</Radio>
        </RadioGroup>
      </div>

      <div>
        <p className={s.tagLabel}>Tag your social</p>
        <p className={s.tagSubLabel}>Pick tags for our curation engine to work its magin</p>
      </div>

      <div>
        <div className={s.activeTags}>
          {!activeTags.length && <p>No tag</p>}
          {activeTags.map((activeTag) => (
            <Tag
              key={activeTag}
              size="large"
              type="purple"
              onRemove={() => {
                setActiveTags((prevState) => prevState.filter((tag) => tag !== activeTag))
              }}
            >
              {activeTag}
            </Tag>
          ))}
        </div>
        <div className={s.tags}>
          {inactiveTags.map((tag) => (
            <Tag
              key={tag}
              onClick={() => { setActiveTags((prevState) => [...prevState, tag]) }}
            >{tag}
            </Tag>
          ))}
        </div>
      </div>
    </div>
  )
}

export default EventSetting
