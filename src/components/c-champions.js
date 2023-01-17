const images = require.context("../assets/champs", false, /\.(png|jpe?g)$/);
const imagesKeys = images.keys();
const champions = imagesKeys.map((key) => (
    <img src={images(key)} id={key.split("/").pop().split(".")[0]} />
));

export default champions;
