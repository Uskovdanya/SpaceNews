import LatestNews from "./LatestNews";

function NewsList({ listNews }) {
  return (
    <ul className="grid w-[1440px] grid-cols-section3 justify-items-center gap-x-[20px] gap-y-[32px] sm:grid-cols-section2  sm:gap-y-[40px] md:gap-x-[30px] md:gap-y-[64px] lg:grid-cols-section1 ">
      {listNews.slice(1).map((item) => (
        <LatestNews key={item.id} item={item} />
      ))}
    </ul>
  );
}
export default NewsList;
