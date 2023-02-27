import './App.css';
import { Table} from 'react-bootstrap';
import data from './data.json';
import { useState } from 'react';

const App = () => {
  const [filteredData, setFilteredData] = useState(data.tracks.items)
  const [search, setSearch] = useState('')
  // Arial, Helvetica, sans-serif rgb(49 46 44)
  // const axios = require("axios");

  // const options = {
  //   method: 'GET',
  //   url: 'https://spotify23.p.rapidapi.com/playlist/',
  //   params: {id: '65ixRGJiSsVizr1xlq4MxP?si=04f1514da0c8434e'},
  //   headers: {
  //     'X-RapidAPI-Key': '8763a561d8mshf6ae4b4f9959681p1c9b01jsn9d938cd45b79',
  //     'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
  //   }
  // };
  
  // axios.request(options).then(function (response) {
  //   console.log(response.data);
  // }).catch(function (error) {
  //   console.error(error);
  // });
  // data.tracks.items.map((book, idx) => (
  //     // console.log(book.track.name, book.track.artists[0].name)

  // ));
  const handleChange = (event) => {
    event.preventDefault()
    setSearch(event.target.value)
    setFilteredData(data.tracks.items.filter(element => element.track.name.toLowerCase().includes(search.toLowerCase())))
  console.log(filteredData)
  }
  return (
    <div className='main'>
          <wow-image id="img_comp-kfs5fc5t" class="HlRz5e BI8PVQ" data-image-info="{&quot;containerId&quot;:&quot;comp-kfs5fc5t&quot;,&quot;displayMode&quot;:&quot;fill&quot;,&quot;targetWidth&quot;:76,&quot;targetHeight&quot;:110,&quot;isLQIP&quot;:false,&quot;imageData&quot;:{&quot;width&quot;:335,&quot;height&quot;:509,&quot;uri&quot;:&quot;8b1506_46cdd6f11cfa4dc5bb98b6fa60cf72e9~mv2.png&quot;,&quot;name&quot;:&quot;Hollywood%20House%20RIIKKA_edited.png&quot;,&quot;displayMode&quot;:&quot;fill&quot;,&quot;quality&quot;:{}}}"
    data-bg-effect-name="" data-has-ssr-src="" data-src="https://static.wixstatic.com/media/8b1506_46cdd6f11cfa4dc5bb98b6fa60cf72e9~mv2.png/v1/fill/w_95,h_138,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Hollywood%2520House%2520RIIKKA_edited.png"><img src="https://static.wixstatic.com/media/8b1506_46cdd6f11cfa4dc5bb98b6fa60cf72e9~mv2.png/v1/fill/w_95,h_138,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Hollywood%2520House%2520RIIKKA_edited.png"
    alt="Hollywood%20House%20RIIKKA_edited.png" srcSet="https://static.wixstatic.com/media/8b1506_46cdd6f11cfa4dc5bb98b6fa60cf72e9~mv2.png/v1/fill/w_76,h_110,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Hollywood%2520House%2520RIIKKA_edited.png 1x, https://static.wixstatic.com/media/8b1506_46cdd6f11cfa4dc5bb98b6fa60cf72e9~mv2.png/v1/fill/w_152,h_220,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Hollywood%2520House%2520RIIKKA_edited.png 2x" fetchpriority="high">
      </img></wow-image>
    <div className='yo'>
      <header>
        <div className='container'>
          <h1>Tracks on playlist</h1>
            <input onChange={handleChange}></input> filter by song name<br/>
     <Table striped>
      <tbody>
      {filteredData.map((book, idx) => (
          <tr key={idx}>
            <td>
            <h4>
              <div class="d-flex justify-content-between">
                <div>
                {book.track.name} by
                <div className='album'>{book.track.artists[0].name}</div>from album <div className='album'>{book.track.album.name}</div></div>
                <a href={book.track.album.external_urls.spotify}><img src={book.track.album.images[0].url} alt='album cover' height="200" width="200"></img>
                </a></div>
            </h4> 
            </td>
          </tr>
      ))}
      </tbody>
    </Table>

        </div>
      </header>
      
    </div>
    </div>
  );
}

export default App;
