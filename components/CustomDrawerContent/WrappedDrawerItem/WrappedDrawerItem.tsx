import { DrawerItem } from '@react-navigation/drawer'
import React from 'react'

const WrappedDrawerItem = (props: any) => {
  return (
   <>
    <DrawerItem {...props}/>
   </>
  )
}

export default WrappedDrawerItem
