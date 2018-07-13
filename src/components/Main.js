import React from 'react'
import Link from 'gatsby-link'

import pic01 from '../images/admirals.jpg'
import pic02 from '../images/navigator.jpg'
import pic03 from '../images/armory.jpg'
import frig1 from '../images/armory/frig1.png'
import frig2 from '../images/armory/frig2.png'
import ray1 from '../images/armory/ray1.png'
import ray2 from '../images/armory/ray2.png'
import ray3 from '../images/armory/ray3.png'
import ray4 from '../images/armory/ray4.png'
import ray5 from '../images/armory/ray5.png'
import ray6 from '../images/armory/ray6.png'
import ray7 from '../images/armory/ray7.png'
import ray8 from '../images/armory/ray8.png'
import tank from '../images/admirals/tank.png'
import kinet from '../images/admirals/kinet.png'
import att from '../images/admirals/att.png'

class Main extends React.Component {
  render() {

    let close = <div className="close" onClick={() => {this.props.onCloseArticle()}}></div>

    return (
      <div id="main" style={this.props.timeout ? {display: 'flex'} : {display: 'none'}}>

        <article id="intro" className={`${this.props.article === 'admirals' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">ADMIRAL SECTION</h2>
          <span className="image main"><img src={pic01} alt="admin section" /></span>
          <h3>OUR LEADER</h3><span>BAAAM</span>&nbsp;&nbsp;<span>(GER)</span>
          <br/><br/>
          <h3>GENERALS</h3>
          <span>IDEFIX PRINZ (Robert)</span>&nbsp;&nbsp;<span>(GER)</span><br/>
          <span>ADMIN (name_changed)</span>&nbsp;&nbsp;<span>(GER)</span><br/>
          <span>WARLEGION (Roddy)</span>&nbsp;&nbsp;<span>(UK)</span><br/>
          <span>ZOOHR (Patryk)</span>&nbsp;&nbsp;<span>(PL/UK)</span><br/>
          <span>HANTARES</span>&nbsp;&nbsp;<span>(FR)</span><br/>
          <span>IRRESPEUR</span>&nbsp;&nbsp;<span>(FR)</span><br/>
          <span>BOUUH</span>&nbsp;&nbsp;<span>(FR)</span><br/>
          <br/>
          <h3>PLAYERS COUNT : 76</h3>


          {close}
        </article>

        <article id="work" className={`${this.props.article === 'navigator' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">navigators tips&tricks</h2>
          <span className="image main"><img src={pic02} alt="" /></span>
          <h3>1. GET ALLIANCE POINTS EVERYDAY</h3>
          <p>First thing you do when login for the day. Is to solo kill the biggest pirate you can find. </p>
          <p>You will be rewarded with alliance points only for that FIRST PIRATE. Killing more, later, will not give you much more points.
          If you kill 620k pirate you will receive 220.000 points, for 293k = 140.000 points for example.</p>
          <p>It is beneficial also to open S Resources Legion and use debris from that pirate to finish Legion fast.
          For legion you receive 25.000 points and Hyper Crate with nice rewards.
          </p>
          <p>Additionaly by donating 1Million minerals to alliance , you will be rewarded 10.000 points. Per each 1Mil donation.
          </p>
          <p>So, I am able to generate average of 240.000 points per day , and exchange them for 6x 8 hours speedup in alliance shop,
          in order to boost my Station lvl6 build. That is 48 hours boost per day !
          </p>
          <p>Zoohr</p>

          {close}
        </article>

        <article id="about" className={`${this.props.article === 'armory' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Ship designs</h2>
          <span className="image main"><img src={pic03} alt="" /></span>
          <p>Here you can find ship designs we use in combat. For tanking most players use frigates with maxium shields.
          And damage units to accompany frigate tanking fleet.
          .</p>
          <h2 className="major">Zoohr designs</h2>
          <p>I dont have space in my design center for Destroyers and Cruisers designs. Sorry guys :(</p>
          <h4>1. TANK - FRIGATE UNIT</h4>
          <span className="image main"><img src={frig1} alt="" /></span>
          <span className="image main"><img src={frig2} alt="" /></span>
          <p>You must accompany this fleet with Tanking Admiral that have (-%) to received damage or (+) evasion</p>
          <span className="image main"><img src={tank} alt="" /></span>
          <h4>2. TANK - BATTLE CRUISER "RAYNOR"</h4>
          <span className="image main"><img src={ray7} alt="" /></span>
          <span className="image main"><img src={ray8} alt="" /></span>
          <h4>3. ANTI FRIGATES - BATTLE CRUISER "RAYNOR"</h4>
          <p>You must accompany this fleet with Damage Admiral that have have (%) to damage dealing or (+) accuracy in order to target frigates better.</p>
          <span className="image main"><img src={att} alt="" /></span>
          <span className="image main"><img src={ray1} alt="" /></span>
          <span className="image main"><img src={ray2} alt="" /></span>
          <h4>4. ANTI BIG UNITS - BATTLE CRUISER "RAYNOR"</h4>
          <p>You must accompany this fleet with Damage Admiral that have have (+) accuracy in order to improve cannons accuracy from 90 to 110.</p>
          <span className="image main"><img src={kinet} alt="" /></span>
          <span className="image main"><img src={ray3} alt="" /></span>
          <span className="image main"><img src={ray4} alt="" /></span>
          <h4>5. MULTI TASK - BATTLE CRUISER "RAYNOR"</h4>
          <span className="image main"><img src={ray5} alt="" /></span>
          <span className="image main"><img src={ray6} alt="" /></span>
          {close}
        </article>

        <article id="about" className={`${this.props.article === 'gallery' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">war diary</h2>
          <span className="image main"><img src={pic03} alt="" /></span>
          <p>Here we post some pictures from combats and wars</p>
          {close}
        </article>

        <article id="about" className={`${this.props.article === 'blog' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Blog</h2>
          <span className="image main"><img src={pic03} alt="" /></span>
          <p>Content on the way. Check back everyday. Stay tuned !</p>
          {close}
        </article>

        <article id="contact" className={`${this.props.article === 'contact' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Contact us</h2>
          <form method="post" action="#">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li><input type="submit" value="Send Message" className="special" /></li>
              <li><input type="reset" value="Reset" /></li>
            </ul>
          </form>
          <ul className="icons">
            <li><a href="#" className="icon fa-twitter"><span className="label">Twitter</span></a></li>
            <li><a href="#" className="icon fa-facebook"><span className="label">Facebook</span></a></li>
            <li><a href="#" className="icon fa-instagram"><span className="label">Instagram</span></a></li>
            <li><a href="#" className="icon fa-github"><span className="label">GitHub</span></a></li>
          </ul>
          {close}
        </article>

      </div>
    )
  }
}

Main.propTypes = {
  route: React.PropTypes.object,
  article: React.PropTypes.string,
  articleTimeout: React.PropTypes.bool,
  onCloseArticle: React.PropTypes.func,
  timeout: React.PropTypes.bool
}

export default Main
