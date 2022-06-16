import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import PolicyStar from "../customicons/PolicyStar";

const Privacy = () => {
  const navigate = useNavigate();
  return (
    <section className='privacy'>
      <div className='privacy__lead'>
        <h4 className='privacy__heading'>GalleryOne Rules and policy</h4>
        <p className='privacy__text'>
          We're committed to providing a secure and fair marketplace for our
          buyers and sellers. To support this commitment, we've put in place
          rules and policies that govern our expectations of buyers and sellers,
          the actions we'll take to keep you safe, and how we'll protect you if
          something goes wrong.
        </p>
      </div>

      <section className='policies'>
        <div className='policy__texts'>
          <p className='policy'>
            {" "}
            By becoming familiar with and following{" "}
            <Link to='/policy' className='blue'>
              our policies,
            </Link>{" "}
            you'll help us maintain a safe environment for all, and be able to
            avoid interruptions that might come from inadvertent violations of
            our rules.
          </p>
          <p className='policy'>
            Some of our rules reflect local legal requirements, while others are
            based on our experience of how best to protect everyone using
            GalleryOne services.
          </p>
          <p className='policy'>
            In our policy section, you'll find information on items that can and
            can't be sold, guides to creating and maintaining listings, details
            on how we protect your personal details and more.
          </p>
          <p className='policy'>
            You can also find our{" "}
            <Link to='/policy' className='blue'>
              {" "}
              User Agreement, User Privacy Notice,
            </Link>{" "}
            and &nbsp;
            <Link to='/policy' className='blue'>
              Cookie Notice.{" "}
            </Link>{" "}
            These lay out the most critical information around our terms of use,
            the information we collect from you, and how we keep that
            information safe.
          </p>
          <div className='headed__policy'>
            <p className='policy__heading'>Prohibited and restricted items</p>
            <p className='text'>
              Learn about items that can and can't be sold on GalleryOne, and
              where we have restrictions on the sale of some products and
              services.
            </p>

            <p className='policy__heading'>Rules and policies for buyers</p>
            <p className='text'>
              When you bid on or buy and item on GalleryOne, you're agreeing to
              the rules we've set out for our community.
            </p>

            <p className='policy__heading'>Feedback policies</p>
            <p className='text'>
              While feedback is intended as an open forum, we have guidelines
              and policies to ensure it's used constructively and fairly.
            </p>

            <p className='policy__heading'>Member behavior policies</p>
            <p className='text'>
              When you buy and sell on GallerOne, we expect that you and your
              information are treated in a respectful manner, and that you
              afford other members the same courtesy.
            </p>

            <p className='policy__heading'>
              {" "}
              GalleryOne Money Back Guarantee policy
            </p>
            <p className='text'>
              When you buy on GalleryOne, in most cases, we guarantee that
              you'll get your item or your money back.
            </p>

            <p className='policy__heading'> Listing policies</p>
            <p className='text'>
              Find out everything you need to know about our rules for creating
              listings, and get advice on how to make your listings more
              successful.
            </p>
            <p className='policy__heading'> Selling policies </p>
            <p className='text'>
              Our selling policies are designed to help you deliver the best
              experience possible to your buyers.
            </p>
            <p className='policy__heading'>
              {" "}
              False reports of policy violations{" "}
            </p>
            <p className='text'>
              Find out how we deal with false reports of policy violations.
            </p>

            <p className='policy__heading'>Identity policies</p>
            <p className='text'>
              Find out how our identity policies protect all of our members, and
              make GalleryOne a safe and trusted marketplace.
            </p>
            <p className='policy__heading'>Payment policies</p>
            <p className='text'>
              Learn about the approved payment methods sellers can offer in
              their listings and find help on what to do if something goes
              wrong.
            </p>

            <p className='policy__heading'>Resolving technical issues</p>
            <p className='text'>
              Learn how to troubleshoot any technical issues you may experience
              with our site.
            </p>
            <p className='text'>
              Activity that doesn’t follow GalleryOne policy could result in a
              range of actions including administratively ending or canceling
              listings, hiding or demoting all listings from search results,
              lowering a seller's rating, buying or selling restrictions, loss
              of buyer or seller protections, account suspension, application of
              fees, and recovery of expenses for policy monitoring and
              enforcement, for example. All fees paid or payable in relation to
              listings in which we take any action can't be refunded or
              otherwise credited.
            </p>
          </div>
        </div>

        <section className='helpful'>
          <div className='helpful__lead'>
            <div>
              <h3 className='helpful__heading'>
                How helpful was this article?
              </h3>
            </div>
            <div className='helpful__stars'>
              <div className='img'>
                <PolicyStar />
              </div>
              <div className='img'>
                <PolicyStar />
              </div>
              <div className='img'>
                <PolicyStar />
              </div>
              <div className='img'>
                <PolicyStar />
              </div>
              <div className='img'>
                <PolicyStar />
              </div>
            </div>
          </div>

          <section className='help'>
            <div className='help__lead'>
              <p className='help__text'>Need more help?</p>
            </div>

            <div className='button'>
              <button
                className='help__button'
                onClick={() => navigate("/contact")}
              >
                Contact us
              </button>
            </div>
          </section>

          {/* <div className='helpful__details'>
            <p className='helpful__text'>
              It takes only a few min to create a GalleryOne account. Once your
              account is set up, you and buy and sell here
            </p>

            <button
              className='helpful__button'
              onClick={() => navigate("/signup")}
            >
              Sign Up
            </button>
          </div> */}
        </section>
      </section>
    </section>
  );
};

export default Privacy;
