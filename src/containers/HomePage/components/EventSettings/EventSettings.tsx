import Checkbox from 'components/Checkbox'
import Radio, { RadioGroup } from 'components/Radio'
import Tag from 'components/Tag'
import React from 'react'
import s from './EventSettings.module.scss'

const EventSetting = () => (
  <div className={s.settings}>
    <h2 className={s.headlineSetting}>Settings</h2>
    <Checkbox>I want to approve attendees</Checkbox>

    <div>
      <p className={s.privacyLabel}>Privacy</p>
      <RadioGroup name="privacy">
        <Radio>Public</Radio>
        <Radio>Curated Audience</Radio>
        <Radio>Community Only</Radio>
      </RadioGroup>
    </div>

    <div>
      <p className={s.tagLabel}>Tag your social</p>
      <p className={s.tagSubLabel}>Pick tags for our curation engine to work its magin</p>
    </div>

    <div>
      <div className={s.activeTags}>
        <Tag size="large" type="purple" onClose={console.log}>Engineering</Tag>
      </div>
      <div className={s.tags}>
        <Tag>Product</Tag>
        <Tag>Marketing</Tag>
        <Tag>Design</Tag>
      </div>
    </div>
  </div>
)

export default EventSetting
