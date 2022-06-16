import React from "react";
import MailYelo from "../customicons/MailYelo";
import Mail from "../customicons/Mail";

const Inbox = () => {
  return (
    <section className='sell__information'>
      <div className='sell__padding'>
        <div className='inbox'>
          <div className='inbox__wrapper'>
            <div className='inbox__mail'>
              <div className='inbox__details'>
                <MailYelo />
                <span className='inbox__content'>
                  You received a bid for your item!
                </span>
              </div>

              <div className='inbox__period'>
                <p className='inbox__date'>13th May, 2020</p>
              </div>
            </div>

            <div className='inbox__mail'>
              <div className='inbox__details'>
                <MailYelo />

                <span className='inbox__content'>
                  Won bid for match tickets
                </span>
              </div>

              <div className='inbox__period'>
                <p className='inbox__date'>13th May, 2020</p>
              </div>
            </div>

            <div className='inbox__mail'>
              <div className='inbox__details'>
                <Mail />
                <span className='inbox__content'>You sold an item!</span>
              </div>

              <div className='inbox__period'>
                <p className='inbox__date'>13th May, 2020</p>
              </div>
            </div>
          </div>
          <div className='inbox__number'>
            <p className='inbox__digit'>1</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Inbox;
