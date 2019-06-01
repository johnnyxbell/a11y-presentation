import React from 'react'
import styled from '@emotion/styled'

const Img = styled.img`
 border-radius: 150px;
 border: 5px solid white;
`
const Profile = ({ image, width }) => {
  return (
    <Img width={width} src={image} alt={image} />
  )
}

export default Profile;