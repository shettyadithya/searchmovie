import React from 'react';
import Button from '@material-ui/core/Button';
import {Card,CardActions,CardContent,Typography} from "@material-ui/core";


class MovieRow extends React.Component {
  viewMovie() {
    // console.log("Trying to view movie")
    // console.log(this.props.movie.title)
    const url = "https://www.themoviedb.org/movie/" + this.props.movie.id
    window.location.href = url
  }

  render() {
    return(
    <div style={{
      backgroundImage:"url('15351.jpg')",
    }}>
     <table key={this.props.movie.id}>
    <tbody>
      <tr>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <Card>
      <CardContent>
        <td>

          <img alt="poster" width="120" src={this.props.movie.poster_src}/>
        </td>
        <td>

          <h3 style={{
            marginTop:-17,
          }}>{this.props.movie.title}</h3>
          <p>{this.props.movie.overview}</p>
          {/* <input type="button" onClick={this.viewMovie.bind(this)} value="View"/> */}
        <Button variant="outlined" onClick={this.viewMovie.bind(this)} value="View" >
          View
      </Button>

        </td>
        </CardContent>
      </Card>

      </tr>

    </tbody>

  </table>
  </div>
    )
  }
}

export default MovieRow