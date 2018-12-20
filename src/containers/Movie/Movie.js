import React, { Component } from "react"
import "./movie.css"
import { NavBar } from './../../components/NavBar'
import { Footer } from './../../components/Footer'
import { Button, Card, CardBody, CardTitle, CardText } from 'mdbreact'

export default class Movie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie_id: this.props.match.params.movie_id,
      event_name: "",
      event_time: "",
      event_location: "",
      event_location_detail: "",
      event_info: "",
      event_img: null,
      show: false,
    }
  }

  render() {
    return (
      <div className="movie">
        <NavBar />
        <div className="movie-header">
          <div className="movie-header-inner">
            <div className="movie-img">
            
            </div>
            <div className="movie-info">
              <h2 className="movie-name">Tên movie</h2>
              <h3 className="movie-name-eng">Movie name</h3>
              <div className="movie-props">
                <div className="movie-prop star"></div>
                <div className="movie-prop imdb"></div>
                <div className="movie-prop limit"></div>
                <div className="movie-prop duration"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="movie-ctn">
          <div className="row info">
          <Card className="movie-info-card">
            <CardBody>
              <CardTitle>Thông tin</CardTitle>
              <hr />

              <h5>Trailer</h5>
              <iframe title="trailer"
                className="trailer-iframe"
                src="https://www.youtube.com/embed/WDkg3h8PCVU" 
                frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen>
              </iframe>

              <h5>Giới thiệu</h5>
              <CardText>
              {`Aquaman: Đế vương Atlantis (tên gốc tiếng Anh: Aquaman) là phim điện ảnh siêu anh hùng của Mỹ dựa trên nhân vật Aquaman của DC Comics [7]. Đây là phần phim thứ sáu thuộc DC Extended Universe, do James Wan đảm nhiệm vai trò đạo diễn, David Leslie Johnson-McGoldrick và Will Beall thực hiện phần kịch bản từ phần cốt truyện của Wan, Beall và Geoff Johns. Phim có sự tham gia diễn xuất của Jason Momoa trong vai nhân vật chính, cùng với Amber Heard, Willem Dafoe, Patrick Wilson, Dolph Lundgren, Yahya Abdul-Mateen II và Nicole Kidman vào các vai phụ. Đây cũng là bộ phim người đóng thứ ba có sự xuất hiện của nhân vật Aquaman, sau Batman đại chiến Superman: Ánh sáng công lý (2016) và Liên minh Công lý (2017), và cũng là phim điện ảnh đầu tiên có nội dung xoay quanh nhân vật này. Trong Aquaman: Đế vương Atlantis, Arthur Curry, người thừa kế của vương quốc dưới đáy biển Atlantis, phải thực hiện nghĩa vụ trị vì vương quốc của mình và trở thành một siêu anh hùng của cả hai thế giới dưới nước và trên bờ trong khi Orm, người em trai cùng mẹ khác cha của Arthur đang cố gắng hợp nhất bảy vương quốc để chống lại thế giới mặt đất.`}
              </CardText>

            </CardBody>
          </Card>
          </div>
        </div>

        <Footer />
      </div>
    )
  }
}