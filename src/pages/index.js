import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageTutorials from '@site/src/components/HomepageTutorials';

import styles from './index.module.css';

function HomepageHeader() {
    const {siteConfig} = useDocusaurusContext();
    return (
        <header className={clsx('hero', styles.heroBanner, styles.heroBackground)}>
            <div className={clsx("container", styles.heroContainer)}>
                <img src="/img/logo.svg" alt="EpiMac Logo" width={250} />
                {/*<h1 className="hero__title">{siteConfig.title}</h1>*/}
                <p className="hero__subtitle">{siteConfig.tagline}</p>
                <div className={styles.buttons}>
                    <Link
                        className="button button--secondary button--lg"
                        to="/docs/intro">
                        Get Started
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
            title={`${siteConfig.title}`}
            description="Documentation for EpiMac">
            <div className={styles.logo_banner}>
                <HomepageHeader/>
                <main>
                    <HomepageTutorials/>
                </main>
            </div>
        </Layout>
    );
}
