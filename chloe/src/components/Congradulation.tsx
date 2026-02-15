import PhotoGallery from "./PhotoGallery";

export function Congradulations() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "30px",
      }}
    >
      <PhotoGallery />
      <div style={{ textAlign: "center" }}>
        <h2 style={{ fontSize: "2rem", marginBottom: "20px" }}>
          Congratulations! You have unlocked the vault!
        </h2>
        <p style={{ fontSize: "1.1rem", opacity: 0.8 }}>
          Thank you for taking the time to go through this. I hope you enjoyed
          it as much as I enjoyed creating it for you.
        </p>
      </div>
    </div>
  );
}
