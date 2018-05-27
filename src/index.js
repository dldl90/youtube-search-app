import React, { PureComponent } from 'react'
import ReactDOM from 'react-dom'
import YTSearch from 'youtube-api-search'
import _ from 'lodash'

import SearchBar from './components/search_bar'
import VideoList from './components/video_list'
import VideoDetail from './components/video_detail'

const API_KEY = 'AIzaSyAi2issA38JwOiCrZqh3_7sbCRojXTtwHY'

// Create new componnet it should produce some HTMl
class App extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      videos: [],
      selectedVideo: null
    }

    this.videoSearch('dragonball z')
  }

  videoSearch(term) {
    YTSearch({key: API_KEY, term}, (videos) => {
      this.setState({ 
        videos: videos,
        selectedVideo: videos[0]
      })
    })
  }

  render() {
    const { videos, selectedVideo } = this.state
    const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300)

    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch} />
        <VideoDetail video={selectedVideo}/>
        <VideoList
          onVideoSelect={selectedVideo => this.setState({selectedVideo})}
          videos={videos} />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.querySelector('.container'))
