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
    <div className="flex gap-[30px] xl:flex-row flex-col">
      <a href={url}>
        <figure className="relative">
          <img
            src={image}
            alt=""
            className="rounded-2 lg:max-w-[870px] lg:h-[400px] relative object-cover xs:w-[647px] xs:h-[289px] w-[305px] h-[200px]"
          />
          <figcaption className="absolute sm:left-8 xs:left-3 lg:top-[190px] text-textWhite lg:max-w-[378px] max-w-[281px] sm:top-[159px] top-[126px]">
            <p className="font-Playfair font-bold md:leading-[48px] md:text-2xl text-base mb-2 lg:mb-4">
              {title}
            </p>
            <p className="font-Roboto text-xs leading-[18px] font-normal inline-block mr-[27px]">
              {new Date(Date.parse(published)).toLocaleDateString("ru-RU")}
            </p>
            <p className="font-Roboto text-xs leading-[18px] font-normal inline-block">{site}</p>
          </figcaption>
        </figure>
      </a>
      <TextExpander>{sum}</TextExpander>
    </div>
  );
}

export default HotTopic;
