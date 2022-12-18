import classNames from 'classnames'
import Modal from 'components/Modal'
import { ModalProps } from 'components/Modal/Modal'
import React, { useState } from 'react'
import s from './ModalEventBanner.module.scss'

const bannerURLs: string[] = Array(10).fill(0).map(
  (_, index) => `https://supermomos-app-resources-us.s3.amazonaws.com/Images/SocialBanner/banner_${index + 1}.jpg`,
)

type ModalEventBannerProps = Omit<ModalProps, 'onOk'> & {
  onChange: (bannerUrl: string) => void
}

const ModalEventBanner = ({ onChange, ...modalProps }: ModalEventBannerProps) => {
  const [bannerSrc, setBannerSrc] = useState('https://supermomos-app-resources-us.s3.amazonaws.com/Images/SocialBanner/banner_1.jpg')

  return (
    <Modal
      {...modalProps}
      title="Choose a banner"
      onOk={() => {
        modalProps.onCancel?.()
        onChange(bannerSrc)
      }}
    >
      <div className={s.bannerList}>
        {bannerURLs.map((url, index) => (
          <figure
              // eslint-disable-next-line react/no-array-index-key
            key={`${url}${index}`}
            className={classNames(s.imgWrapper, {
              [s.isActive]: url === bannerSrc,
            })}
            role="presentation"
            onClick={() => setBannerSrc(url)}
          >
            <img src={url} alt="banner" />
          </figure>
        ))}
      </div>
    </Modal>
  )
}

export default ModalEventBanner
