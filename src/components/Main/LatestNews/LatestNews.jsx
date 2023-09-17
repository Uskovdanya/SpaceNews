const spareImage =
  "https://planetary.s3.amazonaws.com/web/assets/pictures/_2400x3596_crop_center-center_82_line/20150515_BN_Full_072_ca.jpg";
function replaceImage(error) {
  error.target.src = spareImage;
}

function LatestNews({ item }) {
  const {
    image_url: image,
    url,
    title,
    news_site: site,
    published_at: published,
  } = item;
  return (
    <a className="w-[143px] sm:w-[203px] lg:w-[270px]" href={url}>
      <img
        src={image}
        onError={replaceImage}
        alt="picture"
        className="mb-4 h-[96px] w-[143px] rounded-lg object-cover sm:h-[128px] sm:w-[203px] md:h-[176px] md:w-[270px]"
      />
      <h3 className="text-4 mb-6 break-words font-Playfair font-bold text-textColor md:text-[18px]  lg:text-[24px]  ">
        {title}
      </h3>
      <div className="flex gap-4">
        <p className="font-Roboto text-[8px] font-normal text-newsTextColor  md:text-xs">
          {new Date(Date.parse(published)).toLocaleDateString("ru-RU")}
        </p>
        <p className="font-Roboto text-[8px] font-normal text-newsTextColor md:text-xs">
          {site}
        </p>
      </div>
    </a>
  );
}
export default LatestNews;
