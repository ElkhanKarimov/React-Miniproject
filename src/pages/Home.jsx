import React from 'react'
import Abunelik from '../components/Abunelik/Abunelik'
import Bizden from '../components/Bizden/Bizden'
import Creator from '../components/Creator/Creator'
import Destek from '../components/Destek/Destek'
import Magaza from '../components/Magaza/Magaza'
import Map from '../components/Map/Map'
import Section from '../components/Section/Section'
import Suallar from '../components/Suallar/Suallar'
import Top from '../components/Top/Top'



const Home = () => {
  return (
    <div>
      <Section/>
      <Creator/>
      <Top/>
      <Destek/>
      <Magaza/>
      <Abunelik/>
      <Suallar/>
      <Bizden/>
      <Map/>
    </div>
  )
}

export default Home