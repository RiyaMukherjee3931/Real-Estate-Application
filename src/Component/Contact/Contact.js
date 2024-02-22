import React from 'react'
import './Contact.css'
import {MdCall} from 'react-icons/md'
import {HiChatBubbleBottomCenter} from 'react-icons/hi2'
import {BsFillChatDotsFill} from 'react-icons/bs'

const Contact = () => {
  return (
    <section className="c-wrapper">
    <div className="paddings innerWidth flexCenter c-container">
      <div className="felxColStart c-left">
        <span className='orangeText'>Our Contact</span>
        <span className='primaryText'>Easy to Contact Us</span>
        <span className='secondaryText'>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, 
        making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia,  
        discovered the undoubtable source. </span>
        <div className="contactModes flexStart">
        <div className="flexColStart row">
         {/*First Mode*/} 
          <div className="flexColStart mode">
            <div className="flexStart">
              <div className="flexCenter icon">
                <MdCall size={25} />
              </div>
              <div className="flexColCenter detail">
                <span className="primaryText">Call</span>
                <span className='secondaryText'>758 584 398</span>
              </div>
            </div>
            <div className="flexCenter button">Call Now</div>
          </div>
          {/*Second Mode */}
          <div className="flexColStart mode">
            <div className="flexStart">
              <div className="flexCenter icon">
                <BsFillChatDotsFill size={25} />
              </div>
              <div className="flexColCenter detail">
                <span className="primaryText">Chat</span>
                <span className='secondaryText'>758 584 398</span>
              </div>
            </div>
            <div className="flexCenter button">Chat Now</div>
          </div>
          {/*Third Mode */}
          <div className="flexColStart mode">
            <div className="flexStart">
              <div className="flexCenter icon">
                <HiChatBubbleBottomCenter size={25} />
              </div>
              <div className="flexColCenter detail">
                <span className="primaryText">Video Call</span>
                <span className='secondaryText'>758 584 398</span>
              </div>
            </div>
            <div className="flexCenter button">Call Now</div>
          </div>

        </div>
        </div>
      </div>  

      {/*c-right*/}

      <div className="c-right">
      <div className ="image-container">
          <img src="main4.jpg" alt="" />
      </div>    
      </div> 
    </div>
    </section>   
  )
};

export default Contact
