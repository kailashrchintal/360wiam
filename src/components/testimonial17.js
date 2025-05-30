import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './testimonial17.css'

const Testimonial17 = (props) => {
  return (
    <div className="thq-section-padding">
      <div className="testimonial17-max-width thq-section-max-width">
        <div className="testimonial17-container10">
          <h2 className="thq-heading-2">
            {props.heading1 ?? (
              <Fragment>
                <span className="testimonial17-text28">
                  Client Testimonials
                </span>
              </Fragment>
            )}
          </h2>
          <span className="testimonial17-text11 thq-body-small">
            {props.content1 ?? (
              <Fragment>
                <span className="testimonial17-text35">
                  360WIAM has revolutionized the way we manage workforce
                  identity and access. Their solutions are top-notch and have
                  significantly enhanced our security measures.
                </span>
              </Fragment>
            )}
          </span>
        </div>
        <div className="thq-grid-2">
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div
                data-animated="true"
                className="thq-card testimonial17-card1"
              >
                <div className="testimonial17-container12">
                  <img
                    alt={props.author1Alt}
                    src={props.author1Src}
                    className="testimonial17-image1"
                  />
                  <div className="testimonial17-container13">
                    <strong className="thq-body-large">
                      {props.author1Name ?? (
                        <Fragment>
                          <span className="testimonial17-text34">Shradha</span>
                        </Fragment>
                      )}
                    </strong>
                    <span className="thq-body-small">
                      {props.author1Position ?? (
                        <Fragment>
                          <span className="testimonial17-text26">
                            CEO, Tech Solutions Inc.
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
                <span className="testimonial17-text14 thq-body-small">
                  {props.review1 ?? (
                    <Fragment>
                      <span className="testimonial17-text37">
                        We are extremely satisfied with the services provided by
                        360WIAM. Their team is highly skilled and professional,
                        delivering exceptional results.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div
                data-animated="true"
                className="thq-card testimonial17-card2"
              >
                <div className="testimonial17-container14">
                  <img
                    alt={props.author2Alt}
                    src={props.author2Src}
                    className="testimonial17-image2"
                  />
                  <div className="testimonial17-container15">
                    <strong className="thq-body-large">
                      {props.author2Name ?? (
                        <Fragment>
                          <span className="testimonial17-text31">
                            Sumani
                          </span>
                        </Fragment>
                      )}
                    </strong>
                    <span className="thq-body-small">
                      {props.author2Position ?? (
                        <Fragment>
                          <span className="testimonial17-text32">
                            CIO, Global Enterprises Ltd.
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
                <span className="testimonial17-text17 thq-body-small">
                  {props.review2 ?? (
                    <Fragment>
                      <span className="testimonial17-text27">
                        Working with 360WIAM has been a game-changer for our
                        organization. Their IAM solutions are cutting-edge and
                        have streamlined our authentication processes.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div
                data-animated="true"
                className="thq-card testimonial17-card3"
              >
                <div className="testimonial17-container16">
                  <img
                    alt={props.author3Alt}
                    src={props.author3Src}
                    className="testimonial17-image3"
                  />
                  <div className="testimonial17-container17">
                    <strong className="thq-body-large">
                      {props.author3Name ?? (
                        <Fragment>
                          <span className="testimonial17-text30">
                            Kailash
                          </span>
                        </Fragment>
                      )}
                    </strong>
                    <span className="thq-body-small">
                      {props.author3Position ?? (
                        <Fragment>
                          <span className="testimonial17-text29">
                            CTO, InnovateTech Co.
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
                <span className="testimonial17-text20 thq-body-small">
                  {props.review3 ?? (
                    <Fragment>
                      <span className="testimonial17-text25">
                        360WIAM&apos;s expertise in IAM is unparalleled. They
                        have provided us with tailored solutions that have
                        greatly improved our overall security posture.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div
                data-animated="true"
                className="thq-card testimonial17-card4"
              >
                <div className="testimonial17-container18">
                  <img
                    alt={props.author4Alt}
                    src={props.author4Src}
                    className="testimonial17-image4"
                  />
                  <div className="testimonial17-container19">
                    <strong className="thq-body-large">
                      {props.author4Name ?? (
                        <Fragment>
                          <span className="testimonial17-text36">
                            NagaSharan
                          </span>
                        </Fragment>
                      )}
                    </strong>
                    <span className="thq-body-small">
                      {props.author4Position ?? (
                        <Fragment>
                          <span className="testimonial17-text33">
                            Head of IT, SecureBank Inc.
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
                <span className="testimonial17-text23 thq-body-small">
                  {props.review4 ?? (
                    <Fragment>
                      <span className="testimonial17-text24">
                        We highly recommend 360WIAM for any organization looking
                        to enhance their IAM capabilities. Their team is
                        dedicated, knowledgeable, and always ready to assist.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Testimonial17.defaultProps = {
  review4: undefined,
  author3Alt: 'Image of Kailash',
  review3: undefined,
  author1Position: undefined,
  author3Src:
    'https://images.unsplash.com/photo-1571816119607-57e48af1caa9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0ODU2NTQ2OHw&ixlib=rb-4.1.0&q=80&w=1080',
  review2: undefined,
  heading1: undefined,
  author3Position: undefined,
  author1Src:
    'https://images.unsplash.com/photo-1580489944761-15a19d654956?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0ODU2NTQ2N3w&ixlib=rb-4.1.0&q=80&w=1080',
  author2Alt: 'Image of Sumani',
  author4Alt: 'Image of NagaSharan',
  author3Name: undefined,
  author2Name: undefined,
  author4Src:
    'https://images.unsplash.com/photo-1641312874336-6279a832a3dc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0ODU2NTQ2N3w&ixlib=rb-4.1.0&q=80&w=1080',
  author2Position: undefined,
  author4Position: undefined,
  author1Name: undefined,
  author1Alt: 'Image of Shradha',
  content1: undefined,
  author4Name: undefined,
  review1: undefined,
  author2Src:
    'https://images.unsplash.com/photo-1531854253260-44f0d06e3d26?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0ODU2NTQ2OHw&ixlib=rb-4.1.0&q=80&w=1080',
}

Testimonial17.propTypes = {
  review4: PropTypes.element,
  author3Alt: PropTypes.string,
  review3: PropTypes.element,
  author1Position: PropTypes.element,
  author3Src: PropTypes.string,
  review2: PropTypes.element,
  heading1: PropTypes.element,
  author3Position: PropTypes.element,
  author1Src: PropTypes.string,
  author2Alt: PropTypes.string,
  author4Alt: PropTypes.string,
  author3Name: PropTypes.element,
  author2Name: PropTypes.element,
  author4Src: PropTypes.string,
  author2Position: PropTypes.element,
  author4Position: PropTypes.element,
  author1Name: PropTypes.element,
  author1Alt: PropTypes.string,
  content1: PropTypes.element,
  author4Name: PropTypes.element,
  review1: PropTypes.element,
  author2Src: PropTypes.string,
}

export default Testimonial17
