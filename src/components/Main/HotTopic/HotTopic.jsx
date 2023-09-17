import TextExpander from "./TextExpender";

function HotTopic({ hotNews }) {
  const {
    image_url: image,
    url,
    title,
    summary: sum,
    news_site: site,
    published_at: published,
  } = hotNews;

  return (
    <div className="flex flex-col gap-[30px] xl:flex-row">
      <a href={url}>
        <figure className="relative">
          <img
            src={image}
            alt=""
            className="rounded-2 relative h-[200px] w-[305px] object-cover xs:h-[289px] xs:w-[647px] lg:h-[400px] lg:max-w-[870px] "
          />
          <figcaption className="absolute top-[126px] max-w-[281px] text-textWhite xs:left-3 sm:left-8 sm:top-[159px] lg:top-[190px] lg:max-w-[378px]">
            <p className="mb-2 font-Playfair text-base font-bold md:text-2xl md:leading-[48px] lg:mb-4">
              {title}
            </p>
            <p className="mr-[27px] inline-block font-Roboto text-xs font-normal leading-[18px]">
              {new Date(Date.parse(published)).toLocaleDateString("ru-RU")}
            </p>
            <p className="inline-block font-Roboto text-xs font-normal leading-[18px]">
              {site}
            </p>
          </figcaption>
        </figure>
      </a>
      <TextExpander>{sum}</TextExpander>
    </div>
  );
}

export default HotTopic;
