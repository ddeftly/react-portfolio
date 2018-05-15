import React from 'react';
import axios from 'axios';
import moment from 'moment';
import '../styles/components/MediumFeed.css'

export default class MediumFeed extends React.Component {
   state = {
    json: {},
    loadingState:false
  }
  componentWillMount() {
    this.fetchPosts().then(this.setPosts)
  }

  fetchPosts = () => axios.get(`https://cors.now.sh/https://us-central1-aaronklaser-1.cloudfunctions.net/medium?username=@David_Figueroa`)

  setPosts = ({ data }) => {
      const {Post} = data.payload.references;
      const posts = Object.values(Post).map(({ id, title, createdAt, virtuals, uniqueSlug }) => Object.assign({}, {
          title,
          createdAt,
          subtitle: virtuals.subtitle,
          image: virtuals.previewImage.imageId ? `https://cdn-images-1.medium.com/max/800/${virtuals.previewImage.imageId}` : null,
          url: `https://medium.com/@David_Figueroa/${uniqueSlug}`
      })
    )
    this.setState({
        json:posts.slice(0,4),
        loadingState:true
    })
  }

    render(){
        if (this.state.loadingState) {
            return(
                <div className='postContainer'>
                        {this.state.json.map((item, index) => (
                            <div id='post'>
                                <a href={item.url}><h2 style={{fontFamily:'Roboto',fontWeight:300}}>{item.title}</h2></a>
                                <h6 style={{position:'relative', bottom:'1rem', fontWeight:300, color:'#FF206E'}}>{moment(item.createdAt).format('MMM Do YYYY')}</h6>
                            </div>
                        ))}
                </div>
            )
        }
        else {
            return(
                <div className='postContainer'></div>
            )
        }
    }
}

