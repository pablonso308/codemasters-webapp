import React from 'react';
import App from 'next/app';
import '../styles/globals.css';
import BackofficeLayout from '../components/BackofficeLayout';

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;


    const Layout = Component.Layout || BackofficeLayout;

    return (
        <Layout>
          <Component {...pageProps} />
        </Layout>
    );
  }
}

export default MyApp;
