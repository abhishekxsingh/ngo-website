/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import home from "../../assets/image.png";
import child from "../../assets/child1.png"
import Navbar from "../../common/Navbar/Navbar";
import Footer from "../../common/Footer/Footer";
import team1 from "../../assets/team1.png"
import team2 from "../../assets/team2.png"
import payiimg from "../../assets/payment-image.png"
// import storyimpact1 from "../../assets/story-impact.png"
// import storyimpact2 from "../../assets/story-impact.png"


import "./index.css";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="home-container">
        <div className="image-container">
          <img src={home} alt="home" className="home-image" />
          <div className="overlay">
            {/* <h1 className="main-title">E – TECHNO EDUCATIONAL AND RESEARCH SOCIETY</h1> */}
            {/* <p className="subtitle">“ BE A PART OF CHANGE “</p> */}
          </div>
          <div className="repeated-text">
            <p>BRINGING SMILES THROUGH EDUCATION AND EMPOWERMENT ✦</p>
            <p>BRINGING SMILES THROUGH EDUCATION AND EMPOWERMENT ✦</p>
            <p>BRINGING SMILES THROUGH EDUCATION AND EMPOWERMENT ✦</p>
          </div>
        </div>
        <div className="info-section">
          <div className="container">
            <div className="membership">
              <span>Click here to</span> <br />
              <a href="#" className="membership-link">
                Apply for the <strong>2024 Membership</strong>
              </a>
            </div>
            <button className="donate-button">DONATE NOW</button>
            <div className="lives-saved">
              <span className="big-text">10,000+</span> <br />
              <span className="small-text">Lives Saved</span>
            </div>
          </div>
        </div>
        <div className="content">
          <p>
            <strong>
              E-techno aims to foster unity, brotherhood, and harmony within the
              public
            </strong>
            , promoting national integration and opposing separatist forces in
            India. It intends to establish educational institutions, including
            digital and AI learning centers, boarding schools, paramedical and
            medical colleges, technical institutes, and vocational training centers
            across various regions.
          </p>
          <p>
            <strong>
              E-techno acts as a catalyst in the cycle of change, complementing and
              supporting non-profit efforts
            </strong>{" "}
            to achieve Sustainable Development Goals. We collaborate with
            like-minded institutions and individuals to implement high-impact
            programs that improve access, enhance quality, and bring about
            long-term behavioral change at the grassroots level for children.
          </p>
          <p>
            <strong>We have recently launched a Membership Program</strong> to
            enable our Fellows to live and work with us in any location, helping
            them contribute to and benefit the community.
          </p>
       </div>
          <div className="vision-container">
          <h1 className="vision-title">OUR VISION</h1>
          <p className="vision-text">
            “A happy, healthy, and creative child whose rights are protected and
            honoured in a society that is built on respect for dignity, justice,
            and equity for all.”
          </p>
        </div>
      </div>
      <div className="team-container">
      <h2 className="team-title">Meet Our Team</h2>
      <div className="team-members">
        <div className="team-member">
        <img src={team1} alt="Nand Kishore Mahato" className="team-photo max-w-full rounded-lg mx-auto"/>
          <div className="team-info">
            <h3 className="team-role">PRESIDENT</h3>
            <h4 className="team-name">NAND KISHORE MAHATO</h4>
            <p className="team-qualifications">
              <strong>EDUCATIONAL QUALIFICATION:</strong> AMIE(I) Mining
              Engineering, MA(Mathematics), B.Ed, Diploma in Software Engg,
              Diploma in French Language.
            </p>
            <p className="team-email">Nand.Mahato@etechnoedu.org</p>
          </div>
        </div>

        {/* Treasurer Section */}
        <div className="team-member">
          <img
            src={team2}
            alt="Jaba Mahato"
            className="team-photo"
          />
          <div className="team-info">
            <h3 className="team-role">TREASURER</h3>
            <h4 className="team-name">JABA MAHATO</h4>
            <p className="team-qualifications">
              <strong>EDUCATIONAL QUALIFICATION:</strong> BSc(Chemistry Hons),
              MSc(Chemistry), B.Ed.
            </p>
            <p className="team-email">Jaba.Mahato@etechnoedu.org</p>
          </div>
        </div>
      </div>
      </div>
      <div class="blocks">
        <div class="block">TAKING RESPONSIBILITY</div>
        <div class="block">MOBILISING POTENTIAL</div>
        <div class="block">INSPIRING COLLECTIVE ACTION</div>
      </div>
      <div className="help-section">
      <div className="donate-container">
        <div className="text-content">
          <h2>Donate to help India's children & their studies</h2>
          <button className="donate-btn">DONATE NOW</button>
        </div>
        <div className="image-content">
          <img
            src={child}
            alt=""
            className="help-image"
          />
        </div>
      </div>
     </div>
     <div className="Ques">
        <div className="content-box">
          <div className="box">
            <h3>What we do?</h3>
            <p>
              E-techno is dedicated to creating a brighter future for children in need. 
              We strive to ensure that every child has access to quality education, 
              proper nutrition, and a safe environment where they can explore, learn, and grow. 
              Through high-impact programs, we work at the grassroots level to enable positive, 
              long-term change in children’s lives. Your support and generosity are crucial in 
              helping us make this vision a reality.
            </p>
          </div>
          <div className="box">
            <h3>Why Children?</h3>
            <p>
              Children are the foundation of our nation’s future, and it is essential to provide 
              them with the tools they need to reach their full potential. E-techno is committed 
              to empowering children by ensuring access to quality education, good nutrition, and 
              a safe environment. By investing in children today, we are investing in a brighter 
              tomorrow for all.
            </p>
          </div>
          <div className="box">
            <h3>How can you help?</h3>
            <p>
              With your support, E-techno addresses the critical needs of children by working 
              with parents, teachers, communities, and governments. Together, we aim to change 
              behaviors and practices at the grassroots level and influence public policy, 
              creating an ecosystem that truly prioritizes children as the future of our nation. 
              Your involvement helps us build a world where every child has the opportunity to thrive.
            </p>
          </div>
        </div>
      </div>
        <div className="upi-payment">
  <div className="donation-container">
    <div className="image-section">
      <img
        src={payiimg }
        alt="Children smiling for the cause"
        className="donation-image"
      />
      <div className="image-text">
        <h1>We rise by lifting others</h1>
      </div>
    </div>


    <div className="form-section">
      <h2>Welcome to E-Techno donation, please fill out the form below. We can save the future.</h2>
      <form>
        <label for="donation-type">Choose a donation type</label>
        <select id="donation-type" name="donation-type">
          <option>Cost of education</option>
          <option>Nutrition support</option>
          <option>Healthcare</option>
        </select>

        <label>Choose a donation amount</label>
        <div className="donation-amount">
          <div>
            <input type="radio" id="amount-1000" name="amount" value="1000" checked />
            <label for="amount-1000">Rs.1,000</label>
          </div>
          <div>
            <input type="radio" id="amount-2000" name="amount" value="2000" />
            <label for="amount-2000">Rs.2,000</label>
          </div>
          <div>
            <input type="radio" id="amount-3000" name="amount" value="3000" />
            <label for="amount-3000">Rs.3,000</label>
          </div>
          <div>
            <input
              type="text"
              placeholder="Enter Custom Amount"
              name="custom-amount"
              className="custom-amount"
            />
          </div>
        </div>

        <label>Choose a donation frequency</label>
        <div className="donation-frequency">
          <div>
            <input type="radio" id="monthly" name="frequency" value="monthly" checked />
            <label for="monthly">Monthly</label>
          </div>
          <div>
            <input type="radio" id="annual" name="frequency" value="annual" />
            <label for="annual">Annual</label>
          </div>
          <div>
            <input type="radio" id="one-time" name="frequency" value="one-time" />
            <label for="one-time">One time</label>
          </div>
        </div>
        <div className="payment-options">
          <button type="button" className="payment-btn credit-card">Credit Card</button>
          <button type="button" className="payment-btn upi">UPI</button>
        </div>
      </form>
    </div>
  </div>

        </div>

      <div className="stories" style={{ display: 'flex', gap: '20px', padding: '20px' }}>
      {/* Left section */}
      <div style={{ flex: 1, backgroundColor: '#f4a261', padding: '20px', borderRadius: '8px', color: '#fff' }}>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>NEW DELHI</h2>
        <p>
          On a sultry May afternoon, 14-year-old <strong>Naaz Parveen</strong> stands with a notebook and a pen in
          her hands in the narrow lanes of Delhi’s Valmiki Lane. Like other kids her age, she has come back
          from school, where she attends classes on maths, science, languages, desh bhakti, and happiness.
        </p>
        <p>
          However, unlike them, she changes her uniform, and takes on a new avatar: that of a reporter with{' '}
          <strong>Balaknama</strong>, the world’s first newspaper run by street children, which highlights the issues
          faced by them. Parveen is one of the ten main reporters with the newspaper, which has published 112
          editions so far.
        </p>
        <p>
          Each edition carries about 40 news articles, written in Hindi, and some translated into English as well.
          About 90 other reporters spread across North India contribute inputs orally, which are written down by
          Parveen among others. Childhood Enhancement through Training and Action (CHETNA), a Delhi-based
          NGO, has been mentoring the newspaper’s run since 2003. About 10,000 copies of the newspaper are
          circulated, and many of them reach the homes of street children.
        </p>
      </div>

      {/* Right section */}
      <div style={{ flex: 1 }}>
        {/* Child Labour Section */}
        <div style={{ backgroundColor: '#e9c46a', padding: '20px', borderRadius: '8px', marginBottom: '20px', color: '#fff' }}>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Child Labour</h2>
          <p>
            As per Census 2011, the total child population in India in the age group (5–14) years is 259.6 million. Of these,
            10.1 million (3.9% of total child population) are working, either as ‘main worker’ or as ‘marginal worker’. In
            addition, more than 42.7 million children in India are out of school.
          </p>
          <p>
            However, the good news is that the incidence of child labour has decreased in India by 2.6 million between
            2001 and 2011. However, the decline was more visible in rural areas, while the number of child workers has
            increased in urban areas, indicating the growing demand for child workers in menial jobs. Child labour has
            different ramifications in both rural and urban India.
          </p>
          <p>
            Analyses of data from PLFS 2018/19 conducted as part of this report reveal that the estimated number of
            children in child labour in India ranged from 1.8 million (0.7 per cent of all children aged 5–17 years) using
            the national definition to 3.3 million (1.3 per cent of children).
          </p>
        </div>

        {/* Images */}
        <div style={{ display: 'flex', gap: '10px' }}>
          {/* <img
            src="path-to-image1.jpg"
            alt="Image 1"
            style={{ width: '50%', borderRadius: '8px', objectFit: 'cover' }}
          />
          <img
            src="path-to-image2.jpg"
            alt="Image 2"
            style={{ width: '50%', borderRadius: '8px', objectFit: 'cover' }}
          /> */}
        </div>
      </div>
      </div>


      <Footer />
    </>
  );
};

export default Home;
