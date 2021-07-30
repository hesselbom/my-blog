import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/ArchivesPage.module.css'
import Header from '../components/Header'
import BlogPostArchiveLink from '../components/BlogPostArchiveLink'

export default function Archives() {
  const posts = [
    {
      date: new Date(2013, 0, 11),
      slug: 'primer',
      title: 'Primer: When You Have Too Much to Do',
      content: `You have a to-do list that scrolls on for days. You are managing multiple projects, getting lots of email and messages on different messaging systems, managing finances and personal health habits and so much more.

It all keeps piling up, and it can feel overwhelming.

How do you keep up with it all? How do you find focus and peace and get stuff accomplished when you have too much on your plate?

In this primer, I’ll look at some key strategies and tactics for taking on an overloaded life with an open heart, lots of energy, and a smile on your face.

### The First Step: Triage

Whether you’re just starting your day, or you’re in the middle of the chaos and just need to find some sanity … the first step is to get into triage mode.`
    },
    {
      date: new Date(2013, 0, 10),
      slug: 'primer2',
      title: 'Primer2: When You Have Too Much to Do',
      content: `You have a to-do list that scrolls on for days. You are managing multiple projects, getting lots of email and messages on different messaging systems, managing finances and personal health habits and so much more.

It all keeps piling up, and it can feel overwhelming.

How do you keep up with it all? How do you find focus and peace and get stuff accomplished when you have too much on your plate?

In this primer, I’ll look at some key strategies and tactics for taking on an overloaded life with an open heart, lots of energy, and a smile on your face.

### The First Step: Triage

Whether you’re just starting your day, or you’re in the middle of the chaos and just need to find some sanity … the first step is to get into triage mode.`
    }
  ]

  return (
    <>
      <Head>
        <title>Archives</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Header />

        <h1 className={styles.title}>Archives</h1>

        {
          posts.map(p => (
            <div className={styles.post}>
              <BlogPostArchiveLink key={p.slug} {...p} />
            </div>
          ))
        }
      </main>
    </>
  )
}
