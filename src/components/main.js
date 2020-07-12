import React from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      naatTitle:'',
      naatKhwanName:'',
      naatVideo:'',
      naatAudio:'',
      naatLyrics:'',
      audioUpload: false,
      videoUpload: false,
      lyricsUpload: false,
    };
  }
  uploadCheck(e) {
    this.setState({ [e]: true });
  }
  closeUpload(e) {
    this.setState({ [e]: false });
  }
  upload(e){
    const {naatTitle,naatKhwanName,naatLyrics,naatVideo,naatAudio}= this.state
    let obj = {
      naatTitle,
      naatKhwanName
    }
    console.log(obj)
    this.setState({
      naatTitle:'',
      naatKhwanName:''
    })
  }
  render() {
    return (
      <div>
        <header className="App-header">
          <div className="container">
            <div className="row mb-5 mt-5">
              <div className="col-md-6">
                <p
                  style={{
                    fontSize: "2em",
                  }}
                >
                  Naat Collection
                </p>
              </div>
              <div className="col-md-6">
                <input
                value={this.state.naatTitle}
                onChange={(e)=>this.setState({naatTitle:e.target.value})}
                  className="naatTitle"
                  placeholder="Click to Add Naat Title"
                />
                <br />
                <input
                value={this.state.naatKhwanName}
                 onChange={(e)=>this.setState({naatKhwanName:e.target.value})}
                  className="inp"
                  placeholder="Click to add Naat Khwan Name"
                />
              </div>
            </div>
            <hr className="mb-3" />
            <div className="row p-5">
              <div className="col-md-4 text-center">
                <div>
                  <button
                    onClick={(e) => this.uploadCheck("audioUpload")}
                    className="btnUpload"
                  >
                    Audio
                  </button>
                  {this.state.audioUpload ? (
                    <button
                      className="closebtn"
                      onClick={(e) => this.closeUpload("audioUpload")}
                    >
                      <i class="fas fa-times"></i>
                    </button>
                  ) : (
                    false
                  )}
                </div>
                {this.state.audioUpload ? (
                  <div>
                    <label className="fileDisplay" for="audio">
                      <i class="fas fa-microphone-alt"></i>
                    </label>
                    <input id="audio" className="file" type="file" />
                  </div>
                ) : (
                  false
                )}
              </div>
              <div className="col-md-4 text-center">
                <div>
                  <button
                    onClick={(e) => this.uploadCheck("videoUpload")}
                    className="btnUpload"
                  >
                    Video
                  </button>
                  {this.state.videoUpload ? (
                    <button
                      onClick={(e) => this.closeUpload("videoUpload")}
                      className="closebtn"
                    >
                      <i class="fas fa-times"></i>
                    </button>
                  ) : (
                    false
                  )}
                </div>
                {this.state.videoUpload ? (
                  <div>
                    <label className="fileDisplay" for="Lyrics">
                      <i class="fas fa-video"></i>
                    </label>
                    <input id="Lyrics" className="file" type="file" />
                  </div>
                ) : (
                  false
                )}
              </div>
              <div className="col-md-4 text-center">
                <div>
                  <button
                    onClick={(e) => this.uploadCheck("lyricsUpload")}
                    className="btnUpload"
                  >
                    Lyrics
                  </button>
                  {this.state.lyricsUpload ? (
                    <button
                      onClick={(e) => this.closeUpload("lyricsUpload")}
                      className="closebtn"
                    >
                      <i class="fas fa-times"></i>
                    </button>
                  ) : (
                    false
                  )}
                </div>
                {this.state.lyricsUpload ? (
                  <div>
                    <label className="fileDisplay" for="video">
                      <i class="fas fa-file-upload"></i>
                    </label>
                    <input id="video" className="file" type="file" />
                  </div>
                ) : (
                  false
                )}
              </div>
            </div>
            <hr className="mb-3" />
          </div>
          <div className="mb-5">
            <button onClick={(e)=>this.upload(e)} className="btnAdd">+</button>
          </div>
          <div
            className="container-fluid"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
          >
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <p>Abdul Basit</p>
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>
    );
  }
}
export default Dashboard;
