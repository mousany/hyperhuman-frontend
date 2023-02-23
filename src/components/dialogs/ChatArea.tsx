import {
  Box,
  Card,
  CardBody,
  Heading,
  propNames,
  Text,
  VStack,
} from '@chakra-ui/react'
import ChatBubble from '@/components/dialogs/ChatBubble'
import { Sentence } from '@/models/task/detail'
import styles from '@/styles/dialogs.module.css'
import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'

interface Props {
  history: Sentence[]
  recommend?: string
  hasInput?: boolean
  children?: React.ReactNode
  triggerScroll?: number
}

export default function ChatArea(props: Props) {
  const messageEnd = React.createRef<HTMLDivElement>()
  const childrenRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messageEnd.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    if (props.triggerScroll) {
      scrollToBottom()
    }
  }, [props.triggerScroll])

  useEffect(() => {
    scrollToBottom()
  }, [props.history, props.recommend])

  const [bubbleWrapperHeight, setBubbleWrapperHeight] = useState(448 - 40)
  useLayoutEffect(() => {
    if (childrenRef.current) {
      let heightValue = 448 - childrenRef.current.clientHeight
      if (heightValue < 0 || heightValue > 448) {
        heightValue = 448 - 40
      }
      console.log('Set to ', heightValue, 'px')
      console.log('Get from ', childrenRef.current.clientHeight, 'px')
      setBubbleWrapperHeight(heightValue)
    }
  }, [childrenRef.current, props.history, props.recommend])

  return (
    <Box>
      <Text mt={5} className={styles['chat-area-card-heading']}>
        Dialog
      </Text>
      <Box className={styles['chat-area-card']}>
        <Box
          height={bubbleWrapperHeight}
          className={`${styles['chat-bubble-wrapper']} ${styles['scrollbar-thick']}`}
        >
          {props.history.map((sentence, index) => {
            return (
              <ChatBubble
                key={index}
                message={sentence.content}
                type={sentence.provider}
              />
            )
          })}
          <Box
            className={styles['chat-bubble-placeholder']}
            ref={messageEnd}
          ></Box>
        </Box>
        {props.hasInput ? (
          <Box width="100%" ref={childrenRef}>
            {props.children}
          </Box>
        ) : null}
      </Box>
    </Box>
  )
}