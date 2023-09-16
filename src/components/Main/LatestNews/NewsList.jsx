import LatestNews from "./LatestNews";

function NewsList({ listNews }) {
  return (
    <ul className=" grid lg:grid-cols-section1 sm:grid-cols-section2 grid-cols-section3 md:gap-x-[30px] md:gap-y-[64px] w-[1440px]  justify-items-center gap-x-[20px] sm:gap-y-[40px] gap-y-[32px]">
      {listNews.slice(1).map((item) => (
        <LatestNews key={item.id} item={item} />
      ))}
    </ul>
  );
}
export default NewsList;
