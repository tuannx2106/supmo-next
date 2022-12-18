import { EventSocial } from 'types';

const mockCreateSocialAPI = (socialEvent: EventSocial): Promise<EventSocial | {msg: string}> =>
  new Promise((resolve) => {
    const emptyFields = Object.entries(socialEvent)
      .map(([key, value]) => value ? null : key)
      .filter((key) => key !== null)

    setTimeout(() => {
      if (emptyFields.length) {
        resolve({ msg: `${emptyFields.join(', ')} is required!!!` })
      }
      resolve(socialEvent)
    }, 2000)
  })

export const createSocialEvent = async (socialEvent: EventSocial): Promise<EventSocial | {msg: string}> => {
  // CORS problem?
  // const data = await axios({
  //   method: 'post',
  //   url: 'https://1p8s3jhf8j.execute-api.us-east-1.amazonaws.com/Supermomos/interview/social',
  //   data: socialEvent,
  //   withCredentials: true,
  // })
  const data = await mockCreateSocialAPI(socialEvent)
  return data
}
