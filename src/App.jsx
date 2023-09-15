import { useEffect } from "react";
import { useState } from "react";
import "./App.css";

import Button from "./components/Header/LeftSideMenu/ButtonMenu";
import LeftSideMenu from "./components/Header/LeftSideMenu/LeftSideMenu";
import RightSideMenu from "./components/Header/RightSideMenu/RightSideMenu";
import Header from "./components/Header/Header";
import Search from "./components/Header/RightSideMenu/Search";

import Title from "./components/Main/HotTopic/Title";
import Main from "./components/Main/Main";
import HotTopic from "./components/Main/HotTopic/HotTopic";
import NewsList from "./components/Main/LatestNews/NewsList";
import Loader from "./components/Loader";
import ErrorMessage from "./components/ErrorMessage";

import Container from "./components/Main/Container";
import API from "./components/API/API";
import MobileMenu from "./components/Header/RightSideMenu/MobileMenu";

function App() {
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [topic, setTopic] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const [query, setQuery] = useState("");
  const [searchNews, setSearchNews] = useState([]);

  useEffect(function () {
    async function fetchNews() {
      try {
        setIsLoading(true);
        setError("");
        const res = await fetch(`https://api.spaceflightnewsapi.net/v4/articles/?limit=9`);
        if (!res.ok) throw new Error("Something goes wrong with fetching news");
        const data = await res.json();
        if (data.Response === "False") throw new Error("News not found");

        setNews(data.results);
        setTopic(data.results[0]);
      } catch (err) {
        console.log(err.message);
      } finally {
        setIsLoading(false);
      }
    }
    fetchNews();
  }, []);

  useEffect(function () {
    async function fetchBlogs() {
      try {
        setIsLoading(true);
        setError("");
        const res = await fetch(`https://api.spaceflightnewsapi.net/v4/blogs/?limit=9`);
        if (!res.ok) throw new Error("Something goes wrong with fetching blogs");
        const data = await res.json();
        if (data.Response === "False") throw new Error("Blogs not found");

        setBlogs(data.results);
      } catch (err) {
        console.log(err.message);
      } finally {
        setIsLoading(false);
      }
    }
    fetchBlogs();
  }, []);

  function handleSearchNews() {
    async function fetchSearchNews() {
      try {
        setIsLoading(true);
        setError("");
        const res = await fetch(
          `https://api.spaceflightnewsapi.net/v4/articles/?limit=4&search=${query}`
        );
        if (!res.ok) throw new Error("Something goes wrong with fetching news");
        const data = await res.json();
        if (data.Response === "False") throw new Error("News not found");
        if (data.results < 1) throw new Error("News not found");

        setSearchNews(data.results);

        console.log(data.results);
      } catch (err) {
        console.log(err.message);
      } finally {
        setIsLoading(false);
      }
    }
    if (query.length < 3) {
      /* если поиск меньше 3 то можно не искать  выставляем мовиз  выставляем ошибки и прекращаем действие функции */
      setSearchNews([]);
      setError("");
      return;
    }
    fetchSearchNews();
  }

  //useEffect(function() {
  //  const controller = new AbortController()

  //  async function fetchNewsSearch
  //})

  //function formatDay(dateStr) {
  //  return new Intl.DateTimeFormat("en", {
  //    weekday: "short",
  //  }).format(new Date(dateStr));
  //}
  //formatDay(data.results[0].published_at);

  return (
    <>
      <div className="container lg:pl-[125px] lg:pr-[135px] pt-8 sm:pl-[60px] sm:pr-[59px] pl-[35px] pr-[35px] pb-12">
        <Header>
          <LeftSideMenu>
            <Button>News</Button>
            <Button>Portal</Button>
          </LeftSideMenu>
          <RightSideMenu>
            <Search query={query} setQuery={setQuery} onSearchNews={handleSearchNews} />
            <MobileMenu />
          </RightSideMenu>
        </Header>
        <Main>
          <Container>
            {isLoading && <Loader />}
            {!isLoading && !error && <NewsList listNews={searchNews} />}
            {error && <ErrorMessage message={error} />}
          </Container>
          <Title id="hotTopics" font="sm:text-[48px]" smFont="text-[36px]">
            Hot topics
          </Title>
          <Container>
            {isLoading && <Loader />}
            {!isLoading && !error && <HotTopic hotNews={topic} />}
            {error && <ErrorMessage message={error} />}
          </Container>
          <Title id="news" font="sm:text-[36px]" smFont="text-[24px]">
            Latest News
          </Title>
          <Container>
            {isLoading && <Loader />}
            {!isLoading && !error && <NewsList listNews={news} />}
            {error && <ErrorMessage message={error} />}
          </Container>
          <Title id="blogs" font="text-[36px]">
            Blogs
          </Title>
          <Container>
            {isLoading && <Loader />}
            {!isLoading && !error && <NewsList listNews={blogs} />}
            {error && <ErrorMessage message={error} />}
          </Container>
        </Main>
      </div>
    </>
  );
}

export default App;
