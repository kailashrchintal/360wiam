import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import Navbar8 from '../components/navbar8'
import Hero17 from '../components/hero17'
import Features24 from '../components/features24'
import CTA26 from '../components/cta26'
import Features25 from '../components/features25'
import Pricing14 from '../components/pricing14'
import Steps2 from '../components/steps2'
import Testimonial17 from '../components/testimonial17'
import Contact10 from '../components/contact10'
import Footer4 from '../components/footer4'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>360wiam</title>
        <meta property="og:title" content="360wiam" />
      </Helmet>
      <Navbar8
        link1={
          <Fragment>
            <span className="home-text100">#home</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="home-text101">#about</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="home-text102">#services</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="home-text103">#contact</span>
          </Fragment>
        }
        page1={
          <Fragment>
            <span className="home-text104">Home</span>
          </Fragment>
        }
        page2={
          <Fragment>
            <span className="home-text105">About Us</span>
          </Fragment>
        }
        page3={
          <Fragment>
            <span className="home-text106">Services</span>
          </Fragment>
        }
        page4={
          <Fragment>
            <span className="home-text107">Contact Us</span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="home-text108">Get Started</span>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className="home-text109">Contact Us</span>
          </Fragment>
        }
        page1Description={
          <Fragment>
            <span className="home-text110">
              Learn more about our innovative IAM solutions.
            </span>
          </Fragment>
        }
        page2Description={
          <Fragment>
            <span className="home-text111">
              Discover the story behind 360WIAM and our mission.
            </span>
          </Fragment>
        }
        page3Description={
          <Fragment>
            <span className="home-text112">
              Explore the range of IAM services we offer to businesses.
            </span>
          </Fragment>
        }
        page4Description={
          <Fragment>
            <span className="home-text113">
              Get in touch with us for customized IAM solutions.
            </span>
          </Fragment>
        }
      ></Navbar8>
      <Hero17
        action1={
          <Fragment>
            <span className="home-text114">Main action</span>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className="home-text115">Secondary action</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text116">
              At 360WIAM, we redefine Identity &amp; Access Management (IAM) for
              the next generation, ensuring seamless, secure, and intelligent
              workforce authentication across diverse industries. From AI-driven
              security to automobile, telecom, and banking, our end-to-end
              solutions empower enterprises with cutting-edge IAM capabilities
              tailored to modern digital demands.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text117">
              Welcome to 360WIAM – The Future of Workforce Identity &amp; Access
              Management
            </span>
          </Fragment>
        }
      ></Hero17>
      <Features24
        feature1Title={
          <Fragment>
            <span className="home-text118">AI-Driven Security</span>
          </Fragment>
        }
        feature2Title={
          <Fragment>
            <span className="home-text119">Industry-Specific Solutions</span>
          </Fragment>
        }
        feature3Title={
          <Fragment>
            <span className="home-text120">Seamless Authentication</span>
          </Fragment>
        }
        feature1Description={
          <Fragment>
            <span className="home-text121">
              Utilize advanced artificial intelligence for proactive threat
              detection and prevention.
            </span>
          </Fragment>
        }
        feature2Description={
          <Fragment>
            <span className="home-text122">
              Tailored IAM solutions for automobile, telecom, banking, and other
              diverse industries.
            </span>
          </Fragment>
        }
        feature3Description={
          <Fragment>
            <span className="home-text123">
              Enable seamless and secure authentication processes for workforce
              access.
            </span>
          </Fragment>
        }
      ></Features24>
      <CTA26
        action1={
          <Fragment>
            <span className="home-text124">Get in Touch</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text125">
              Contact us today to learn more about our cutting-edge IAM
              solutions tailored to your industry.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text126">
              Ready to revolutionize your workforce IAM?
            </span>
          </Fragment>
        }
      ></CTA26>
      <Features25
        feature1Title={
          <Fragment>
            <span className="home-text127">AI-Driven Security</span>
          </Fragment>
        }
        feature2Title={
          <Fragment>
            <span className="home-text128">Industry-Specific Solutions</span>
          </Fragment>
        }
        feature3Title={
          <Fragment>
            <span className="home-text129">Seamless Authentication</span>
          </Fragment>
        }
        feature1Description={
          <Fragment>
            <span className="home-text130">
              Utilize advanced artificial intelligence to enhance security
              measures and protect workforce identities.
            </span>
          </Fragment>
        }
        feature2Description={
          <Fragment>
            <span className="home-text131">
              Tailored IAM solutions for diverse industries such as automobile,
              telecom, banking, and more.
            </span>
          </Fragment>
        }
        feature3Description={
          <Fragment>
            <span className="home-text132">
              Enable seamless and secure authentication processes for workforce
              access management.
            </span>
          </Fragment>
        }
      ></Features25>
      <Pricing14
        plan1={
          <Fragment>
            <span className="home-text133">Basic Plan</span>
          </Fragment>
        }
        plan2={
          <Fragment>
            <span className="home-text134">Advanced Plan</span>
          </Fragment>
        }
        plan3={
          <Fragment>
            <span className="home-text135">Enterprise Plan</span>
          </Fragment>
        }
        plan11={
          <Fragment>
            <span className="home-text136">Basic plan</span>
          </Fragment>
        }
        plan21={
          <Fragment>
            <span className="home-text137">Business plan</span>
          </Fragment>
        }
        plan31={
          <Fragment>
            <span className="home-text138">Enterprise plan</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text139">
              Choose the perfect plan for you
            </span>
          </Fragment>
        }
        content2={
          <Fragment>
            <span className="home-text140">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text141">Pricing plan</span>
          </Fragment>
        }
        plan1Price={
          <Fragment>
            <span className="home-text142">$99/month</span>
          </Fragment>
        }
        plan2Price={
          <Fragment>
            <span className="home-text143">$199/month</span>
          </Fragment>
        }
        plan3Price={
          <Fragment>
            <span className="home-text144">$499/month</span>
          </Fragment>
        }
        plan1Action={
          <Fragment>
            <span className="home-text145">Sign Up Now</span>
          </Fragment>
        }
        plan1Price1={
          <Fragment>
            <span className="home-text146">$200/yr</span>
          </Fragment>
        }
        plan1Yearly={
          <Fragment>
            <span className="home-text147">$999/year</span>
          </Fragment>
        }
        plan2Action={
          <Fragment>
            <span className="home-text148">Get Started</span>
          </Fragment>
        }
        plan2Price1={
          <Fragment>
            <span className="home-text149">$299/yr</span>
          </Fragment>
        }
        plan2Yearly={
          <Fragment>
            <span className="home-text150">$1999/year</span>
          </Fragment>
        }
        plan3Action={
          <Fragment>
            <span className="home-text151">Contact Sales</span>
          </Fragment>
        }
        plan3Price1={
          <Fragment>
            <span className="home-text152">$499/yr</span>
          </Fragment>
        }
        plan3Yearly={
          <Fragment>
            <span className="home-text153">$4999/year</span>
          </Fragment>
        }
        plan1Action1={
          <Fragment>
            <span className="home-text154">Get started</span>
          </Fragment>
        }
        plan1Yearly1={
          <Fragment>
            <span className="home-text155">or $20 monthly</span>
          </Fragment>
        }
        plan2Action1={
          <Fragment>
            <span className="home-text156">Get started</span>
          </Fragment>
        }
        plan2Yearly1={
          <Fragment>
            <span className="home-text157">or $29 monthly</span>
          </Fragment>
        }
        plan3Action1={
          <Fragment>
            <span className="home-text158">Get started</span>
          </Fragment>
        }
        plan3Yearly1={
          <Fragment>
            <span className="home-text159">or $49 monthly</span>
          </Fragment>
        }
        plan1Feature1={
          <Fragment>
            <span className="home-text160">Single User Access</span>
          </Fragment>
        }
        plan1Feature2={
          <Fragment>
            <span className="home-text161">Basic Security Features</span>
          </Fragment>
        }
        plan1Feature3={
          <Fragment>
            <span className="home-text162">Email Support</span>
          </Fragment>
        }
        plan2Feature1={
          <Fragment>
            <span className="home-text163">Multi-User Access</span>
          </Fragment>
        }
        plan2Feature2={
          <Fragment>
            <span className="home-text164">Advanced Security Features</span>
          </Fragment>
        }
        plan2Feature3={
          <Fragment>
            <span className="home-text165">24/7 Phone Support</span>
          </Fragment>
        }
        plan2Feature4={
          <Fragment>
            <span className="home-text166">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature1={
          <Fragment>
            <span className="home-text167">Customizable Access Controls</span>
          </Fragment>
        }
        plan3Feature2={
          <Fragment>
            <span className="home-text168">AI-Driven Security Solutions</span>
          </Fragment>
        }
        plan3Feature3={
          <Fragment>
            <span className="home-text169">Dedicated Account Manager</span>
          </Fragment>
        }
        plan3Feature4={
          <Fragment>
            <span className="home-text170">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature5={
          <Fragment>
            <span className="home-text171">Feature text goes here</span>
          </Fragment>
        }
        plan1Feature11={
          <Fragment>
            <span className="home-text172">Feature text goes here</span>
          </Fragment>
        }
        plan1Feature21={
          <Fragment>
            <span className="home-text173">Feature text goes here</span>
          </Fragment>
        }
        plan1Feature31={
          <Fragment>
            <span className="home-text174">Feature text goes here</span>
          </Fragment>
        }
        plan2Feature11={
          <Fragment>
            <span className="home-text175">Feature text goes here</span>
          </Fragment>
        }
        plan2Feature21={
          <Fragment>
            <span className="home-text176">Feature text goes here</span>
          </Fragment>
        }
        plan2Feature31={
          <Fragment>
            <span className="home-text177">Feature text goes here</span>
          </Fragment>
        }
        plan2Feature41={
          <Fragment>
            <span className="home-text178">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature11={
          <Fragment>
            <span className="home-text179">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature21={
          <Fragment>
            <span className="home-text180">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature31={
          <Fragment>
            <span className="home-text181">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature41={
          <Fragment>
            <span className="home-text182">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature51={
          <Fragment>
            <span className="home-text183">Feature text goes here</span>
          </Fragment>
        }
      ></Pricing14>
      <Steps2
        step1Title={
          <Fragment>
            <span className="home-text184">Initial Consultation</span>
          </Fragment>
        }
        step2Title={
          <Fragment>
            <span className="home-text185">Customized Solution Design</span>
          </Fragment>
        }
        step3Title={
          <Fragment>
            <span className="home-text186">
              Implementation &amp; Integration
            </span>
          </Fragment>
        }
        step4Title={
          <Fragment>
            <span className="home-text187">
              Continuous Support &amp; Monitoring
            </span>
          </Fragment>
        }
        step1Description={
          <Fragment>
            <span className="home-text188">
              We start by understanding your organization&apos;s IAM needs and
              challenges through a detailed consultation.
            </span>
          </Fragment>
        }
        step2Description={
          <Fragment>
            <span className="home-text189">
              Our team designs a tailored IAM solution that aligns with your
              specific requirements and industry standards.
            </span>
          </Fragment>
        }
        step3Description={
          <Fragment>
            <span className="home-text190">
              We seamlessly implement and integrate the IAM solution into your
              existing infrastructure, ensuring minimal disruption.
            </span>
          </Fragment>
        }
        step4Description={
          <Fragment>
            <span className="home-text191">
              Our experts provide ongoing support and monitoring to ensure the
              IAM system operates efficiently and securely.
            </span>
          </Fragment>
        }
      ></Steps2>
      <Testimonial17
        review1={
          <Fragment>
            <span className="home-text192">
              We are extremely satisfied with the services provided by 360WIAM.
              Their team is highly skilled and professional, delivering
              exceptional results.
            </span>
          </Fragment>
        }
        review2={
          <Fragment>
            <span className="home-text193">
              Working with 360WIAM has been a game-changer for our organization.
              Their IAM solutions are cutting-edge and have streamlined our
              authentication processes.
            </span>
          </Fragment>
        }
        review3={
          <Fragment>
            <span className="home-text194">
              360WIAM&apos;s expertise in IAM is unparalleled. They have
              provided us with tailored solutions that have greatly improved our
              overall security posture.
            </span>
          </Fragment>
        }
        review4={
          <Fragment>
            <span className="home-text195">
              We highly recommend 360WIAM for any organization looking to
              enhance their IAM capabilities. Their team is dedicated,
              knowledgeable, and always ready to assist.
            </span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text196">
              360WIAM has revolutionized the way we manage workforce identity
              and access. Their solutions are top-notch and have significantly
              enhanced our security measures.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text197">Client Testimonials</span>
          </Fragment>
        }
        author1Name={
          <Fragment>
            <span className="home-text198">John Doe</span>
          </Fragment>
        }
        author2Name={
          <Fragment>
            <span className="home-text199">Jane Smith</span>
          </Fragment>
        }
        author3Name={
          <Fragment>
            <span className="home-text200">Michael Johnson</span>
          </Fragment>
        }
        author4Name={
          <Fragment>
            <span className="home-text201">Sarah Williams</span>
          </Fragment>
        }
        author1Position={
          <Fragment>
            <span className="home-text202">CEO, Tech Solutions Inc.</span>
          </Fragment>
        }
        author2Position={
          <Fragment>
            <span className="home-text203">CIO, Global Enterprises Ltd.</span>
          </Fragment>
        }
        author3Position={
          <Fragment>
            <span className="home-text204">CTO, InnovateTech Co.</span>
          </Fragment>
        }
        author4Position={
          <Fragment>
            <span className="home-text205">Head of IT, SecureBank Inc.</span>
          </Fragment>
        }
      ></Testimonial17>
      <Contact10
        content1={
          <Fragment>
            <span className="home-text206">
              Have a question or need more information? Reach out to us using
              the contact details below.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text207">Contact Us</span>
          </Fragment>
        }
        location1={
          <Fragment>
            <span className="home-text208">Headquarters</span>
          </Fragment>
        }
        location2={
          <Fragment>
            <span className="home-text209">Support Center</span>
          </Fragment>
        }
        location1Description={
          <Fragment>
            <span className="home-text210">123 Main Street, City, Country</span>
          </Fragment>
        }
        location2Description={
          <Fragment>
            <span className="home-text211">
              456 Support Street, City, Country
            </span>
          </Fragment>
        }
      ></Contact10>
      <Footer4
        link1={
          <Fragment>
            <span className="home-text212">Home</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="home-text213">About Us</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="home-text214">Services</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="home-text215">Contact Us</span>
          </Fragment>
        }
        link5={
          <Fragment>
            <span className="home-text216">Careers</span>
          </Fragment>
        }
        termsLink={
          <Fragment>
            <span className="home-text217">Terms of Use</span>
          </Fragment>
        }
        cookiesLink={
          <Fragment>
            <span className="home-text218">Cookies Policy</span>
          </Fragment>
        }
        privacyLink={
          <Fragment>
            <span className="home-text219">Privacy Policy</span>
          </Fragment>
        }
      ></Footer4>
    </div>
  )
}

export default Home
