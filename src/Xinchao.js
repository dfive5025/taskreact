import React from "react";
import { data } from "./data";
import "./css/Xinchao.css";
import { Button } from "bootstrap";
import ScrollDemo from "./scrollok/scrollokdemo.js";
import Clock from "./Clock.js";
import LoginPage from "./loginpage/login.js";

const handleclick = () => {
  alert("vua thay đổi");
};

function handleok() {
  alert("ok");
}

function Xinchao(props) {
  return (
    <div>
      {/* <img src="images/myimage.png" alt="Project Image"> */}

      {/* <button onclick={() => alert("Button clicked")}>Click Me</button> */}

      {/* <button onClick={() => alert("Button clicked!")}>Click Me</button> */}

      <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
        <div class="container-fluid">
          <a
            class="navbar-brand"
            href="https://viblo.asia/p/usedispatch-useselector-va-nguoi-anh-connect-trong-redux-gGJ59QWj5X2"
          >
            Logo
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsibleNavbar"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="collapsibleNavbar">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a
                  class="nav-link"
                  href="https://viblo.asia/p/usedispatch-useselector-va-nguoi-anh-connect-trong-redux-gGJ59QWj5X2"
                >
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  href="https://viblo.asia/p/usedispatch-useselector-va-nguoi-anh-connect-trong-redux-gGJ59QWj5X2"
                >
                  Post
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  href="https://viblo.asia/p/usedispatch-useselector-va-nguoi-anh-connect-trong-redux-gGJ59QWj5X2"
                >
                  Link
                </a>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                >
                  Options
                </a>
                <ul class="dropdown-menu">
                  <li>
                    <a
                      class="dropdown-item"
                      href="https://viblo.asia/p/usedispatch-useselector-va-nguoi-anh-connect-trong-redux-gGJ59QWj5X2"
                    >
                      Link QuanTriMang
                    </a>
                  </li>
                  <li>
                    <a
                      class="dropdown-item"
                      href="https://viblo.asia/p/usedispatch-useselector-va-nguoi-anh-connect-trong-redux-gGJ59QWj5X2"
                    >
                      Công nghệ
                    </a>
                  </li>
                  <li>
                    <a
                      class="dropdown-item"
                      href="https://viblo.asia/p/usedispatch-useselector-va-nguoi-anh-connect-trong-redux-gGJ59QWj5X2"
                    >
                      Đời sống
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <h1>Hello, {props.name}</h1>
      <Clock></Clock>
      <img
        src="https://s.adroll.com/a/6VR/3GN/6VR3GNL4I5C5ZG6YPSF6O2.png"
        alt="hinhanh1" //demo image
      />

      <section className="product">
        <div className="container">
          <div className="row">
            {data.map((course, index) => {
              return (
                <div
                  className="col-xl-3 col-lg-4 col-md-6 col-sm-12 product-item"
                  key={index}
                >
                  <div className="card">
                    <img
                      src={course.urlImage}
                      className="card-img-top"
                      alt="anh"
                    />
                    <div className="card-body">
                      <h5 className="card-title">{course.courseName}</h5>
                      <h5 className="card-text">{course.description}</h5>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <LoginPage></LoginPage>

      <div className="login-ok">
        <p>LOGIN</p>
        <input
          type="email"
          placeholder="email"
          onFocus={() => {
            alert("vừa focus");
          }}
        ></input>{" "}
        <br></br>
        <input
          type="password"
          placeholder="password"
          onChange={handleclick}
        ></input>
        <br></br>
        <button onClick={handleok} className="btn_login">
          Đăng nhập
        </button>
      </div>

      <div className="scroll-container">
        <label>Nhập thông tin liên hệ: </label>
        <textarea id="message" name="massage" rows="1" cols="50"></textarea>
        <button onClick={handleok}>OK</button>
      </div>

      {/* <div className="flex-container">
        <div className="flex-item">Item1</div>
        <div className="flex-item">item2</div>
      </div> */}

      <div className="horizontal-scroll">
        <h2>Horizontal Scrollable List</h2>
        <ul className="horizontal-scroll-list">
          {data.map((course, index) => (
            <li key={index} className="horizontal-scroll-item">
              <img src={course.urlImage} alt={`Course ${index}`} />
            </li>
          ))}
        </ul>
      </div>

      <ScrollDemo />

      <div style={{ height: "100px", overflowX: "scroll" }}>
        <h2>Scrollable List</h2>
        <ul>
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
          <li>Item 4</li>
          <li>Item 5</li>
          <li>Item 6</li>
          <li>Item 7</li>
          <li>Item 8</li>
          <li>Item 9</li>
          <li>Item 10</li>
        </ul>
      </div>
    </div>
  );
}
export default Xinchao;
