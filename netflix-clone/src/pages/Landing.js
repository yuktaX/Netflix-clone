import React from "react";
import Hero from "../components/Hero";
import requests from "../utils/requests";
import Row from "../components/Row";

function Landing() {
  return (
    <div>
      <Hero />
      <div>
        {/* <Row rowId = '0' title='Netflix Originals' fetchURL={requests.fetchNetflixOriginals}/> */}
        <Row rowId="1" title="Upcoming" fetchURL={requests.fetchUpcoming} />
        <Row rowId="2" title="Top Rated" fetchURL={requests.fetchTopRated} />
        <Row rowId="3" title="Trending" fetchURL={requests.fetchTrending} />
        <Row rowId="4" title="Romance" fetchURL={requests.fetchRomanceMovies} />
        <Row rowId="5" title="Action" fetchURL={requests.fetchActionMovies} />
        <Row rowId="6" title="Comedy" fetchURL={requests.fetchComedyMovies} />
        <Row
          rowId="7"
          title="Documentaries"
          fetchURL={requests.fetchDocumentaries}
        />
        <Row rowId="8" title="Horror" fetchURL={requests.fetchHorrorMovies} />
      </div>
    </div>
  );
}

export default Landing;
