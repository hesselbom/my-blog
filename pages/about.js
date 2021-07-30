import Head from 'next/head'
import styles from '../styles/BlogPage.module.css'
import Header from '../components/Header'
import BlogPost from '../components/BlogPost'

export default function About() {
  const data = {
    title: 'About',
    content: `You have a to-do list that scrolls on for days. You are managing multiple projects, getting lots of email and messages on different messaging systems, managing finances and personal health habits and so much more.

It all keeps piling up, and it can feel overwhelming.

How do you keep up with it all? How do you find focus and peace and get stuff accomplished when you have too much on your plate?

In this primer, I’ll look at some key strategies and tactics for taking on an overloaded life with an open heart, lots of energy, and a smile on your face.

### The First Step: Triage

Whether you’re just starting your day, or you’re in the middle of the chaos and just need to find some sanity … the first step is to get into triage mode.`
  }

  return (
    <>
      <Head>
        <title>My Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Header />

        <BlogPost isMainPage {...data} />
      </main>
    </>
  )
}
