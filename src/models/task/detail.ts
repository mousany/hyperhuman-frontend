import { TaskSession } from './cards'
import { useState } from 'react'

export type ChatProvider = 'Human' | 'AI'

export interface Sentence {
  content: string
  provider: ChatProvider
}

export interface MeshProfile {
  image_uuid?: string
  video_uuid?: string
  model_uuid?: string
  texture_diff_high_uuid?: string
  texture_spec_high_uuid?: string
  texture_norm_high_uuid?: string
  texture_diff_low_uuid?: string
  texture_spec_low_uuid?: string
  texture_norm_low_uuid?: string
  export_info_uuid?: string
}

export interface TaskDetail extends TaskSession {
  resource: MeshProfile
  chat_history: Sentence[]
}

export const useScrollTrigger = () => {
  const [triggerScroll, setTriggerScroll] = useState<number>(0)
  const scrollToBottom = () => {
    setTriggerScroll(triggerScroll + 1)
  }
  return {
    triggerScroll: triggerScroll,
    scrollToBottom: scrollToBottom,
  }
}

export const mockTaskDetail: TaskDetail = {
  task_uuid: '123',
  video_url: 'https://www.bilibili.com/video/BV1uT4y1P7CX/',
  image_url:
    'data:image/jpeg;base64,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',
  prompt:
    'He has a great smile He has a face only a 6other could love. He has got dimples. One of his eyes is bigger than the other.',
  num_like: 6,
  time: 1145141919810,
  is_liked: false,
  author: {
    id: '123',
    name: 'John Doe',
    avatar: 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50',
  },
  resource: {
    image_uuid: '5f55a0c7-77cc-4f49-bf0f-65b81636dd1d',
    video_uuid: '9fa79043-e9d1-4cf0-affa-bbc715063028',
    model_uuid: 'f3fabce9-ada0-451a-88f9-78d2b8632d29',
    texture_diff_high_uuid: '7c7717c7-51cf-4ac2-9c16-ee43133730c7',
    texture_spec_high_uuid: '06b76218-45c3-4c0a-a65b-f5fc3cb31063',
    texture_norm_high_uuid: '287f51c6-4a9a-4a6a-9f8e-20fc3ada854b',
    texture_diff_low_uuid: 'e80ea2b6-4f4b-4ba8-a2fe-9d480c7794c1',
    texture_spec_low_uuid: '4d365a26-640f-4ae9-8a0e-5615434d44cd',
    texture_norm_low_uuid: '9b272c97-1bf5-4bfa-bde5-60a7b1dcc465',
    export_info_uuid: '30cb59fd-1cde-42b4-9446-f10f9e11d7c9',
  },
  chat_history: [
    {
      content: 'Obi-Wan never told you what happened to your father.',
      provider: 'Human',
    },
    {
      content: 'He told me enough! He told me you killed him!',
      provider: 'AI',
    },
    {
      content: 'You betrayed him, and murdered him!',
      provider: 'AI',
    },
    {
      content: 'No. I am your father.',
      provider: 'Human',
    },
    {
      content: "No. That can't be. Nooooooooo",
      provider: 'AI',
    },
    {
      content: 'Search your feelings, you know it is true',
      provider: 'Human',
    },
  ],
}