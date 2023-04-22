import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
    {
        title: 'Test test',
        // Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
        description: (
            <>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium illum magnam, omnis perspiciatis
                porro praesentium sequi sunt? Cupiditate porro, voluptas?
            </>
        ),
    }
];

function Feature({Svg, title, description}) {
    return (
        <div className={clsx('col col--4')}>
            <div className="text--center padding-horiz--md">
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default function HomepageTutorials() {
    return (
        <section className={styles.features}>
            <div className="container">
                <h2>Most Popular Tutorials</h2>

                <div className="row">
                    {FeatureList.map((props, idx) => (
                        <Feature key={idx} {...props} />
                    ))}
                </div>
            </div>
        </section>
    );
}
