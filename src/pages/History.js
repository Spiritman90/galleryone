import React from "react";
import Circle from "../customicons/Circle";

const History = () => {
  return (
    <section className='sell__information'>
      <div className='sell__padding'>
        <div className='history'>
          <div className='history__wrapper'>
            <div className='history__mail'>
              <div className='history__details'>
                <Circle />
                <span className='history__content'>
                  You received a bid for your item!
                </span>
              </div>

              <div className='history__period'>
                <p className='inbox__date'>13th May, 2020</p>
              </div>
            </div>

            <div className='history__mail'>
              <div className='inbox__details'>
                <Circle />

                <span className='history__content'>
                  Won bid for match tickets
                </span>
              </div>

              <div className='history__period'>
                <p className='inbox__date'>13th May, 2020</p>
              </div>
            </div>

            <div className='history__mail'>
              <div className='history__details'>
                <Circle />
                <span className='history__content'>You sold an item!</span>
              </div>

              <div className='history__period'>
                <p className='history__date'>13th May, 2020</p>
              </div>
            </div>

            <div className='history__mail'>
              <div className='history__details'>
                <Circle />
                <span className='history__content'>You sold an item!</span>
              </div>

              <div className='history__period'>
                <p className='history__date'>13th May, 2020</p>
              </div>
            </div>
          </div>
          <div className='history__number'>
            <p className='history__digit'>1</p>
            <p className='history__digit'>2</p>
            <p className='history__digit'>3</p>
            <p className='history__digit'>4</p>
            <p className='history__digit'>5</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default History;
