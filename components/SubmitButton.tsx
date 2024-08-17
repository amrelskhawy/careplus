import React from 'react'
import { Button } from './ui/button'
import Image from 'next/image'

interface SubmitBtnProps {
  isLoading: boolean
  className?: string
  children?: React.ReactNode
}

export const SubmitButton = ({
isLoading, className, children
}: SubmitBtnProps) => {
  return (
    <Button
      type='submit'
      disabled={isLoading}
      className={className ?? "shad-primary-btn w-full"}
    >
      {isLoading ? (
        <div className='flex items-center gap-4'>
          <Image
            src="/assets/icons/loader.svg"
            width={24}
            height={24}
            alt="loader"
          />
          Loading ...
        </div>
      ) : children}
    </Button>
  )
}
