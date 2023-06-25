import React from 'react'
import ReactDOM from 'react-dom/client';
import Hero from '../components/Hero';
import requests from '../utils/requests';
import Row from '../components/Row';
import NavbarSignUp from '../components/NavbarSignUp';


function Landing() {
  return (
    <div>
        <Hero />
        <Row id = '1' title='Upcoming' fetchURL={requests.fetchUpcoming}/>
        <Row id = '2' title='Top Rated' fetchURL={requests.fetchTopRated}/>
        <Row id = '3' title='Trending' fetchURL={requests.fetchTrending}/>
        <Row id = '4' title='Romance' fetchURL={requests.fetchRomanceRow}/>
        <Row id = '5' title='Action' fetchURL={requests.fetchActionRow}/>
        <Row id = '6' title='Comedy' fetchURL={requests.fetchComedyRow}/>
        <Row id = '7' title='Documentaries' fetchURL={requests.fetchDocumentaries}/>
    </div>
  )
}

export default Landing