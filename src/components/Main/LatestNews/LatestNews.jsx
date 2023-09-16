const spareImage =
  "https://planetary.s3.amazonaws.com/web/assets/pictures/_2400x3596_crop_center-center_82_line/20150515_BN_Full_072_ca.jpg";
function replaceImage(error) {
  error.target.src = spareImage;
}

function LatestNews({ item }) {
  const { image_url: image, url, title, news_site: site, published_at: published } = item;
  return (
    <a className=" lg:w-[270px] sm:w-[203px] w-[143px]" href={url}>
      <img
        src={image}
        onError={replaceImage}
        alt="picture"
        className="rounded-lg mb-4 object-cover md:h-[176px] md:w-[270px] sm:h-[128px]  sm:w-[203px] w-[143px] h-[96px]"
      />
      <h3 className="text-textColor lg:text-[24px] md:text-[18px] text-4 font-bold font-Playfair mb-6 break-words">
        {title}
      </h3>
      <div className="flex gap-4">
        <p className="font-normal font-Roboto md:text-xs text-[8px]  text-newsTextColor">
          {new Date(Date.parse(published)).toLocaleDateString("ru-RU")}
        </p>
        <p className="font-normal font-Roboto md:text-xs text-[8px] text-newsTextColor">{site}</p>
      </div>
    </a>
  );
}
export default LatestNews;
