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
        <Row rowId = '1' title='Upcoming' fetchURL={requests.fetchUpcoming}/>
        <Row rowId = '2' title='Top Rated' fetchURL={requests.fetchTopRated}/>
        <Row rowId = '3' title='Trending' fetchURL={requests.fetchTrending}/>
        <Row rowId = '4' title='Romance' fetchURL={requests.fetchRomanceMovies}/>
        <Row rowId = '5' title='Action' fetchURL={requests.fetchActionMovies}/>
        <Row rowId = '6' title='Comedy' fetchURL={requests.fetchComedyMovies}/>
        <Row rowId = '7' title='Documentaries' fetchURL={requests.fetchDocumentaries}/>
    </div>
  )
}

export default Landing