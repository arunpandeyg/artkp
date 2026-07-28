import React from 'react'
import { Button } from './ui/button'
import { HiOutlineTrash } from 'react-icons/hi2'

const RemoveBtn = () => {
  return (
    <Button variant="destructive" className="w-7 h-7 rounded-full">
      <HiOutlineTrash size={14} />
    </Button>
  )
}

export default RemoveBtn
