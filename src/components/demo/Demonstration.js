import React from 'react';
import cx from 'classnames'

import Slide, { SlideBody, SlideNextButton, SlidePreviousButton } from '../base/Slide'

const Demonstration = () => {
  return (
    <div className="">
      <div className="container section-padding">
        <h1 className="text-weight-light sp-xs-bottom-2 text-accent">Forms</h1>
        <div className="row">
          <div className="col-md-4">
            <h4 className="text-weight-light text-muted sp-xs-bottom-2">Normal input</h4>
            <input type="text" className="input" placeholder="Email"/>
            <input type="password" className="input sp-xs-top-1" placeholder="Password"/>
            <button className="btn btn-outline-accent sp-xs-top-1 fill-width sp-xs-bottom-2">Login</button>

          </div>
          <div className="col-md-4">
            <h4 className="text-weight-light text-muted sp-xs-bottom-2">Input group</h4>
            <div className="form-group">
              <div className="input-group">
                <span className="input-group-addon">
                  @
                </span>
                <input type="text" className="input" placeholder="Search for..." />
                <span className="input-group-btn">
                  <button className="btn btn-outline-accent" type="button">Continue</button>
                </span>
              </div>
              <span className="input-subtext">Invalid email</span>
            </div>
          </div>
          <div className="col-md-4">
            <h4 className="text-weight-light text-muted sp-xs-bottom-2">Checkbox and Radio</h4>
            <label>
              <input type="checkbox" className="input sp-xs-right-2"/>
              <span>I agree with <a href="">Terms</a></span>
            </label>
            <div className="sp-xs-top-1">
              <label className="sp-xs-right-2">
                <input name="teste" type="radio" className="input sp-xs-right-2"/>
                <span>Male</span>
              </label>
              <label className="sp-xs-right-2">
                <input name="teste" type="radio" className="input sp-xs-right-2"/>
                <span>Female</span>
              </label>
            </div>
          </div>
        </div>
        <div className="d-none">
          <h1 className="text-weight-light sp-xs-top-3 sp-xs-bottom-2 text-accent">Slide</h1>
          <div className="row">
            <div className="col-md-12">
              <Slide className="slide-absolute">
                <SlidePreviousButton>
                  <i className="fa fa-angle-left" />
                </SlidePreviousButton>
                <SlideBody>
                {
                  [...Array(15).keys()].map(i => {
                    return (
                      <div
                        key={i}
                        className={cx("slide-item", {
                        'bg-primary': i % 3 === 0,
                        'bg-success': i % 3 === 1,
                        'bg-warning': i % 3 === 2,
                      })}>
                        { i }
                      </div>
                    )
                  })
                }
                </SlideBody>
                <SlideNextButton>
                  <i className="fa fa-angle-right" />
                </SlideNextButton>
              </Slide>
            </div>
          </div>
        </div>

        { /* == Card ==*/ }
        <div>
          <h1 className="text-weight-light sp-xs-top-3 sp-xs-bottom-2 text-accent">Cards</h1>
          <div className="row sp-xs-bottom-2">
            <div className="col-md-4">
              <div className="card">
                <div className="card-header">
                  Featured
                </div>
                <div className="card-block">
                  <h4 className="card-title">Special title treatment</h4>
                  <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                  <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
                <div className="list">
                  <div className="list-item">
                    Item
                  </div>
                  <a className="list-item list-item-action">
                    Item
                  </a>
                  <div className="list-item">
                    Item
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card card-block">
                <h4 className="card-title">Card title</h4>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-outline-primary card-link">Another link</a>
                <a href="#" className="card-link">Card link</a>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="card">
                <div className="card-header">
                  Featured
                </div>
                <div className="card-block">
                  <h4 className="card-title">Special title treatment</h4>
                  <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                  <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
                <div className="list">
                  <div className="list-item">
                    Item
                  </div>
                  <div className="list-item">
                    Item
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        { /* == Table == */}
        <h1 className="text-weight-light sp-xs-top-3 sp-xs-bottom-2 text-accent">Table</h1>
        <div className="row">
          <div className="col-xs-12">
            <table className="table table-radius">
              <thead className="tr-accent">
                <tr>
                  <th>Product</th>
                  <th>Quantity</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-grey">
                  <td>Item</td>
                  <td>1</td>
                  <td>R$480</td>
                </tr>
                <tr>
                  <td>Item</td>
                  <td>1</td>
                  <td>R$480</td>
                </tr>
                <tr className="bg-grey">
                  <td>Item</td>
                  <td>1</td>
                  <td>R$480</td>
                </tr>
                <tr>
                  <td>Item</td>
                  <td>1</td>
                  <td>R$480</td>
                </tr>
              </tbody>
              <tbody>
                <tr>
                  <td><span className="text-weight-semibold">Subtotal</span></td>
                  <td></td>
                  <td>R$480</td>
                </tr>
                <tr>
                  <td colSpan="2"><span className="text-weight-semibold">Frete</span></td>
                  <td>R$64</td>
                </tr>
                <tr className="bg-grey">
                  <td colSpan="2"><span className="text-weight-semibold">Total</span></td>
                  <td>R$480</td>
                </tr>
                <tr>
                  <td colSpan="2"><span className="text-weight-semibold">Balance</span></td>
                  <td>R$10</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
};

Demonstration.displayName = 'Demonstration';

export default Demonstration;
