import imagemin from "imagemin";
import imageminWebp from "imagemin-webp";

await imagemin(["jpgImages/*.{jpg,png}"], {
  destination: "webpImages",
  plugins: [imageminWebp({ quality: 65 })],
});

console.log("Images optimized");
