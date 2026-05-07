

export default function HomePage() {
  return (
    <main className="page">
      <section className="card">
        <div className="badge">Premium Romance Preview</div>

        <h1>Velvet Choice</h1>

        <p className="tagline">
          Steamy interactive love stories where every choice pulls you deeper.
        </p>

        <div className="story">
          <h2>Chapter 1</h2>

          <p>
            He takes the envelope from your hand, his fingers brushing yours just
            long enough to make your pulse jump.
          </p>
        </div>

        <div className="lockedBox">
          <p className="small center">
            🔒 Continue beyond the door.
          </p>

          <p>
            Unlock the full story library and continue instantly after checkout.
          </p>

          <a
            href="https://buy.stripe.com/3cI5KfBYafVk8Kaajnak004"
            target="_blank"
            rel="noopener noreferrer"
            className="lockedButton"
          >
            Unlock Velvet Choice — $5
          </a>

          <p className="small center">
            Cancel anytime. Instant access after checkout.
          </p>
        </div>
      </section>
    </main>
  );
}
