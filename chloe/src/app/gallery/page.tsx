import PhotoGallery from "@/components/PhotoGallery";
import Image from "next/image";

export default function Gallery() {
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
          HAPPY VALENTINES BABY!!
        </h2>
        <p style={{ fontSize: "1.1rem", opacity: 0.8 }}>
          I hope you enjoyed this little surprise I put together for you. I had
          so much fun creating it, and I hope it brought a smile to your face.{" "}
          <br />
          Thank you for being such an amazing person in my life.
          <br />I love you to the moon and back!
        </p>
        <Image
          src="/cat2.gif"
          alt="Cute cat"
          width={500}
          height={400}
          style={{

            objectFit: "cover",
          }}
        />
      </div>
    </div>
  );
}
