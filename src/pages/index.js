import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';
import BackgroundSlider from 'react-background-slider';

import image1 from '/static/img/bg/image1.jpg'
import image2 from '/static/img/bg/image2.jpg'
import image3 from '/static/img/bg/image3.jpg'
import image4 from '/static/img/bg/image4.jpg'
import image5 from '/static/img/bg/image5.jpg'

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
      <BackgroundSlider
          images={[image1, image2, image3, image4, image5]}
          duration={8}
          transition={2}
        />
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/about/general-information">
            Read More 📚
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Chapter 6 Extension`}
      description="After the Cold War, the United Nations was a prevalent force to keep the peace between countries. With the fall of the Soviet Union, freedom, equality, and innovation were becoming more widespread with the diminished need for war. With less competition, countries work together to create medical and technological advancements that benefit humankind. However, as we advance at a rapid pace, new groups and countries threaten this peace with social media and advanced warfare.">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
