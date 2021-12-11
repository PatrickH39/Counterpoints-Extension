import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Explore Canada’s History',
    Svg: require('../../static/img/explore.svg').default,
    description: (
      <>
        Take a look at huge events that influence Canada&apos;s culture and our cultural identity. Explore some of the contributions that Canada has made to the world!
      </>
    ),
  },
  {
    title: 'Learn From The Past',
    Svg: require('../../static/img/analysis.svg').default,
    description: (
      <>
        By learning about the history and world events that have occured, we can prevent anything bad from happening, and instead, learn and evolve for a better future.
      </>
    ),
  },
  {
    title: 'Test Your Knowledge',
    Svg: require('../../static/img/test.svg').default,
    description: (
      <>
        Extend your critical thinking skills, and see what you have really learnt from each section covered by testing your knowledge with the quizzes on select pages!
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
