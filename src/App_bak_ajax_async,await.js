import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';

class App extends Component
{

    state = {}

    //영화 정보 목록   https://yts.ag/api#list_movies

    componentDidMount() {
    /*
        //fetch : json type URL 불러오는거???
        //console.log(fetch('https://yts.am/api/v2/list_movies.json?sort_by=rating'))
        //fetch('https://yts.am/api/v2/list_movies.json?sort_by=like_count')
            fetch('https://yts.am/api/v2/list_movies.json?sort_by=like_count')
            //위에 코드를 실행 하고 나서 아래를 해라
            //.then(response => console.log(response))
            //reponse 체크 (json)
            .then(response => response.json())
            //.then(json => console.log('mount_json:',json))
            .then(json => json.data.movies)
            .then(json => console.log('mount_json_DATA:',json))
            //로그 확인


            //근데 에러가 나면 잡아라
            //.catch(err => console.log(err))
            //과거 자바스크립트
            .catch(function(err){
                console.log(err)
            })
    */
        this._getMovies();
    }


    _renderMovies = () => {
        const movies = this.state.movies.map ((movie, index) => {
            console.log('movies:',movies)
            return <Movie title={movie.title} poster={movie.large_cover_image} key={index}/>
            })
        return movies
        }


    _getMovies = async () => {
        const movies = await this._callApi()
        console.log('_getMovies',movies)
        this.setState({
            movies
            })
    }

    _callApi = () => {
            //console.log('fetch', fetch( 'https://yts.am/api/v2/list_movies.json?sort_by=rating'))
            return fetch('https://yts.am/api/v2/list_movies.json?sort_by=rating')
            //위에 코드를 실행 하고 나서 아래를 해라
            //.then(response => console.log('_callAPI_log:',response))
            //reponse 체크 (json)
           .then(response => response.json())
            //로그 확인
            .then(json => json.data.movies)
  //          .then(json => console.log('mount_json_DATA:',json))
            //근데 에러가 나면 잡아라
            //.catch(err => console.log(err))
            //과거 자바스크립트
            .catch(err => console.log(err))
    }

  render() {
    return (
      <div className="App">
          {this.state.movies ? this._renderMovies() : 'Loding'}
      </div>
    );
  }
}

export default App;
