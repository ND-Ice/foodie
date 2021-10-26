import axios from "axios";
import { useState } from "react";
import styled from "styled-components";
import { FiSearch, FiX } from "react-icons/fi";
import Masonry from "react-masonry-css";
import { ScaleLoader } from "react-spinners";
import useDocumentTitle from "../hooks/useDocumentTitle";

import {
  AppContainer,
  Icons,
  LoadMore,
  RecipeCard,
  SkeletonLoader,
} from "../components";
import masonryBreakpoints from "../utils/masonryBreakpoints";
import api from "../api/recipes";

export default function Search() {
  const [searchedData, setSearchedData] = useState([]);
  const [searchResult, setSearchResult] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searching, setSearching] = useState(false);
  const [searchText, setSearchText] = useState("");

  useDocumentTitle("Foodie - Search");

  const getSearchResult = async (query) => {
    try {
      setSearching(true);
      const response = await axios.get(
        `https://api.edamam.com/auto-complete?app_id=266afdbd&app_key=2d7142af464fa0ae6743d8f94a00c0dd&q=${query}`
      );
      setSearchedData(response.data);
      return setSearching(false);
    } catch (error) {}
  };
  console.log(searchResult);
  return (
    <AppContainer>
      <SearchContainer>
        <SearchBar>
          <SearchInput
            type="text"
            placeholder="search"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
              return getSearchResult(e.target.value);
            }}
          />

          <ScaleLoader loading={searching} color="#05a081" height={20} />

          <Icons
            className="search-icon"
            icon={searchText.length > 0 ? FiX : FiSearch}
            iconColor="#232a34"
            backgroundColor="white"
            size={54}
            onClick={() => setSearchText("")}
          />
        </SearchBar>
        <SearchedDataContainer>
          {searchedData?.map((recipe, index) => (
            <SearchedItem
              key={index}
              onClick={async () => {
                try {
                  setLoading(true);
                  setSearchText(recipe);
                  setSearchedData([]);
                  const response = await api.getSearchedItem(recipe);
                  setSearchResult(response.data);
                  return setLoading(false);
                } catch (error) {
                  console.log(error);
                }
              }}
            >
              {recipe}
            </SearchedItem>
          ))}
        </SearchedDataContainer>
      </SearchContainer>
      <SearchResult>
        {loading ? (
          <SkeletonLoader />
        ) : (
          <Masonry
            breakpointCols={masonryBreakpoints}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
          >
            {searchResult?.hits?.map((recipe, index) => (
              <RecipeCard key={index} recipeInfo={recipe} />
            ))}
          </Masonry>
        )}

        {searchResult?._links?.next && (
          <LoadMore
            disabled={loading}
            onClick={async () => {
              setLoading(true);
              const response = await axios.get(
                searchResult?._links?.next?.href
              );
              setSearchResult(response?.data);
              setLoading(false);
              return window.scrollTo(0, 0);
            }}
          >
            {loading ? (
              <ScaleLoader color="#ffffff" height={20} />
            ) : (
              "Load More"
            )}
          </LoadMore>
        )}
      </SearchResult>
    </AppContainer>
  );
}

const SearchContainer = styled.div`
  padding: 2rem 1rem;
  display: grid;
  background: #161b22;
  position: relative;

  @media (min-width: 1024px) {
    place-items: center;
  }
`;

const SearchBar = styled.div`
  display: flex;
  border-radius: 1rem;
  overflow: hidden;
  background: #ffffff;
  align-items: center;
  flex-wrap: nowrap;
  border: 4px solid #232a34;
  transition: all 0.3s;

  :focus-within {
    border-color: #05a081;

    .search-icon > * {
      color: #05a081;
    }
  }

  @media (min-width: 1024px) {
    width: 60%;
  }
`;

const SearchInput = styled.input`
  padding: 1.5rem;
  font-size: 1.6rem;
  outline: none;
  flex: 1;
  border: 0;
`;

const SearchedDataContainer = styled.div`
  position: absolute;
  width: 100%;
  background: #fafafa;
  top: 85%;
  overflow: hidden;
  z-index: 10;

  @media (min-width: 1024px) {
    width: 60%;
    border-radius: 1rem;
  }
`;

const SearchedItem = styled.div`
  font-size: 1.6rem;
  font-weight: 500;
  padding: 1rem 1.5rem;
  cursor: pointer;

  :hover {
    background: #f2f2f2;
  }
`;

const SearchResult = styled.div`
  padding: 2rem 1rem;

  @media (min-width: 1024px) {
    padding: 2rem 5rem;
  }
`;
