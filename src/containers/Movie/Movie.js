import React, { Component } from "react"
import "./movie.css"
import { NavBar } from './../../components/NavBar'
import { Footer } from './../../components/Footer'
import { Button, Card, CardBody, CardTitle, CardText } from 'mdbreact'
import { Navbar, NavbarBrand, NavbarNav, NavItem, NavLink, NavbarToggler, Collapse, Container } from 'mdbreact';
import { Form, Text, TextArea } from 'informed'
import Rating from 'react-rating'
import { Comment } from './Comment'
import API from "./../../services/apis"


export default class Movie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie_id: this.props.match.params.movie_id,
      movie: {},
      comments: [1,2,3,4,5,6],
      collapseID: [1,1,1,1,1,1,1,1,1,1],
      cines: []
      // cines: JSON.parse(`[{"cine_group_id":18789,"cine_group_name":"Beta Cineplex","list_crawl_group":[{"cine_id":126701,"cine_name":"Beta Đan Phượng","showtime":["09:00","11:20","12:00","12:50","15:40","16:30","17:10","19:45","20:30","21:15","22:10"]},{"cine_id":126661,"cine_name":"Beta Mỹ Đình","showtime":["09:00","10:30","11:10","12:00","13:15","14:00","14:45","16:00","17:30","18:45","20:15","21:00","21:40"]},{"cine_id":126654,"cine_name":"Beta Thanh Xuân","showtime":["08:30","09:00","09:45","11:15","12:00","12:30","14:15","14:45","15:15","17:00","17:30","18:00","19:45","20:15","20:45","21:15","22:30","23:00"]}]},{"cine_group_id":18788,"cine_group_name":"BHD Star Cineplex","list_crawl_group":[{"cine_id":126656,"cine_name":"BHD Star Phạm Ngọc Thạch","showtime":["09:50","10:20","11:20","11:50","12:30","13:10","14:30","15:10","15:20","17:50","19:20","20:30","22:00","22:20","22:45","23:20"]}]},{"cine_group_id":18784,"cine_group_name":"CGV Cinemas","list_crawl_group":[{"cine_id":124316,"cine_name":"CGV Aeon Long Biên","showtime":["09:10","09:45","10:25","11:20","11:50","12:15","13:10","14:15","14:50","15:20","16:05","17:10","17:45","18:25","19:05","19:50","20:10","20:35","21:05","21:30","22:10","22:50","23:10"]},{"cine_id":126651,"cine_name":"CGV Artemis Hà Nội","showtime":["09:30","10:30","12:10","13:35","14:30","14:55","16:20","17:20","17:50","19:10","19:55","20:15","20:40","21:55","23:05"]},{"cine_id":126677,"cine_name":"CGV Hà Nội Center Point","showtime":["09:45","11:20","12:30","15:15","19:10","20:10","22:00"]},{"cine_id":115264,"cine_name":"CGV Hồ Gươm Plaza","showtime":["09:05","09:55","11:20","11:50","12:40","13:25","14:05","14:35","15:25","16:50","17:20","19:35","20:05","20:30","21:40","22:20","22:50"]},{"cine_id":121799,"cine_name":"CGV IPH Hà Nội","showtime":["09:00","09:10","10:45","11:30","11:50","12:00","13:45","14:40","14:50","16:35","17:30","19:25","19:50","21:20","22:15","22:35"]},{"cine_id":126731,"cine_name":"CGV Machinco","showtime":["09:15","10:00","10:45","12:00","12:50","13:30","14:45","16:15","17:30","19:00","20:00","20:15","20:50","21:45","22:15","22:45","23:00"]},{"cine_id":16780,"cine_name":"CGV Mipec Tower","showtime":["10:10","12:10","13:20","15:05","15:30","16:15","18:10","19:20","20:20","20:45","21:00","22:05","22:10","23:35"]},{"cine_id":126652,"cine_name":"CGV Rice City","showtime":["09:05","11:05","12:00","13:55","14:40","16:45","17:30","19:35","20:15","20:30","21:45","22:30"]},{"cine_id":126690,"cine_name":"CGV Times City","showtime":["10:00","10:35","11:15","12:45","13:25","13:50","14:05","14:55","15:25","16:15","16:35","16:55","17:40","18:15","19:05","19:45","20:25","21:00","21:20","21:50","22:30"]},{"cine_id":126658,"cine_name":"CGV Tràng Tiền Plaza","showtime":["10:25","11:00","11:40","12:10","13:50","14:20","15:00","16:40","17:10","17:50","19:30","20:00","20:40","21:45","22:25","22:50"]},{"cine_id":126685,"cine_name":"CGV Trương Định Plaza","showtime":["10:30","11:30","13:20","14:20","15:30","17:05","18:30","19:20","20:00","21:15","22:25"]},{"cine_id":16779,"cine_name":"CGV Vincom Bà Triệu","showtime":["09:00","09:30","10:55","11:20","12:00","13:10","13:45","14:00","14:25","14:45","15:35","16:05","16:35","17:25","18:00","19:00","19:25","20:00","20:20","20:50","21:25","21:50","22:15","22:50","23:10"]},{"cine_id":126751,"cine_name":"CGV Vincom Bắc Từ Liêm","showtime":["09:55","11:50","14:20","15:00","15:35","16:50","17:50","19:30","20:10","20:40","22:20","22:45","23:00"]},{"cine_id":126695,"cine_name":"CGV Vincom Long Biên","showtime":["10:30","11:50","14:00","16:30","17:10","20:00","21:30"]},{"cine_id":124432,"cine_name":"CGV Vincom Nguyễn Chí Thanh","showtime":["09:00","09:35","10:15","11:00","13:50","14:20","15:40","16:45","17:15","19:40","20:00","20:00","20:45","22:35","23:00","23:15"]},{"cine_id":126691,"cine_name":"CGV Vincom Royal City","showtime":["10:05","10:15","11:00","12:20","13:00","13:15","13:25","13:50","15:05","16:00","16:15","16:40","17:15","17:50","18:10","18:45","19:10","19:30","20:05","20:35","21:00","21:30","22:00","22:20","22:40","23:20"]}]},{"cine_group_id":18783,"cine_group_name":"Galaxy Cinema","list_crawl_group":[{"cine_id":126647,"cine_name":"Galaxy MIPEC Long Biên","showtime":["09:30","11:30","12:45","14:15","14:45","15:30","17:00","18:15","19:45","20:30","21:00","21:30"]}]},{"cine_group_id":18785,"cine_group_name":"Lotte Cinema","list_crawl_group":[{"cine_id":16783,"cine_name":"Lotte Landmark","showtime":["09:00","09:30","11:00","12:30","14:00","15:30","17:00","18:30","20:00","21:30"]},{"cine_id":126711,"cine_name":"Lotte Long Biên","showtime":["09:00","09:40","10:10","12:00","12:40","15:00","15:40","18:00","18:40","20:00","20:30","21:00"]},{"cine_id":17365,"cine_name":"Lotte Hà Đông","showtime":["08:50","10:00","10:30","11:50","12:50","13:25","14:40","15:10","17:40","18:50","19:00","20:30","21:40","21:50"]},{"cine_id":126637,"cine_name":"Lotte Thăng Long","showtime":["08:40","11:30","14:20","14:50","17:10","18:00","19:30","20:00","21:00"]}]},{"cine_group_id":18786,"cine_group_name":"Platinum Cineplex","list_crawl_group":[{"cine_id":16784,"cine_name":"Platinum Garden Mall","showtime":["10:20","11:00","13:40","14:35","15:40","17:40","18:20","20:15","20:40","21:00"]}]},{"cine_group_id":0,"cine_group_name":"Khác","list_crawl_group":[{"cine_id":126659,"cine_name":"Fafim Cinema","showtime":["09:45","12:25","15:05","18:05","20:10"]},{"cine_id":122017,"cine_name":"Rạp Kim Đồng","showtime":["10:00","12:40","15:20","20:00","22:30"]},{"cine_id":17472,"cine_name":"Rạp Tháng 8","showtime":["09:15","11:45","14:15","16:45","19:15"]},{"cine_id":112952,"cine_name":"Trung Tâm Chiếu Phim Quốc Gia","showtime":["09:20","10:20","11:05","11:45","12:45","13:30","14:10","15:10","15:55","16:35","17:35","18:20","19:00","20:00","20:45","21:25","22:00","22:25","22:50","23:05"]}]}]`)
    }
  }

  validateRequired = (value) => {
    return (!value) ? 'This field is required' : null;
  }

  toggleCollapse = key => () => {
    this.setState(prev => ({
      [key]: !prev[key]
    }))
  }

  renderCines = () => {
    if (!this.state.cines) return null;
    return this.state.cines.map((cine, index) => (
      <Navbar className="movie-cine" color="cyan lighten-5" light>
        <NavbarBrand>{cine.cine_group_name}</NavbarBrand>
        <NavbarToggler onClick={this.toggleCollapse("hide"+cine.cine_group_id)} />
        <Collapse id={"hide"+cine.cine_group_id} isOpen={this.state["hide"+cine.cine_group_id]} navbar>
          <NavbarNav left>
            <NavItem>
              {this.renderCine(cine.list_crawl_group)}
            </NavItem>
          </NavbarNav>
        </Collapse>
      </Navbar>
    ))
  }

  renderCine = (cineGroup) => {
    return cineGroup.map((cine) => (
      <Navbar className="movie-cine-child" color="grey lighten-5" light>
        <NavbarBrand>{cine.cine_name}</NavbarBrand>
        <NavbarToggler onClick={this.toggleCollapse("hide"+cine.cine_id)} />
        <Collapse id={"hide"+cine.cine_id} isOpen={this.state["hide"+cine.cine_id]} navbar>
          <NavbarNav left>
            <NavItem className="showtime-container">
              {this.renderShowtime(cine.showtime)}
            </NavItem>
          </NavbarNav>
        </Collapse>
      </Navbar>
    ))
  }

  renderShowtime = (showtimes) => {
    const time = new Date().toTimeString().split(' ')[0];
    return showtimes.map((showtime) => (
      <a href="#"
        className={"movie-showtime" + (time < showtime ? "" : " ended")}>
        {showtime}
      </a>
    ))
  }

  fetchMovieById = () => {
    API.getMovieById(this.state.movie_id)
    .then((res) => {
      this.setState({movie: res})
    })
    .catch(err => console.log(err))
  }

  fetchMovieShowtime = () => {
    API.getMovieShowtime(this.state.movie_id)
    .then((res) => {
      console.log(res)
      this.setState({cines: res})
    })
    .catch(err => console.log(err))
  }

  componentDidMount = () => {
    this.fetchMovieById();
    this.fetchMovieShowtime();
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
              <h2 className="movie-name">{this.state.movie.name}</h2>
              <h3 className="movie-type">{this.state.movie.types}</h3>
              <div className="movie-props">
                <div className="movie-prop star">{this.state.movie.gmdb_rating}</div>
                <div className="movie-prop imdb">{this.state.movie.imdb_rating}</div>
                <div className="movie-prop limit">{this.state.movie.age_rated}</div>
                <div className="movie-prop duration">{this.state.movie.duration}</div>
              </div>
            </div>
          </div>
        </div>

        <div className="movie-ctn">
          <div className="row info">
          <Card className="movie-card">
            <CardBody>
              <CardTitle>Thông tin</CardTitle>
              <hr />

              <h5>🎥 Trailer</h5>
              <iframe title="trailer"
                className="trailer-iframe"
                src="https://www.youtube.com/embed/WDkg3h8PCVU" 
                frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen>
              </iframe>

              <h5>🎥 Giới thiệu</h5>
              <CardText>
              {/* {`Aquaman: Đế vương Atlantis (tên gốc tiếng Anh: Aquaman) là phim điện ảnh siêu anh hùng của Mỹ dựa trên nhân vật Aquaman của DC Comics [7]. Đây là phần phim thứ sáu thuộc DC Extended Universe, do James Wan đảm nhiệm vai trò đạo diễn, David Leslie Johnson-McGoldrick và Will Beall thực hiện phần kịch bản từ phần cốt truyện của Wan, Beall và Geoff Johns. Phim có sự tham gia diễn xuất của Jason Momoa trong vai nhân vật chính, cùng với Amber Heard, Willem Dafoe, Patrick Wilson, Dolph Lundgren, Yahya Abdul-Mateen II và Nicole Kidman vào các vai phụ. Đây cũng là bộ phim người đóng thứ ba có sự xuất hiện của nhân vật Aquaman, sau Batman đại chiến Superman: Ánh sáng công lý (2016) và Liên minh Công lý (2017), và cũng là phim điện ảnh đầu tiên có nội dung xoay quanh nhân vật này. Trong Aquaman: Đế vương Atlantis, Arthur Curry, người thừa kế của vương quốc dưới đáy biển Atlantis, phải thực hiện nghĩa vụ trị vì vương quốc của mình và trở thành một siêu anh hùng của cả hai thế giới dưới nước và trên bờ trong khi Orm, người em trai cùng mẹ khác cha của Arthur đang cố gắng hợp nhất bảy vương quốc để chống lại thế giới mặt đất.`} */}
              {this.state.movie.description}
              </CardText>

              <h5>🎥 Thể loại</h5>
              <CardText>
                {/* {`Kinh dị`} */}
                {this.state.movie.types}
              </CardText>

              <h5>🎥 Các diễn viên chính</h5>
              <CardText>
                {/* {`Alan walker, Truong Anh Quoc`} */}
                {this.state.movie.main_actors}
              </CardText>
            </CardBody>
          </Card>

          <Card className="movie-card">
            <CardBody>
              <CardTitle>Lịch chiếu</CardTitle>
              <hr />
              {this.renderCines()}

            </CardBody>
          </Card>

          <Card className="movie-card">
            <CardBody>
              <CardTitle>Bình chọn, đánh giá</CardTitle>
              <hr />

              <Form className="rating-form"
                onSubmit={this.onSubmit}>
              {({ formState }) => (
                <div>
                  <h5>Đánh giá của bạn</h5>
                  <Rating 
                    className="rating-stars"
                    emptySymbol="fa fa-star-o fa-2x"
                    fullSymbol="fa fa-star fa-2x"
                  />
                  <Text type="text" field="name"
                    placeholder=" Tên của bạn ..." 
                    className={"rate-form-input" + (formState.errors.name ? " error" : "")}
                    validate={this.validateRequired}/>
                  
                  <Text type="text" field="email"
                    placeholder=" Email ..." 
                    className={"rate-form-input" + (formState.errors.email ? " error" : "")}
                    validate={this.validateRequired}/>
                  
                  <TextArea field="comment"
                    placeholder=" Bình luận ..." 
                    className={"rate-form-input" + (formState.errors.comment ? " error" : "")}
                    validate={this.validateRequired}/>

                  <Button color="yellow" type="submit">Gửi bình luận</Button>
                </div>
                )}
              </Form>
              <hr />

              {
                this.state.comments.map((data) => (
                  <Comment />
                ))
              }
              
            </CardBody>
          </Card>
          </div>
        </div>

        <Footer />
      </div>
    )
  }
}