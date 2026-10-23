import styles from './Content.module.css'
import Image from 'next/image'

function Content({certificates}) {


  return (
      <div className={styles.grid}>

          { certificates.length > 0 && certificates.map((certificate) => (
            <article
              className={styles.card}
              key={certificate.title}
            >
              <div className={styles.imageWrapper}>
                <a
                  href={certificate.image.src}
                  target="_blank"
                  aria-label={`Open ${certificate.title} certificate`}
                >
                  <Image
                    src={certificate.image.src}
                    alt={`${certificate.title} certificate`}
                    className={styles.certificateImage}
                    width={600}
                    height={800}
                    sizes="(max-width: 700px) 100vw, 50vw"
                  />
                </a>
              </div>

              <div className={styles.cardContent}>
                <span className={styles.category}>
                  {certificate.category}
                </span>

                <h3>{certificate.title}</h3>

                <p>{certificate.description}</p>

                <a
                  href={certificate.image.src}
                  target="_blank"
                  className={styles.viewLink}
                >
                  View Full Certificate
                  <span aria-hidden="true"> ↗</span>
                </a>
              </div>
              
            </article>
          ))}
          
      </div>
  )
}

export default Content
