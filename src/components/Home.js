import React from 'react'
import '../Stylize.css';
import swal from 'sweetalert'
import axios from 'axios'
import * as ClipboardJS from 'clipboard'

export default function Home() {
  const [url, setUrl] = React.useState('')
    React.useEffect(() => {
      new ClipboardJS('.btn');
    }, [url])
  const urlGen = async (file) => {
      const data = new FormData()
          data.append('file', file)
          data.append('upload_preset', 'nextCarter')
          data.append('cloud_name', 'dqwdpd8yh')
      await axios.post('https://api.cloudinary.com/v1_1/dqwdpd8yh/image/upload', data)
          .then(response => {
              setUrl(response.data.url)
          })
          .catch(error => console.error(error));
  }
    return (
        <div className="center">
        <form action="#">
          <div className="card animated fadeIn bounce">
            <h1><b>Gokul Codes</b></h1>
            <br />
            <div className="file-field input-field">
              <div className="btn">
                <span>Image</span>
                <input type="file" onChange={e => urlGen(e.target.files[0])} name="uploading" />
              </div>
              <div className="file-path-wrapper">
                <input className="file-path validate" type="text" />
              </div>
            </div><br />
            <input type="text" name="url" id="url" value={url} readOnly /><br/><br/>
            <button id="btn" className="bg-transparent hover:bg-purple-500 text-purple-700 font-semibold hover:text-white py-2 px-4 border border-purple-500 hover:border-transparent rounded" data-clipboard-action="copy" data-clipboard-target="#url" onclick={() => {swal("Hurei!",  "Link Copied", "success");}}>
              Copy
            </button>
          </div>
        </form>
      </div>
    )
}
