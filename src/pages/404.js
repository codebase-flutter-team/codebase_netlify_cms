import React from 'react'
import Layout from '../components/layout/Layout'

const NotFoundPage = () => {
  const styles = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: 'calc(100vh-12rem)'
  }

 return (
      <Layout>
        <div className="four04 hero">
          <h1>NOT FOUND</h1>
          <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
        </div>
      </Layout>
 )
}

export default NotFoundPage
