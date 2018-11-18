import React, { Component } from 'react';
import './App.css';
import Nav from "./comps/navbar";
import {TextField} from '@material-ui/core';
import MovieRow from './MovieRow.js';

import $ from 'jquery'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {}
  this.performSearch("avenger")
  }

  performSearch(searchTerm) {
    console.log("Perform search using moviedb")
    const urlString = "https://api.themoviedb.org/3/search/movie?api_key=1b5adf76a72a13bad99b8fc0c68cb085&query=" + searchTerm
    $.ajax({
      url: urlString,
      success: (searchResults) => {
        console.log("Fetched data successfully");
        console.log(searchResults.total_results);


        console.log(searchResults)
        const results = searchResults.results
        // console.log(results[0])

        var movieRows = []

        results.forEach((movie) => {
          movie.poster_src = "https://image.tmdb.org/t/p/w185" + movie.poster_path
          // console.log(movie.poster_path)
          const movieRow = <MovieRow key={movie.id} movie={movie}/>
          movieRows.push(movieRow)
        })


        this.setState({rows: movieRows})
        if(searchResults.total_results===0 && results.length===0){
        this.setState({fail:searchResults.total_results? "sorry":myFunction()})

        function myFunction() {

          setTimeout(function(){
            document.write("sorry!!!")
             window.location.reload() }, 3000);
      }

      }
      },
      error: (xhr, status, err) => {
        console.error("Failed to fetch data")
      }
    })
  }

  searchChangeHandler(event) {
    console.log(event.target.value)
    const boundObject = this
    const searchTerm = event.target.value
    boundObject.performSearch(searchTerm)
  }

  render() {
    return (
      <div>
      <Nav />
      {/* <PrimarySearchAppBar /> */}
        &nbsp; &nbsp;  &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp;  &nbsp; &nbsp;
        &nbsp; &nbsp;  &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp;  &nbsp; &nbsp;
        &nbsp; &nbsp;  &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp;  &nbsp; &nbsp;
        <TextField
          id="outlined-with-placeholder"
          label="Search Movie"
          placeholder="Enter movie name to search"
          variant="outlined"

          onChange={this.searchChangeHandler.bind(this)}
        />

       <br /> <br />

       <hr/>
        {this.state.rows}
        <hr/>
        {this.state.fail}

      </div>
    );
  }
}

export default App;
