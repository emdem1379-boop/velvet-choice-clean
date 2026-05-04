

export default function HomePage() {
  return (
    <main className="page">
      <section className="card">
        <div className="badge">Premium Romance Preview</div>

        <h1>Velvet Choice</h1>
        <p className="tagline">Steamy interactive love stories where every choice pulls you deeper.</p>

        <div className="story">
          <h2>Chapter 1</h2>
          <p>
            You step into the penthouse office expecting a routine delivery.
            Instead, his eyes meet yours like he has been expecting you all along.
          </p>

          <p>“Most people knock,” he says softly.</p>

          <p>
            You should leave. You know you should. But something in his voice
            makes staying feel dangerous in exactly the right way.
          </p>

          <h2>Chapter 2</h2>
          <p>
            He takes the envelope from your hand, his fingers brushing yours just
            long enough to make your pulse jump.
          </p>
        </div>

        <div className="lockedBox">
          <div className="lockIcon">🔒</div>
          <h2>The rest is locked</h2>
          <p>
            Unlock the full story library and continue instantly after checkout.
          </p>

          <a
            href="https://buy.stripe.com/test_14AbIU8Kg3Pp3AngxQgA801"
            target="_blank"
            rel="noopener noreferrer"
            className="lockedButton"
          >
            Unlock Velvet Choice — $5/month
          </a>

          <p className="small center">Cancel anytime. Instant access after checkout.</p>
        </div>
      </section>
    </main>
  );
}
