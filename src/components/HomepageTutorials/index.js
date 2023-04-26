import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';


const CardList = [
    {
        title: 'Apple Developer with EpiMac',
        description: "Demandez votre accès au programme Apple Developer et commencez à développer vos applications pour iOS, iPadOS, macOS, watchOS et tvOS.",
        link: '/docs/developer-account'
    }
];

function Card({link, title, description}) {
    return (
        <div className={clsx('col col--4 card-demo')}>
            <div className="card">
                <div className="card__header">
                    <h3>{title}</h3>
                </div>
                <div className="card__body">
                    <p>{description}</p>
                </div>
                <div className="card__footer">
                    <Link to={link} className="button button--secondary button--block">Lien</Link>
                </div>
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
                    {CardList.map((props, idx) => (
                        <Card key={idx} {...props} />
                    ))}
                </div>
            </div>
        </section>
    );
}
