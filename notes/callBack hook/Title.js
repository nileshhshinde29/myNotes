import React, { memo } from 'react'

function Title() {

    console.log("title")
  return (
    <div>Title</div>
  )
}

export default memo(Title);