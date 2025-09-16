import { useState } from 'react'
import { useNavigate } from "react-router-dom";
import CircularText from '../components/react_bits/CircularText';
import RotatingText from '../components/react_bits/RotatingText';
import ScrollVelocity from '../components/react_bits/ScrollVelocity';
import CardSwap, { Card } from '../components/react_bits/CardSwap'
import ProfileCard from '../components/react_bits/ProfileCard'
import Header from '../components/Header';


export default function Home() {

  return (
    <>
      <div className='flex flex-col'>
        <ProfileCard
          name="Joël Guigli"
          title="Software Engineer"
          handle="jguigli"
          status="FastAPI & React"
          contactText="Contact Me"
          avatarUrl="./profil.png"
          // iconUrl="./42_Logo.svg.png"
          showUserInfo={true}
          enableTilt={true}
          enableMobileTilt={true}
          onContactClick={() => console.log('Contact clicked')}
        />
      <div>
        
      </div>
      </div>
    </>
  )
}