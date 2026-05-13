export default function Home() {
  return (
    <main style={styles.page}>
      <section style={styles.hero}>
        <div style={styles.left}>
          <img
            src="/velvet-cover.png"
            alt="Velvet Choice Part One The Pull cover"
            style={styles.cover}
          />
        </div>

        <div style={styles.right}>
          <p style={styles.kicker}>A psychological romance thriller</p>

          <h1 style={styles.title}>Velvet Choice</h1>
          <h2 style={styles.subtitle}>Part One: The Pull</h2>

          <p style={styles.hook}>
            Some rooms don’t trap you. They remember you.
          </p>

          <p style={styles.description}>
            You step into a place that reacts to fear, desire, and attachment.
            The man inside tells you to leave. But every choice pulls you
            deeper — and the room is already learning what you want.
          </p>

          <div style={styles.buttons}>
            <a href="/Velvet_Choice_Expanded_Print.pdf" style={styles.primary}>
              Read Free Preview
            </a>

            <a
              href="https://buy.stripe.com/3cIaEZgeqeRg0dE2QVak005"
              style={styles.secondary}
            >
              Unlock Full Access
            </a>
          </div>

          <p style={styles.note}>Monthly subscription. Cancel anytime.</p>
        </div>
      </section>
    </main>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    background:
      "radial-gradient(circle at center, #241018 0%, #090909 55%, #000 100%)",
    color: "white",
    padding: "40px",
    fontFamily: "Georgia, serif",
  },
  hero: {
    maxWidth: "1150px",
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns: "420px 1fr",
    gap: "60px",
    alignItems: "center",
  },
  cover: {
    width: "100%",
    borderRadius: "12px",
    boxShadow: "0 0 50px rgba(255, 190, 90, 0.25)",
  },
  kicker: {
    color: "#f4a6c7",
    letterSpacing: "4px",
    textTransform: "uppercase",
    fontSize: "14px",
  },
  title: {
    fontSize: "72px",
    lineHeight: "0.95",
    margin: "10px 0",
    color: "#f2b657",
  },
  subtitle: {
    fontSize: "32px",
    fontWeight: "normal",
    marginBottom: "30px",
  },
  hook: {
    fontSize: "26px",
    color: "#f7d28a",
    marginBottom: "25px",
  },
  description: {
    fontSize: "21px",
    lineHeight: "1.7",
    maxWidth: "620px",
  },
  buttons: {
    display: "flex",
    gap: "18px",
    marginTop: "35px",
    flexWrap: "wrap",
  },
  primary: {
    background: "#d9488d",
    color: "white",
    padding: "16px 28px",
    borderRadius: "10px",
    textDecoration: "none",
    fontSize: "18px",
    fontWeight: "bold",
  },
  secondary: {
    border: "1px solid #f2b657",
    color: "#f2b657",
    padding: "16px 28px",
    borderRadius: "10px",
    textDecoration: "none",
    fontSize: "18px",
    fontWeight: "bold",
  },
  note: {
    marginTop: "25px",
    color: "#d8b7c4",
    letterSpacing: "2px",
    textTransform: "uppercase",
    fontSize: "13px",
  },
  left: {},
  right: {},
};
