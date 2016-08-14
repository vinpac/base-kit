import React, { Component } from 'react'
import Counter from '../Counter';

export default class App extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="cover" style={{backgroundImage: 'url(https://i1.sndcdn.com/visuals-000002273612-I1fFbG-t1240x260.jpg)'}}></div>
          <div className="margin-top-sm clearfix">
            <button className="btn btn-sm btn-outline-primary margin-right-sm">Like</button>
            <button className="btn btn-sm btn-outline-primary">Comment</button>
            <button className="btn btn-sm btn-accent right margin-left-sm">Report</button>
            <button className="btn btn-sm btn-outline-primary right">Following</button>
          </div>
          <hr/>
          <article className="margin-top-lg container-md">
            <h1 className="text-light">Some not so important things</h1>
            <h5 className="text-muted text-normal">Yet important</h5>
            <br/>
            <p>Despite turbulence and other conditions keeping airplanes off-course 90 percent of flight time, most flights arrive in the correct destination at the intended time.</p>
            <p>The reason for this phenomenon is quite simple — through air traffic control and the inertial guidance system, pilots are constantly course-correcting. When immediately addressed, these course corrections are not hard to manage. When these course corrections don’t regularly happen, catastrophe can result.</p>
            <p>For example, in 1979, a passenger jet with 257 people on board left New Zealand for a sightseeing flight to Antarctica and back. However, the pilots were unaware that someone had altered the flight coordinates by a measly two degrees, putting them 28 miles east of where they assumed to be.</p>
            <p>Approaching Antarctica, the pilots descended to give the passengers a view of the brilliant landscapes. Sadly, the incorrect coordinates had placed them directly in the path of the active volcano, Mount Erebus.</p>
            <br/>
            <div className="container-sm margin-bottom margin-top-md">
              <h2 className="text-light margin-bottom">Log in to your account</h2>
              <label htmlFor="">Email</label>
              <input type="text" className="input"/>
              <label htmlFor="">Password</label>
              <input type="text" className="input"/>
              <button className="btn btn-primary fill-width">Entrar</button>
            </div>
            <br/>
            <h1 className="text-light">Some other things</h1>
            <p>Despite turbulence and other conditions keeping airplanes off-course 90 percent of flight time, most flights arrive in the correct destination at the intended time.</p>
            <img src="https://67.media.tumblr.com/891dca6dad58b1be8ed5e9c17c9abd3c/tumblr_obtfdpSpfU1s72v9ao1_540.jpg" alt="" className="fill-width"/>
          </article>
        </div>
        <footer className="footer">
          <div className="container">
            <div className="col-3">
              <ul className="anchor-list">
                <li className="header">Desenvolvedores</li>
                <li><a href="">Instalar</a></li>
                <li><a href="">Dispositivos móveis</a></li>
                <li><a href="">Preços</a></li>
                <li><a href="">Business</a></li>
                <li><a href="">Enterprise</a></li>
                <li><a href="">Tour</a></li>
              </ul>
            </div>
            <div className="col-3">
              <ul className="anchor-list">
                <li class="header">About us</li>
                <li><a href="">Dropbox Blog</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Branding</a></li>
                <li><a href="">News</a></li>
                <li><a href="">Jobs</a></li>
              </ul>
            </div>
            <div className="col-3">
              <ul className="anchor-list">
                <li class="header">Support</li>
                <li><a href="">Help Center</a></li>
                <li><a href="">Contact us</a></li>
                <li><a href="">Copyright</a></li>
                <li><a href="">Cookies</a></li>
                <li><a href="">Privacy & Terms</a></li>
              </ul>
            </div>
            <div className="col-3">
              <ul className="anchor-list">
                <li class="header">Community</li>
                <li><a href="">Referrals</a></li>
                <li><a href="">Forum</a></li>
                <li><a href="">Twitter</a></li>
                <li><a href="">Facebook</a></li>
                <li><a href="">Developers</a></li>
              </ul>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}
