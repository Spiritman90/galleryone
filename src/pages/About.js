import React from "react";
import Value from "../assets/About.jpg";
import James from "../assets/James.jpg";
import Tunmise from "../assets/Tunmise.jpg";
import Bethel from "../assets/Bethel.jpg";
import Ellipse from "../assets/Ellipse 27.jpg";
import WhatCard from "../components/WhatCard";
import Femi from "../assets/fm.jpg";
import Pere from "../assets/pere.jpg";
import Samuel from "../assets/samuel.jpg";
import Dimeji from "../assets/dimeji.jpg";

const About = () => {
  return (
    <section className='about'>
      <div className='about__heading'>
        <h4 className='about__lead'>About GalleryOne</h4>
      </div>

      <section className='value'>
        <div className='value__lead'>
          <h4 className='value__heading'>More value for Less</h4>
          <p className='value__text'>
            Build your market strength with us at GalleryOne, With us you can be
            much more. Explore how you can buy lesser and even sell your
            products at much more amazing prices. Sounds amazing Right? Let’s
            tell you more...
          </p>
        </div>

        <div className='value__image'>
          <img src={Value} alt='' className='value__photo' />
        </div>
      </section>

      <section className='mission'>
        <div className='mission__lead'>
          <h2 className='mission__heading'>Our Mission at GalleyOne</h2>
          <p className='mission__text'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa
            pulvinar pulvinar tristique in. Id etiam leo et orci donec nisi sed
            nulla bibendum. In netus sed nulla sagittis interdum. Velit
            dignissim id ac consequat rutrum luctus dignissim. Lobortis maecenas
            mattis consequat nulla id nulla. Mauris consequat, aliquam egestas
            enim ornare pellentesque duis donec gravida. Ultricies neque et
            adipiscing vel orci sed urna, pulvinar lacinia. Non condimentum
            vulputate feugiat dictumst in at. Faucibus commodo velit arcu, id
            fames lobortis aenean etiam gravida. Ornare varius in ipsum magna
            quis tellus sed sed dictumst. Non mauris, suspendisse nibh metus
            dapibus enim lectus consequat. Libero cursus fames facilisis nunc.
            Sodales sit faucibus massa etiam et cras ut. Et eget hac quisque
            urna nisi ac massa euismod convallis. Libero id at massa commodo. In
            aliquam lacus, feugiat in amet ipsum elementum enim. Enim viverra
            lectus vitae, phasellus tellus magnis. Risus hac gravida tempus
            lobortis blandit dolor id odio. Est elit quam dolor vel, egestas
            aenean aliquam. Sapien sed eu id aliquet nec nulla lacus cum. Ut
            mattis vitae consequat dictumst dui maecenas nunc. Eleifend neque,
            at libero, eget placerat porta at dictum. At commodo in amet
            venenatis. Magna pretium, nibh penatibus hac nisl commodo. Urna arcu
            posuere porttitor netus.
          </p>
        </div>
      </section>

      <section className='team'>
        <div className='team__lead'>
          <h2 className='team__heading'>Meet the Team</h2>
        </div>

        <div className='team__gallery'>
          <div className='james__photo'>
            <img src={James} alt='james' className='team__photo' />
            <div className='team__profile'>
              <p className='team__name'>James Iweobi</p>
              <p className='team__role'>Back-end Engineer/Supervisor</p>
            </div>
          </div>

          <div className='tunmise__photo'>
            <img src={Tunmise} alt='tunmise' className='team__photo' />
            <div className='team__profile'>
              <p className='team__name'>Tunmise Adeyemo</p>
              <p className='team__role'>Design</p>
            </div>
          </div>

          <div className='james__photo'>
            <img src={Bethel} alt='beth' className='team__photo' />
            <div className='team__profile'>
              <p className='team__name'>Bethel Aboh</p>
              <p className='team__role'>Design</p>
            </div>
          </div>

          <div className='femi__photo'>
            <img src={Femi} alt='samuel' className='team__photo' />
            <div className='team__profile'>
              <p className='team__name'>Adewole Femi</p>
              <p className='team__role'>Frontend Developer</p>
            </div>
          </div>

          <div className='pere__photo'>
            <img src={Samuel} alt='samuel' className='team__photo' />
            <div className='team__profile'>
              <p className='team__name'>Samuel Omolaja</p>
              <p className='team__role'>Backend Developer</p>
            </div>
          </div>

          <div className='samuel__photo'>
            <img src={Pere} alt='samuel' className='team__photo' />
            <div className='team__profile'>
              <p className='team__name'>Egbekun Pere-Ebi</p>
              <p className='team__role'>Backend Developer</p>
            </div>
          </div>
          <div className='dimeji__photo'>
            <img src={Dimeji} alt='samuel' className='team__photo' />
            <div className='team__profile'>
              <p className='team__name'>Oladimeji Shekoni</p>
              <p className='team__role'>Data Analyst</p>
            </div>
          </div>

          <div className='ellipse__photo'>
            <img src={Ellipse} alt='samuel' className='team__photo' />
            <div className='team__profile'>
              <p className='team__name'>David Shedrach</p>
              <p className='team__role'>Product</p>
            </div>
          </div>
        </div>
      </section>

      <section className='what'>
        <div className='what__lead'>
          <h2 className='what__heading'>What makes us unique</h2>
        </div>
        <div className='what__card'>
          <WhatCard
            heading='Customer Satisfaction'
            message='We are here to provide the best of services to our custmers, and that includes making them happy.'
          />
          <WhatCard
            heading='Quality Assurance '
            message='All our sellers are verified and you are rest assured about what you get from us.
                         we are a tested and trusted brand.'
          />
          <WhatCard
            heading='Open & Honest 
                               communication'
            message='Communication is one of the important element of every successful market and we fully understand that. We say and share the right thing.'
          />
        </div>
      </section>
    </section>
  );
};

export default About;
